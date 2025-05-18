import React, { useState } from 'react';
import './ContactPage.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [result, setResult] = useState('');
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setResult('');
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = form;

    if (!name || !email || !message) {
      setError("Please fill in all fields");
      return;
    }

    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "7d0504fc-0815-47f5-90e6-94c4f634559b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        setForm({ name: '', email: '', message: '' });
        event.target.reset(); 
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="form-wrapper">
      <form className="contact-form" id="contact" onSubmit={onSubmit}>
        <h2>Contact Us</h2>
        {error && <p className="error">{error}</p>}
        <input type="text" name="name" placeholder="Enter your name" value={form.name}  onChange={handleChange}    />
        <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
        <textarea name="message" placeholder="Enter your message..." value={form.message} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
        <div className="result">{result}</div>
      </form>
    </div>
  );
};

export default ContactForm;
