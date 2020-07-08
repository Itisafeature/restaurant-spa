import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <>
      <div id="contact" className="contact-background-container">
        <h1 className="contact-header">Contact</h1>
        <div className="contact-div">
          <div className="contact-form-card">
            <h2>Send us an Email!</h2>
            <form
              action="mailto:example@yourdomain.com"
              method="POST"
              enctype="multipart/form-data"
            >
              <label for="subject">Subject</label>
              <input id="subject" name="subject" type="text" />
              <br />
              <br />
              <label for="content">Content</label>
              <textarea type="textarea" id="content" name="content" rows="8" />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="hours-card">
            <h2>Hours of Operation</h2>
            <img className="hours" src="/hours.jpg" alt="hours of operation" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
