import { useEffect, useState } from "react";
import { InputField } from "../common/InputField";
import { Button } from "../common/Button";
import { sendContactMessage } from "../../services/emailService";
const initialForm = {
  fullName: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const isSending = status === "sending";

  useEffect(() => {
    if (status !== "success") return;

    const timer = setTimeout(() => {
      setStatus("idle");
    }, 3000);

    return () => clearTimeout(timer);
  }, [status]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus("idle");
    setError("");
    setSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    const templateParams = {
      customer_name: form.fullName.trim(),
      customer_email: form.email.trim(),
      message: form.message.trim(),
    };

    if (
      !templateParams.customer_name ||
      !templateParams.customer_email ||
      !templateParams.message
    ) {
      setStatus("error");
      setError("Please fill in all fields");
      return;
    }
    setStatus("sending");
    setError("");

    try {
      await sendContactMessage(templateParams);

      setStatus("success");
      setForm({ ...initialForm });
    } catch (err) {
      console.error("Contact email failed:", err);

      setStatus("error");
      setError("Could not send your message. Please try again");
    }
  };
  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm sm:p-6">
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <p className="text-sm text-slate-600">
          Contact form preview. Message delivery will be available when the
          contact service is connected.
        </p>
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
        <Button
          type="submit"
          className="w-full"
          variant="primary"
          disabled={isSending}
        >
          {isSending ? "Reviewing..." : "Review Message"}
        </Button>

        {status === "success" && (
          <p
            role="alert"
            className="pt-1 text-center text-sm font-medium text-green-700"
          >
            Your message has been sent. we will contact you soon.
          </p>
        )}
        {status === "error" && (
          <p
            role="alert"
            className="pt-1 text-center text-sm font-medium text-red-700"
          >
            {error}
          </p>
        )}
      </form>
    </div>
  );
};
