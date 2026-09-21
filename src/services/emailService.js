import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const contactTemplatedId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;

// Booking email
export const sendBookingConfirmation = (templateParams) => {
  if (!serviceId) throw new Error("EmailJS service id is missing.");

  if (!templateId) throw new Error("EmailJS template id is missing.");

  if (!publicKey) throw new Error("EmailJS public key is missing.");

  return emailjs.send(serviceId, templateId, templateParams, { publicKey });
};

// Customer Message
export const sendContactMessage = (templateParams) => {
  if(!serviceId) {
    throw new Error("Email service ID is missing.")
  }

  if(!contactTemplatedId) {
    throw new Error("EmailJS contact template ID is missing.")
  }

  if(!publicKey) {
    throw new Error("EmailJS public key is missing.")
  }

  return emailjs.send(serviceId, contactTemplatedId, templateParams,{
    publicKey
  })
}