import React from 'react';

import './Contact.css';

export default function Contact() {
  return (
    <section className="ContactContainer">
      <div className="ContactForm">
        <h4>Send A Message</h4>
        <label className="inp">
          <input type="text" placeholder="" />
          <span className="border"></span>
        </label>
        <label className="inp">
          <input type="text" placeholder="" />
          <span className="label">Label</span>
          <span className="border"></span>
        </label>
        <label className="inp">
          <textarea></textarea>
          <span className="label">Label</span>
          <span className="border"></span>
        </label>
      </div>
      <div className="ContactList">
        <div className="Contact">
          <p className="ContactHeader">Phone</p>
          <p className="ContactBody">+3808495945964</p>
        </div>
        <div className="Contact">
          <p className="ContactHeader">Email</p>
          <p className="ContactBody">contact@rotimibest.com</p>
        </div>
        <div className="Contact">
          <p className="ContactHeader">Twitter</p>
          <p className="ContactBody">@rotimi_best</p>
        </div>
      </div>
    </section>
  )
}
