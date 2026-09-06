import React, { useState } from "react";
import { InputField } from "../common/InputField";
import { Button } from "../common/Button";
const initialForm = {
  fullName: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact Form:", form);
    setSubmitted(true);
    setForm(initialForm);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm sm:p-6">
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <InputField
          label="Full Name"
          name="fullName"
          value={form.fullName}
          onChange={handleOnChange}
          required
        />
        <InputField
          label="EmailAddress"
          name="email"
          type="email"
          value={form.email}
          onChange={handleOnChange}
          name="email"
          required
        />
        <InputField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleOnChange}
          textarea
          required
        />
        <Button type="submit" className="w-full" variant="primary">
          Send Message
        </Button>

        {submitted && (
          <p className="pt-1 text-center text-sm font-medium text-[#28364c]">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};
