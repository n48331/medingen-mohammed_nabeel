import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import styles from "../styles/Header.module.css";
import { useProduct } from "../context/ProductContext";

const Header = () => {
  const {product} = useProduct();
  const navItems = [
    { href: "/", icon: "/home.svg", text: "Home", alt: "Home" },
    { href: "/offers", icon: "/offers.svg", text: "Offers", alt: "Offers" },
    { href: "/notification", icon: "/noti-inactive.svg", text: "Notification", alt: "Notification" },
    { href: "/profile", icon: "/profile.svg", text: "Profile", alt: "Profile" },
  ];

  const [activeNav, setActiveNav] = React.useState("/");

  return (
    <header className={styles.header}>
      <motion.div
        className={styles["header-top"]}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles["header-logo"]}>
          <img
            src="/logo.png"
            className={styles["header-logo-image"]}
            alt="Finalmiglogo"
          />
          <h2>Medingen</h2>
        </div>
        <div className={styles["header-nav"]}>
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              className={`${styles["header-nav-item"]} ${
                activeNav === item.href ? styles["header-nav-item--active"] : ""
              }`}
              href={item.href}
              onClick={() => setActiveNav(item.href)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                className={styles["header-nav-icon"]}
                alt={item.alt}
                src={item.icon}
              />
              <div className={styles["header-nav-text"]}>{item.text}</div>
            </motion.a>
          ))}
        </div>
        <div>
          <img
            className={styles["header-cart"]}
            src="/cart.svg"
            alt="Cart"
          />
        </div>
      </motion.div>

      <motion.div
        className={styles["header-bottom"]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IoIosArrowBack className={styles["header-back-icon"]} />
        <p className={styles["header-back-text"]}>{
          product ? product.name : "Product"
        }</p>
      </motion.div>

      <div className={styles["header-mobile-nav"]}>
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            className={`${styles["header-mobile-nav-item"]} ${
              activeNav === item.href
                ? styles["header-mobile-nav-item--active"]
                : styles["header-mobile-nav-item--inactive"]
            }`}
            href={item.href}
            onClick={() => setActiveNav(item.href)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className={styles["header-mobile-nav-icon"]}
              alt={item.alt}
              src={item.icon}
            />
            <div className={styles["header-mobile-nav-text"]}>{item.text}</div>
          </motion.a>
        ))}
      </div>
    </header>
  );
};

export default Header;