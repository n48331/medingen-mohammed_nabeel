import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

const Header = () => {
  const navItems = [
    { href: "/", icon: "/home.svg", text: "Home", alt: "Home" },
    { href: "/offers", icon: "/offers.svg", text: "Offers", alt: "Offers" },
    { href: "/notification", icon: "/noti-inactive.svg", text: "Notification", alt: "Notification" },
    { href: "/profile", icon: "/profile.svg", text: "Profile", alt: "Profile" },
  ];

  const [activeNav, setActiveNav] = React.useState("/");

  return (
    <header className="py-4 container mx-auto flex flex-col gap-8">
      {/* Top Section */}
      <motion.div
        className="px-4 flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-2xl font-bold text-black flex items-center gap-5">
          <img src="/logo.png" className="w-14" alt="Finalmiglogo" />
          <h2>Medingen</h2>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              className={`flex items-center gap-1 py-[1px] px-[10px] rounded-full ${
                activeNav === item.href ? "bg-gray-200" : ""
              }`}
              href={item.href}
              onClick={() => setActiveNav(item.href)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img className="w-8 h-8" alt={item.alt} src={item.icon} />
              <div className="text-[10px] font-light mt-1 text-center">{item.text}</div>
            </motion.a>
          ))}
        </div>
        <div>
          <img className="w-8 h-8" src="/cart.svg" alt="Cart" />
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="flex items-center gap-2 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IoIosArrowBack />
        <p className="text-sm font-bold">Paracetamol/acetaminophen</p>
      </motion.div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden justify-around items-center bg-gray-100 py-2 fixed bottom-0 left-0 right-0">
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            className={`flex flex-col items-center ${
              activeNav === item.href ? "text-blue-500" : "text-gray-500"
            }`}
            href={item.href}
            onClick={() => setActiveNav(item.href)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img className="w-6 h-6" alt={item.alt} src={item.icon} />
            <div className="text-[10px] font-light">{item.text}</div>
          </motion.a>
        ))}
      </div>
    </header>
  );
};

export default Header;
