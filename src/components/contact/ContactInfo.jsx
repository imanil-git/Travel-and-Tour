import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { ContactIcons } from "./ContactIcons";
import { ContactInfoItem } from "./ContactInfoItem";

const contactDetails = [
  {
    id: 1,
    icon: FaLocationDot,
    title: "Our Office",
    content: (
      <>
        Tour and Travel, Nepal,
        <br />
        Pokhara
      </>
    ),
  },
  {
    id: 2,
    icon: FaPhone,
    title: "Call Us",
    content: "Phone details coming soon",
  },
  {
    id: 3,
    icon: FaEnvelope,
    title: "Email Us",
    content: "Email details coming soon",
  },
];

export const ContactInfo = () => {
  return (
    <div className="flex flex-col">
      <ContactIcons />

      <div className="mt-7 space-y-6">
        {contactDetails.map(({ id, icon, title, content }) => (
          <ContactInfoItem key={id} icon={icon} title={title}>
            {content}
          </ContactInfoItem>
        ))}
      </div>
    </div>
  );
};
