import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaPhone,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "tel:9935115786",
    bg: "bg-green-500",
    icon: <FaPhone className="rotate-90" size={22} />,
    label: "Call Xpress Tour & Travels",
  },
  {
    href: "https://api.whatsapp.com/send?phone=9935115786",
    bg: "bg-green-500",
    icon: <FaWhatsapp size={25} />,
    label: "Chat on WhatsApp",
  },
  {
    href: "https://www.youtube.com/@xpresstourandtravels",
    bg: "bg-red-500",
    icon: <FaYoutube size={25} />,
    label: "Visit YouTube Channel",
  },
  {
    href: "https://www.facebook.com/people/xpress-tour-and-travels/61569937321411/",
    bg: "bg-blue-500",
    icon: <FaFacebookF size={25} />,
    label: "Follow on Facebook",
  },
  {
    href: "https://www.instagram.com/xpresstourandtravels/",
    bg: "bg-gradient-to-t from-pink-600 to-red-500",
    icon: <FaInstagram size={25} />,
    label: "Follow on Instagram",
  },
];

const SocialSidebar = () => {
  return (
    <nav
      aria-label="Social Media Links"
      className="fixed md:bottom-[25%] bottom-0 right-0 z-50 mb-4 flex flex-col items-center space-y-5 rounded-l-lg p-2 shadow-lg"
    >
      {socialLinks.map(({ href, bg, icon, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${bg} p-2 text-white rounded-full transition-transform hover:scale-110`}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default SocialSidebar;
