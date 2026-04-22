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

    <section className="max-w-5xl mx-auto px-4">
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
 
  );
function Keyboard() {
  
  return (
    <div className="frontpage">
      <Title />
      <Instruction />
      <div className="three-d-container">        
        <Spline 
          scene="/scene (4).splinecode"
          onLoad={(spline) => {
            const obj = spline.findObjectByName('Key Send');
            console.log(obj)
            spline.addEventListener('mouseDown',  async (e) => {
              if (e.target.name === 'Key Send') {
                console.log("Navigating to Projects");
              }
              if (e.target.name === 'Key L')
                 {  
                await new Promise(resolve => setTimeout(resolve, 800));
                window.open("https://github.com/Haitham-Qabban", "_blank");
              }
              if (e.target.name === 'Key Smile')
                 {  
                await new Promise(resolve => setTimeout(resolve, 2000));
                window.open("https://wd103.myworkday.com/swisscom/d/inst/1$37/247$14923.htmld#TABTASKID=2998%2431336", "_blank");
              }
              if (e.target.name === 'Key YOU 2')
                 {  

                console.log("Navigating to me");
              }
              if (e.target.name === 'Key YOU')
                 {  

                console.log("Navigating to works");
              }
              if (e.target.name === 'Key YOU 3')
                 {  

                console.log("Navigating to skills");
              }
              if (e.target.name === 'Key Esc')
                 {  

                console.log("Navigating to resume");
              }
            });
          }}
        />
      </div>
    </div>
  );
}
// ...existing code...
}