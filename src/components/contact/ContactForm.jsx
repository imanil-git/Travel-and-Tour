import { InputField } from "../common/InputField";
import { Button } from "../common/Button";
import { useContactForm } from "../../hooks/useContactForm";

export const ContactForm = () => {
  const { form, status, error, isSending, handleChange, handleSubmit } = useContactForm();

  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm sm:p-6">
      <form onSubmit={handleSubmit} aria-busy={isSending} className="space-y-3.5">
        <p className="text-sm text-slate-600">Send us your questions or trip requirements.</p>
        <fieldset disabled={isSending} className="space-y-3.5">
          <legend className="sr-only">Contact details and message</legend>
          <InputField label="Full Name" name="fullName" autoComplete="name"
            value={form.fullName} onChange={handleChange} required />
          <InputField label="Email Address" name="email" type="email" autoComplete="email"
            value={form.email} onChange={handleChange} required />
          <InputField label="Message" name="message" textarea
            value={form.message} onChange={handleChange} required />
          <Button type="submit" className="w-full" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </Button>
        </fieldset>
        {status === "success" && (
          <p role="status" className="pt-1 text-center text-sm font-medium text-green-700">
            Your message has been sent. We will contact you soon.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="pt-1 text-center text-sm font-medium text-red-700">{error}</p>
        )}
      </form>
    </div>
  );
};
