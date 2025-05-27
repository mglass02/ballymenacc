// src/components/ContactMain.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMain = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    // Use environment variables for EmailJS keys
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Access Service ID from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Access Template ID from .env
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Access Public Key from .env
      )
      .then(
        () => {
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => {
            setSubmitted(false);
          }, 3000);
        },
        (err) => {
          setError("Failed to send message. Please try again.");
          console.error("EmailJS error:", err);
        }
      );
  };

  return (
    <section className="contact-main">
      <div className="container contact-main-content">
        <div className="contact-main-form">
          <h2 className="contact-main-title">Get in Touch</h2>
          {error && <p className="form-error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            {submitted && <p className="form-status">Successfully sent</p>}
            <button type="submit" className="form-submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;