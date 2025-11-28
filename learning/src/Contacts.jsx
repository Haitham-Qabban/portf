import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "8e6ddc24-9156-42a2-b8f1-0f6c4c169eee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <section className="contacts">
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
        </div>
        <div className="input-box">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="input-box">
          <label>Message</label>
          <textarea name="message" id="message" placeholder='Enter your message' required></textarea>
        </div>
        <button type="submit">Send Message</button>
        <p>{result}</p>

      </form>
    </section>
    
  );
}