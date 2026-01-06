'use client'
import { useRouter } from "next/navigation";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";


export default function Footer() {
  const router = useRouter();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "contact" }
  ];

  const services = [
    { name: "Web Design", href: "#design" },
    { name: "Development", href: "#development" },
    { name: "UI/UX Design", href: "#uiux" },
    { name: "Consulting", href: "#consulting" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedinIn /> ,href:'https://www.linkedin.com/in/hamza-erraji-12429829a/' },
    { name: "Twitter", icon: <FaTwitter />,href:'#' },
    { name: "GitHub", icon: <FaGithub />,href:'https://github.com/Hamza3bkarino' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <IoCodeSlash className="text-white"/>
              </div>
              <span className="text-xl font-semibold text-white">
                Port<span className="font-normal">folio</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-6">
              Creating exceptional digital experiences that transform visitors into loyal customers.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition text-white text-lg"
                  aria-label={social.name}
                  onClick={()=>router.push(social.href)}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-sm hover:text-white transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-sm hover:text-white transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-blue-500 mt-1" />
                <a href="mailto:contact@portfolio.com" className="text-sm hover:text-white transition">
                  errajihamza80@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-blue-500 mt-1" />
                <a href="tel:+33123456789" className="text-sm hover:text-white transition">
                  +212 706 430 075
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <span className="text-sm">Casablanca ,Morocco</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
