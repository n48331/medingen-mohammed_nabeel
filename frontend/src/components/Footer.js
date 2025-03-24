import React from 'react';
import styles from '../styles/Footer.module.css';

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
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-logo-section"]}>
          <img
            src={footerData.logo.src}
            className={styles["footer-logo"]}
            alt={footerData.logo.alt}
          />
          <h2 className={styles["footer-logo-title"]}>{footerData.logo.title}</h2>
          <p className={styles["footer-logo-description"]}>
            {footerData.logo.description}
          </p>
        </div>
        {footerData.sections.map((section, index) => (
          <div key={index}>
            <h3 className={styles["footer-section-title"]}>{section.title}</h3>
            {section.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.href}
                className={styles["footer-link"]}
              >
                {link.text}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className={styles["footer-copyright"]}>
        {footerData.copyright}
      </div>
    </footer>
  );
};

export default Footer;