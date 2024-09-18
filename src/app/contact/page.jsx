"use client";
import Navbar from "../../components/Navbar/Navbar";
import "./contact.css";
import Image from "next/image";
import Cities from "../../components/Cities/Cities";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Can't be empty";
    }

    if (!values.email) {
      errors.email = "Can't be empty";
    }

    if (!values.phone) {
      errors.phone = "Can't be empty";
    }

    if (!values.message) {
      errors.message = "Can't be empty";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(formValues));

    if (Object.values(formValues).filter((value) => !value).length === 0) {
      setIsSubmit(true);
      document.documentElement.style.overflowY = "hidden";
    }
  };

  const handleClose = () => {
    setIsSubmit(false);
    document.documentElement.style.overflowY = "scroll";
    setFormValues({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <Navbar />
      <div className="contactContainer">
        <div className="contactContent">
          <h1 className="contactTitle">Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <form className="contactForm" id="contact-form" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Name"
              maxLength="50"
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
            />
            {error.fullName && (
              <div className="errorContainer">
                <p className="inputError">{error.fullName}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#FFF" />
                    <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
                  </g>
                </svg>
              </div>
            )}
          </div>
          <div className="inputContainer">
            <input
              type="email"
              placeholder="Email Address"
              maxLength="50"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {error.email && (
              <div className="errorContainer">
                <p className="inputError">{error.email}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#FFF" />
                    <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
                  </g>
                </svg>
              </div>
            )}
          </div>
          <div className="inputContainer">
            <input
              type="tel"
              placeholder="Phone"
              maxLength="15"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            {error.phone && (
              <div className="errorContainer">
                <p className="inputError">{error.phone}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#FFF" />
                    <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
                  </g>
                </svg>
              </div>
            )}
          </div>
          <div className="inputContainer">
            <textarea
              placeholder="Your Message"
              maxLength="50"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
            {error.message && (
              <div className="errorContainer">
                <p className="inputError">{error.message}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#FFF" />
                    <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
                  </g>
                </svg>
              </div>
            )}
          </div>
          <div className="contactButtonContainer">
            <button type="submit" className="contactButton" form="contact-form">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      {isSubmit && (
        <>
          <div className="confirmationMessage">
            <svg
              className="confirmationClose"
              onClick={handleClose}
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z"
                fill="#1D1C1E"
                fillRule="evenodd"
              />
            </svg>
            <p>THANK YOU FOR CONTACTING US!</p>
          </div>
          <div className="contactOverlay" onClick={handleClose}></div>
        </>
      )}
      <Image
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        width={1000}
        height={590}
        alt="Backrgound image"
        className="backgroundImageContact"
      />
      <div className="citiesContainer">
        <Cities />
      </div>
      <Footer />
    </div>
  );
}