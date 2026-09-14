import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendBookingConformation = (templateParams) => {
  if (!serviceId) throw new Error("EmailJS service id is missing.");

  if (!templateId) throw new Error("EmailJS template id is missing.");

  if (!publicKey) throw new Error("EmailJS public key is missing.");

  return emailjs.send(serviceId, templateId, templateParams, { publicKey });
};
