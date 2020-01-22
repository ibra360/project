import React from 'react';
import { Component } from 'react'
import { Col, Alert, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios'




class Login extends Component {

  state = {
    email: "",
    password: ""
  }
  onChangeHad = (props) => {
    this.setState({ [props.target.name]: props.target.value })
  }

  signInHandler = () => {
    Axios.post("/users/login", this.state)
    .then(res => this.props.history.push('./postadd'))
    .catch(err => (console.log(err)))
  }
  render() {

    return (
      <div>
        <br /> <br />
        <h2 className="text-center"><Alert color="primary">Sign In</Alert></h2>
        <Form style={{ margin: "10px" }}>

          <br />
          <Row form>
            <Col md={7}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input onChange={this.onChangeHad} type="email" name="email" placeholder="" />
              </FormGroup>
            </Col>
            <Col md={7}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input onChange={this.onChangeHad} type="password" name="password" placeholder="Enter your Password" />
              </FormGroup>
            </Col>
          </Row>

          <Button onClick={this.signInHandler} className="text-center" color="primary">Sign in</Button>
          <br /><br />
          <Alert className="text-center" color="primary">
            Don't have an account yet? <Link to="/Signup" className="alert-link">Sign Up </Link>here.
  </Alert>
        </Form>
      </div>
    )

  }



}



export default Login;