import React, { useState } from 'react';
import './ContactPage.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    city: '',
    company: '',
    message: '',
  });

  const [result, setResult] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setResult('');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = form;

  if (!validateForm()) return;
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
        setForm({
          name: '',
          email: '',
          phone: '',
          website: '',
          city: '',
          company: '',
          message: '',
        });
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

  const validateForm = () => {
  const errors = {};
  
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!/^\d{10}$/.test(form.phone)) errors.phone = "Mobile number must be 10 digits.";
  if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Invalid email format.";
  if (!form.city.trim()) errors.city = "City is required.";
  if (!form.website.trim() && !/^https?:\/\/[\w.-]+\.[a-z]{2,}$/i.test(form.website)) errors.website = "Invalid website URL (e.g., https://example.com)";
  if (!form.company.trim())  errors.company = "Company name is required.";
  if (!form.message.trim()) errors.message = "Message is required.";
  

  setFormErrors(errors);
  return Object.keys(errors).length === 0;
};

  return (
    <div className="form-wrapper">
      <form className="contact-form" id="contact" onSubmit={onSubmit}>
        <h2>Contact Us</h2>
        <div className="input-group">
           {formErrors.name && <span className="error">{formErrors.name}</span>}
          <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange}/> 
          
          {formErrors.phone && <span className="error">{formErrors.phone}</span>} 
          <input type="text" name="phone" placeholder="Enter your phone number" value={form.phone} onChange={handleChange} />
          
          {formErrors.email && <span className="error">{formErrors.email}</span>}
          <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
         
          {formErrors.website && <span className="error">{formErrors.website}</span>}
          <input type="text" name="website" placeholder="Enter your website (optional)" value={form.website} onChange={handleChange}/>
         
          {formErrors.city && <span className="error">{formErrors.city}</span>}
          <input type="text" name="city" placeholder="Enter your city" value={form.city} onChange={handleChange}/>
          
          {formErrors.company && <span className="error">{formErrors.company}</span>}
          <input type="text" name="company" placeholder="Enter your company name"  value={form.company} onChange={handleChange} />
         
         </div>
        <textarea name="message" placeholder="Enter your message..." value={form.message} onChange={handleChange}></textarea>
         <button type="submit">Submit</button>
        <div className="result">{result}</div>
      </form>
    </div>
  );
};

export default ContactForm;
