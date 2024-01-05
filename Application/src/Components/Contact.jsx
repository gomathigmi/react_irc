import { AppBar, Button, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Contact.css"
const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#9c27b0", 
      },
      secondary:{
        main: "#546e7a",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
                <AppBar position="static" className="appBar">
          <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Trippy
        </Typography>
            <Button
        color="inherit"
        component={Link}
        to="/"
        style={{ height: '56px', fontSize: '0.9rem' }}
      >
        Home
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/offers"
        style={{ height: '56px', fontSize: '0.9rem' }}
      >
        Offers
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/contact"
        style={{ height: '56px', fontSize: '0.9rem' }}
      >
        Contact
      </Button>

      <Button
        color="inherit"
        component={Link}
        to="/Login"
        style={{ height: '56px', fontSize: '0.9rem' }}
      >
        Account
      </Button>
          </Toolbar>
        </AppBar>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
      </ThemeProvider>
    </div>
  );
};

export default ContactPage;
