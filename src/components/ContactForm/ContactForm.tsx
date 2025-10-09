import * as React from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss";

// EmailJS configuration
const EMAILJS_CONFIG = {
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "7Pcl5G0klYfPa7mTE",
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_ut4bfp3",
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_46xu2k2",
};

// Initialize emailjs with your public key
emailjs.init(EMAILJS_CONFIG.publicKey);

export default function ContactForm() {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Show loading state
    const submitButton = e.currentTarget.querySelector(
      ".submit-btn"
    ) as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Lähetetään...";
      submitButton.setAttribute("aria-busy", "true");
    }

    emailjs
      .sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        e.currentTarget,
        EMAILJS_CONFIG.publicKey
      )
      .then(
        (result) => {
          alert("Kiitos, viestisi on lähetetty!");
          console.log(result.text);
          // Reset form
          e.currentTarget.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          console.error("Error details:", {
            status: error.status,
            text: error.text,
            response: error.response,
          });
          alert(
            "Lähetys epäonnistui, olethan sähköpostitse yhteydessä, kiitos!"
          );
        }
      )
      .finally(() => {
        // Reset button state
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Lähetä";
          submitButton.removeAttribute("aria-busy");
        }
      });
  }

  return (
    <form
      className="contact-form"
      onSubmit={sendEmail}
      aria-labelledby="contact-form-title"
      noValidate
    >
      <h2 id="contact-form-title" className="visually-hidden">
        Yhteyslomake
      </h2>

      <div className="form-group">
        <label htmlFor="name">Nimi</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-required="true"
          aria-describedby="name-error"
        />
        <div
          id="name-error"
          className="error-message"
          role="alert"
          aria-live="polite"
        ></div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Sähköpostiosoite</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-required="true"
          aria-describedby="email-error"
        />
        <div
          id="email-error"
          className="error-message"
          role="alert"
          aria-live="polite"
        ></div>
      </div>

      <div className="form-group">
        <label htmlFor="subject">Viestin aihe</label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          aria-required="true"
          aria-describedby="subject-error"
        />
        <div
          id="subject-error"
          className="error-message"
          role="alert"
          aria-live="polite"
        ></div>
      </div>

      <div className="form-group">
        <label htmlFor="message">Viestisi</label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          aria-describedby="message-error"
          rows={5}
        />
        <div
          id="message-error"
          className="error-message"
          role="alert"
          aria-live="polite"
        ></div>
      </div>

      <div className="btn-area">
        <button className="submit-btn" type="submit" aria-label="Lähetä viesti">
          Lähetä
        </button>
      </div>
    </form>
  );
}
