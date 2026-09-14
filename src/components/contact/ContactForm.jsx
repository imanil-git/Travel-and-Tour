import { useState } from "react";
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

    setSubmitted(true);
  };
  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm sm:p-6">
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <p className="text-sm text-slate-600">Contact form preview. Message delivery will be available when the contact service is connected.</p>
        <InputField
          label="Full Name"
          name="fullName"
          value={form.fullName}
          onChange={handleOnChange}
          required
        />
        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleOnChange}
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
          Review Message
        </Button>

        {submitted && (
          <p role="status" className="pt-1 text-center text-sm font-medium text-[#28364c]">
            Your message has not been sent. This preview has no contact service connected.
          </p>
        )}
      </form>
    </div>
  );
};
