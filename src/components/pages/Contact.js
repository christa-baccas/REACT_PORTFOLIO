import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import { validateEmail } from '../../utils/helpers';

import "../styles/Contact.css";

export default function Contact() {
  let [contact, setContact] = useState({
    userName: "",
    email: "",
    textarea: "",
  });
  console.log(contact);

  let handleState = (e) => {
    e.preventDefault();
    let nameInput = document.querySelector(".name-input").value;
    let emailInput = document.querySelector(".email-input").value;
    let textArea = document.querySelector(".text-input").value;

    if (!nameInput || !emailInput || !textArea) {
      window.alert("Please enter text in the fields below.");
    } else {
      setContact({
        userName: nameInput,
        email: emailInput,
        textarea: textArea,
      });
    }
    if (!validateEmail(emailInput)) {
      window.alert('Email is invalid');
      return;
    }
  };

  return (
    <div className="contact-container">
      <Form onSubmit={handleState} className="form-container">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            className="name-input"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email Address"
            className="email-input"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5} 
            className="text-input" 
          />
        </Form.Group>
        <div className="btn-container">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
        </Form>
    </div>
  );
}