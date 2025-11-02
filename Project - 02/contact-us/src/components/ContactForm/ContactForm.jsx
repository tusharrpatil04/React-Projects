import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import contactImg from "../../images/contact.svg";
import { useState } from "react";

export const ContactForm = () => {
  // Single state for all input fields
  const [formData, setFormData] = useState({
    name: "Tushar Patil",
    email: "tushar@123",
    text: "Good Product and Service!",
  });

  // Handle all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value, // dynamically update the correct field
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>

        <form onSubmit={onSubmit}>
          <Button text="VIA EMAIL FORM" icon={<HiMail />} isOutline={true} />

          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              rows="8"
              value={formData.text}
              onChange={handleChange}
            />
          </div>

          <div className={styles.btn}>
            <Button text="SUBMIT BUTTON" icon={<HiMail fontSize="24px" />} />
          </div>

          <div>
            {formData.name + " | " + formData.email + " | " + formData.text}
          </div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src={contactImg} alt="contact" />
      </div>
    </section>
  );
};
