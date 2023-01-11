import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./Contact.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import axios from "axios";
import { BACKEND_URL } from "../../services/authService";
import { toast } from "react-toastify";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sentEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Contact us</h3>
      <div className="section">
        <form onSubmit={sentEmail}>
          <Card cardClass="card">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              required
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              rows="10"
              cols="30"
              type="text"
              placeholder="Subject"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="--btn --btn-primary">Send</button>
          </Card>
        </form>

        <div className="details">
          <Card cardClass={"card2"}>
            <h3>Our Contact Information</h3>
            <p>Fill the form or contact us via other channels listed below</p>
            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p>09953227432</p>
              </span>
              <span>
                <FaEnvelope />
                <p>support@merninventory.com</p>
              </span>
              <span>
                <GoLocation />
                <p>Puerto princesa, Palawan</p>
              </span>
              <span>
                <FaTwitter />
                <p>Kheel</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
