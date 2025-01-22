// eslint-disable-next-line no-unused-vars
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  // Formik form handling and validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      // Send email via EmailJS
      emailjs
        .send(
          "service_dbvypwo", // Replace with your EmailJS Service ID
          "template_nusze36", // Replace with your EmailJS Template ID
          {
            name: values.name,
            email: values.email,
            message: values.message,
          },
          "qqckMV4M8UF-Q37xi" // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message Sent Successfully!");
            resetForm();
          },
          (error) => {
            console.error("FAILED...", error);
            alert("Failed to send the message. Please try again.");
          }
        );
    },
  });

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}

          {/* Message Textarea */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}

          {/* Submit Button */}
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
