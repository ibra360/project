import React, { Component } from 'react';
import { Col, Alert, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class Example extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        address: "",
        city: "",
        phone: "",
        cnic: "",
        arr: []
    }

    send = (props) => {
        this.setState({ [props.target.name]: props.target.value })
    }
    // give = () => {
    //     return (
    //         axios.get('https://ipt-project-5dafe.firebaseio.com/myTable.json')
    //             .then((response) => {
    //                 this.setState({
    //                     arr: response.data,
    //                 })
    //                 console.log(this.state.arr);
    //             }
    //             )
    //     )
    // }

    onSubmit = () => {
        return (
            axios.post('/users/register', this.state)
                .then((response) => {
                    console.log(response);
                }
                )
        )
    }
    render() {

        // var abc = Object.values(this.state.arr);
        // var xyz = abc.map(value => {
        //     return <h3>{value}</h3>
        // })

        return (
            <div color="secondary" >
                <br /> <br />
                <h2 className="text-center"><Alert color="secondary">Sign Up</Alert></h2>
                <Form style={{ margin: "10px" }}>


                    <br />
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input onChange={this.send} type="email" name="email" id="exampleEmail" placeholder="" required />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleName">Name</Label>
                                <Input onChange={this.send} type="text" name="name" id="exampleName" placeholder="" required />
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input onChange={this.send} type="password" name="password" id="examplePassword" placeholder="Enter your Password" required />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Password2</Label>
                                <Input onChange={this.send} type="password" name="password2" id="examplePassword2" placeholder="Enter your Password" required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleAddress">Address</Label>
                            <Input onChange={this.send} type="text" name="address" id="exampleAddress" placeholder="complete address" required />
                        </FormGroup>
                    </Col>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleCity">City</Label>
                                <Input onChange={this.send} type="text" name="city" id="exampleCity" required />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleZip">Phone no.</Label>
                                <Input onChange={this.send} type="number" name="phone" id="exampleZip" required />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleState">CNIC no.</Label>
                                <Input onChange={this.send} type="number" name="cnic" id="exampleState" required />
                            </FormGroup>
                        </Col>

                    </Row>
                    <FormGroup check>
                        <Input type="checkbox" name="check" id="exampleCheck" />
                        <Label for="exampleCheck" check required>Accept Terms and Conditions</Label>
                    </FormGroup><br />
                    <Button onClick={this.onSubmit} color="secondary">Sign Up</Button>
                    <br /><br />
                </Form>
            </div>
        );
    }
}

export default Example;