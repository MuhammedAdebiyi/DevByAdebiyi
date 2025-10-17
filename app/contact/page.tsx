"use client";

import React from "react";
import ContactForm from "../../components/contact/ContactForm"; // adjust path if needed

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ContactForm />
    </div>
  );
};

export default ContactPage;
