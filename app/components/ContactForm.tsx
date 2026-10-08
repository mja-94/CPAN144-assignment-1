'use client';

import React, { useState } from 'react';

// Props this component receives from its parent page
type ContactFormProps = {
  title: string;
};

export default function ContactForm({ title }: ContactFormProps) {
  // State: each input, an error message, and whether the form was sent
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Event handler: form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // stop the page from reloading

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setError('Please fill in all fields.');
    } else if (!email.includes('@')) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      setSubmitted(true);
    }
  };

  // Event handler: go back to an empty form
  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };

  // Conditional rendering: show a thank-you card after a successful submit
  if (submitted) {
    return (
      <div className="card">
        <h2>Thank you, {name}!</h2>
        <p className="success">Your message was sent. We will reply to {email}.</p>
        <button onClick={handleReset}>Send another message</button>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>{title}</h2>

      {/* noValidate lets our own validation run instead of the browser's */}
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Conditional rendering: show the error only if there is one */}
        {error && <p className="error">{error}</p>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
}