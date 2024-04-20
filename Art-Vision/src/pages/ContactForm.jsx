import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './contactForm.css';
import Menu from '../component/Menu';
import Footer from '../component/Footer';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);
  axios.defaults.baseURL = 'http://localhost:3000';

  const validateForm = () => {
    let isValid = true;
    setErrors({});

    if (name.trim() === '') {
      isValid = false;
      setErrors({ name: 'Name is required' });
    }

    if (email.trim() === '') {
      isValid = false;
      setErrors({ email: 'Email is required' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      setErrors({ email: 'Invalid email format' });
    }

    if (subject.trim() === '') {
      isValid = false;
      setErrors({ subject: 'Subject is required' });
    }

    if (message.trim() === '') {
      isValid = false;
      setErrors({ message: 'Message is required' });
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({}); // Clear errors before validation

    if (validateForm()) {
      try {
        const response = await axios.post('/api/contact', {
          name,
          email,
          subject,
          message,
        });
        setIsSuccess(true);
        setIsSubmitting(false);
        clearForm(); // Clear form state after success
      } catch (error) {
        setIsError(true);
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setErrors({});
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <>
      <Menu />
      <label id='form_name'>CONTACT FORM</label>
      <form onSubmit={handleSubmit}>
        {/* Form fields with appropriate input types and error messages */}
        {errors.name && <p>{errors.name}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {errors.subject && <p>{errors.subject}</p>}
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={handleSubjectChange}
        />
        {errors.message && <p>{errors.message}</p>}
        <textarea placeholder="Message" value={message} onChange={handleMessageChange} />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
        {isSuccess && (
          <p className="success">Thank you for your message!</p>
        )}
        {isError && <p className="error">Error! Please try again.</p>}
        {isSuccess || isError ? (
          <button onClick={clearForm}>Ok</button>
        ) : null}
      </form>

      <div id="footer"><Footer /></div>
    </>
  );
};

export default ContactForm;
