import React from "react";
import { useState } from 'react';
import "./Contacts.scss";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    
    const formData = new FormData(event.target);
    formData.append("access_key", "ade1662f-538e-4631-9d5b-6ea5aabd0741");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setResult("");
      event.target.reset();
    }, 3000);
  };

  return (
    <>
      <section className="contacts">
        <div className="container">
          <div className={`contact ${isSubmitted ? 'submitted' : ''}`}>
            <div className="envelope">
              <div className="top">
                <div className="outer">
                  <div className="inner"></div>
                </div>
              </div>
              <div className="bottom"></div>
              <div className="left"></div>
              <div className="right"></div>
              <div className="cover"></div>
              <div className="paper">
                <form onSubmit={onSubmit}>
                  <input type="text" name="name" placeholder="Name" required/>
                  <input type="email" name="email" placeholder="Email" required/>
                  <textarea name="message" placeholder="Message" required></textarea>
                  <button type="submit">Submit</button>
                  <p>{result}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}