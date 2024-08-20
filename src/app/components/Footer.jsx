import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-[#0a000a] border-t-[#2b2f44] text-white -mt-8">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-6 md:flex-row md:items-start md:p-12 md:space-y-0">
        {/* Logo Section */}
        <div className="text-center md:text-left">
          <span className="text-3xl font-bold">LOGO</span>
          <p className="mt-2 text-slate-600">© 2024 All rights reserved.</p>
        </div>

        {/* About Us Section */}
        <div className="text-center md:text-left">
          <h3 className="mb-3 text-lg font-semibold">About Us</h3>
          <p className="max-w-xs text-slate-400">
            I am a UI UX designer and a frontend web developer
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="text-center md:text-left">
          <h3 className="mb-3 text-lg font-semibold">Contact Us</h3>
          <p className="text-slate-400">
            <a href="mailto:info@company.com" className="hover:underline">
              kanchanahewamadduma@gmail.com
            </a>
          </p>
          <p className="text-slate-400">
            <a href="tel:+1234567890" className="hover:underline">
              +94704253594
            </a>
          </p>
          <p className="text-slate-400">
            Colombo, Sri Lanka
          </p>
        </div>

        {/* Social Media Links Section */}
        <div className="text-center md:text-left">
          <h3 className="mb-3 text-lg font-semibold">Follow Us</h3>
          <ul className="flex justify-center space-x-6 md:justify-start">
            <li>
              <a href="#" className="text-slate-400 hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
