import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import  './UserDashForm.css'

const DashForm = () => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // You can add your image processing logic here
    setImage(file);
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your form submission logic here
    console.log("Username:", username);
    console.log("Image:", image);
    console.log("Currency:", selectedCurrency);
  };

  const currencyOptions = [
    "Nigerian Naira",
    "Canadian Dollar",
    "Chinese Yuan",
    "British Pound",
    "Indian Rupee",
    "Kenyan Shilling",
    "US Dollar",
  ];

  return (
    <Container className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username" className="form-group">
          <Form.Label className="label">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="image" className="form-group">
          <Form.Label className="label">Upload Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
        </Form.Group>

        <Form.Group controlId="currencySelect" className="form-group">
          <Form.Label className="label">Select Currency</Form.Label>
          <Form.Control
            as="select"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            required
          >
            <option value="">Select a currency</option>
            {currencyOptions.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default DashForm;
