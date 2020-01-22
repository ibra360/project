import React, { Component } from 'react'
import axios from 'axios';
import { Col, Alert, Row, Button, FormGroup, Label, Input } from 'reactstrap';

export default class Contact extends Component {

  state = {
    image: "",
    title: "",
    description: "",
    contact: "",
    address: ""
  }

  onImageChange = (e) => {
    this.setState({ image: e.target.files[0] });
  }
  send = (props) => {
    this.setState({ [props.target.name]: props.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();

    var bodyFormData = new FormData();

    bodyFormData.append("title", this.state.title);
    bodyFormData.append("description", this.state.description);
    bodyFormData.append("contact", this.state.contact);
    bodyFormData.append("address", this.state.address);
    bodyFormData.append("image", this.state.image);

    axios({
      method: "post",
      url: "/users/postadd",
      data: bodyFormData,
      headers: { "Content-type": "multipart/form-data" }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  
  render() {

    console.log(this.state)
    return (
      <div>
        <br /> <br />
        <h2 className="text-center"><Alert color="primary">Post Your Add</Alert></h2>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleTitle">Title</Label>
              <Input onChange={this.send} type="text" name="title" id="exampleTitle" placeholder="" required />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleDetails">Description</Label>
              <Input onChange={this.send} type="textarea" name="description" id="exampleDetails" placeholder="enter your product details here" required />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input onChange={this.send} type="text" name="address" id="exampleAddress" placeholder="complete address" required />
            </FormGroup>

          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="exampleContact">Contact no.</Label>
              <Input onChange={this.send} type="number" name="contact" id="exampleContact" required />
            </FormGroup>
          </Col>
        </Row>
        <div className="text-center">
          <input onChange={this.onImageChange} type="file"></input>
          <br /> <br />

          <Button onClick={this.onSubmit} color="primary">Post Add</Button>
        </div>
      </div >
    )
  }


}
