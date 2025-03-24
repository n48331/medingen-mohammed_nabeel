import React from 'react';

const Footer = () => {
  const footerData = {
    logo: {
      src: "/footer-logo.svg",
      alt: "Finalmiglogo",
      title: "Medingen",
      description: "Saves you health and wealth",
    },
    sections: [
      {
        title: "Website",
        links: [
          { text: "Home", href: "#" },
          { text: "Features", href: "#" },
          { text: "How it works", href: "#" },
          { text: "What our customers say?", href: "#" },
        ],
      },
      {
        title: "Follow Us",
        links: [
          { text: "Instagram", href: "#" },
          { text: "Facebook", href: "#" },
          { text: "Twitter", href: "#" },
          { text: "Youtube", href: "#" },
        ],
      },
      {
        title: "More",
        links: [
          { text: "Help Center", href: "#" },
          { text: "Become Member", href: "#" },
          { text: "Events", href: "#" },
          { text: "Terms & Conditions", href: "#" },
        ],
      },
    ],
    copyright: "© 2025 Medigen. All Rights Reserved.",
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold text-black flex flex-col items-center gap-5 w-2/3 mx-auto text-center">
            <img src={footerData.logo.src} className="w-14" alt={footerData.logo.alt} />
            <h2 className="text-white">{footerData.logo.title}</h2>
            <p className="text-gray-400">{footerData.logo.description}</p>
          </div>
        </div>
        {footerData.sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            {section.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.href}
                className="block text-gray-400 hover:text-white mb-2"
              >
                {link.text}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="text-center text-gray-400 mt-8">
        {footerData.copyright}
      </div>
    </footer>
  );
};

export default Footer;