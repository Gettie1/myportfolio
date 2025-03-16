import Footer from "../components/Footer.jsx";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message Sent Successfully!");
  };

  return (
    <>
      <div className="contact">
        <p>Your can reach me through the following.</p>
        <ul>
          <li>
            Email:
            <a href="mailto:cheptoog677@gmail.com ">chetpoog677@gmail.com</a>
          </li>
          <li>
            Phone:
            <a href="0728177993">0728177993</a>
          </li>
        </ul>
      </div>
      <div className="contact-container">
        <h2>Feel free to leave a message!</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
      <div>{<Footer />}</div>
    </>
  );
}

export default Contact;
