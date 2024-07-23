import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers'; // Importing email validation function

const Contact = () => {
  // State management using useState hook
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    // Reset error message when user starts typing again
    if (name === 'email') {
      setErrorMessage('');
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email using helper function
    const isValidEmail = validateEmail(formState.email);
    if (!isValidEmail) {
      setErrorMessage('Please enter a valid email.');
      return; // Exit early if email is invalid
    }

    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formState);

    // Clear form fields after submission (optional)
    setFormState({ name: '', email: '', message: '' });
  };

  // Styling for the component using inline styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      margin: 'auto',
      maxWidth: '800px',
      backgroundColor: 'aliceBlue',
      padding: '20px',
    },
    form: {
      width: '600px',
      backgroundColor: '#f2f2f2',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      boxSizing: 'border-box',
    },
    fields: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '8px',
      fontSize: '1rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
    },
    errorMessage: {
      color: 'red',
      fontSize: '0.8rem',
    },
    actions: {
      textAlign: 'center',
    },
    button: {
      width: '100%',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <main>
        {/* Form with submission handler */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.fields}>
            {/* Input field for Name */}
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.fields}>
            {/* Input field for Email */}
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            {/* Display error message if email is invalid */}
            {errorMessage && <span style={styles.errorMessage}>{errorMessage}</span>}
          </div>
          <div style={styles.fields}>
            {/* Textarea field for Message */}
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formState.message}
              onChange={handleChange}
              style={styles.input}
              required
            ></textarea>
          </div>
          <div style={styles.actions}>
            {/* Submit button */}
            <button type="submit" style={{ ...styles.button }}>Send Message</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Contact;
