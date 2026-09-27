import { useRef, useState } from "react";
import { sendContactMessage } from "../services/emailService";

const createForm = () => ({ fullName: "", email: "", message: "" });

export function useContactForm() {
  const [form, setForm] = useState(createForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const inFlight = useRef(false);

  function handleChange(event) {
    if (inFlight.current) return;
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setStatus("idle");
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (inFlight.current || !event.currentTarget.reportValidity()) return;

    const payload = {
      customer_name: form.fullName.trim(),
      customer_email: form.email.trim(),
      message: form.message.trim(),
    };
    if (Object.values(payload).some((value) => !value)) {
      setStatus("error");
      setError("Please fill in all fields.");
      return;
    }

    inFlight.current = true;
    setStatus("sending");
    setError("");
    try {
      await sendContactMessage(payload);
      setForm(createForm());
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Could not send your message. Please try again.");
    } finally {
      inFlight.current = false;
    }
  }

  return { form, status, error, isSending: status === "sending", handleChange, handleSubmit };
}
