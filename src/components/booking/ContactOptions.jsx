import { Mail, MessageCircle, Phone } from "lucide-react";
import React from "react";

export const ContactOptions = () => {
  return (
    <div className="mt-6 pt-6 border-t border-[#D7CDC2]">
      <p>Need help? Contact us</p>

      <div className="flex items-center justify-center gap-3">
        <a
          href="tel:+9700000000"
          className="p-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#28364c] hover:text-white transition-colors"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href="mailto:info@example.com"
          className="p-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#28364c] hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>

        <a
          href="#"
          className="p-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#28364c] hover:text-white transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
