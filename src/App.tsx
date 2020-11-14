import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { findMethods, Method, MethodResult } from './core';
import { Card } from 'react-bootstrap';

interface FormTextState {
  ref: React.RefObject<HTMLInputElement>,
  valid: boolean,
};
interface State {
  inputs: {[key: number]: FormTextState},
  output: FormTextState,
  results: MethodResult[][],
};

export default class App extends React.Component<{}, State> {

  state: Readonly<State> = {
    inputs: {},
    output: {
      ref: React.createRef<HTMLInputElement>(),
      valid: true,
    },
    results: [],
  };

  constructor(props: {}) {
    super(props);
  }

  componentDidMount() {
    this.addInput();
  }

  handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    try {
      const input: any[] = [];
      Object.keys(this.state.inputs).map(Number).forEach((i) => {
        if (i === this.maxInputID()) return;
        input.push(JSON.parse(this.state.inputs[i].ref.current!.value));
      });
      const output: any = JSON.parse(this.state.output.ref.current!.value);
      const results_raw: MethodResult[] = findMethods(input, output);
      const results_grouped: MethodResult[][] = [];
      let last_prio = 0;
      for (const result of results_raw) {
        if (result.priority >= Math.floor(last_prio)+1) {
          results_grouped.push([]);
        }
        last_prio = result.priority;
        results_grouped[results_grouped.length-1].push(result);
      }
      this.setState({
        results: results_grouped,
      });
    } catch(ex) {
      const firstinput = this.state.inputs[Math.min(...Object.keys(this.state.inputs).map(Number))];
      try {
        JSON.parse(firstinput.ref.current!.value);
      } catch(ex) {
        firstinput.valid = false;
        this.forceUpdate();
      }
      try {
        JSON.parse(this.state.output.ref.current!.value);
      } catch(ex) {
        this.state.output.valid = false;
        this.forceUpdate();
      }
    }
  }

  handleOutputChange(ev: React.ChangeEvent<HTMLInputElement>) {
    try {
      JSON.parse(ev.target.value);
      this.state.output.valid = true;
    } catch(ex) {
      this.state.output.valid = false;
    }
    this.forceUpdate();
  }

  handleInputChange(i: number, ev: React.ChangeEvent<HTMLInputElement>) {
    if(ev.target.value === '') {
      this.state.inputs[this.maxInputID()].ref.current!.focus();
    } else {
      try {
        JSON.parse(ev.target.value);
        this.state.inputs[i].valid = true;
      } catch(ex) {
        this.state.inputs[i].valid = false;
      }
      this.forceUpdate();
    }
  }
  
  handleInputFocusLost(i: number) {
    if (this.state.inputs[i].ref.current!.value === '') {
      if (Object.keys(this.state.inputs).length > 1) {
        this.deleteInput(i);
      }
    }
  }
  
  handleInputFocusGained(i: number) {
    if (i === this.maxInputID()) {
      this.addInput();
    }
  }

  maxInputID() {
    if(Object.keys(this.state.inputs).length == 0) return -1;
    return Math.max(...Object.keys(this.state.inputs).map(Number));
  }

  addInput() {
    this.state.inputs[this.maxInputID()+1] = {
      ref: React.createRef<HTMLInputElement>(),
      valid: true,
    };
    this.forceUpdate();
  }

  deleteInput(i: number) {
    delete this.state.inputs[i];
    this.forceUpdate();
  }

  render() {
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="App-header">JS Method Finder</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Form.Group controlId="inputs">
              <Form.Label>input</Form.Label>
              {Object.keys(this.state.inputs).map(Number).map((i: number) => {
                return <Form.Control 
                  type="text" 
                  placeholder="" 
                  ref={this.state.inputs[i].ref} 
                  key={i} 
                  onChange={this.handleInputChange.bind(this, i)} 
                  onBlur={this.handleInputFocusLost.bind(this, i)} 
                  onFocus={this.handleInputFocusGained.bind(this, i)}
                  className={this.state.inputs[i].valid ? '' : 'is-invalid'}
                />
              })}
              <Form.Control.Feedback type="invalid">
                Please provide JSON.parsable values.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="output">
              <Form.Label>output</Form.Label>
              <Form.Control 
                type="text" 
                placeholder=""
                ref={this.state.output.ref} 
                onChange={this.handleOutputChange.bind(this)} 
                className={this.state.output.valid ? '' : 'is-invalid'}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a JSON.parsable value.
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Find</Button>
          </Form>
          {this.renderResults.call(this)}
        </Jumbotron>
      </Container>
    );
  }

  renderResults() {
    return (
      <div>
        {this.state.results.map((l: MethodResult[]) => {
          return (
            <div>
              <hr/>
              {l.map((res: MethodResult) => {
                return (
                  <Card>
                    <Card.Body>
                      <Card.Title>{res.method.print(...res.input)}</Card.Title>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
