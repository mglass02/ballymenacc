// src/Header.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaBaseballBall } from "react-icons/fa";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Players", path: "/players" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.68, -0.55, 0.265, 1.55],
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="container header-content">
        {/* Left: Menu icon */}
        <div className="menu-container">
          <button
            className="menu-icon"
            onMouseEnter={() => setIsOpen(true)}
            onClick={handleToggle}
            aria-label="Toggle navigation menu"
          >
            <FaBars />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className="dropdown"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                onMouseLeave={() => setIsOpen(false)}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="dropdown-item"
                  >
                    <Link to={item.path} className="dropdown-link">
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
                <li className="dropdown-icon">
                  <FaBaseballBall />
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Center: Club Name */}
        <motion.h1
          className="club-name"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="club-name-text">Ballymena Cricket Club</span>
          <span className="club-icon">🏏</span>
        </motion.h1>

        {/* Right: Social icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com/ballymenacc/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/ballymenacricketclub/" className="social-icon"  target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Partners Ticker Section (Static) */}
      <div className="partners-ticker">
          <span className="ticker-item">
            <strong><a href='#'></a></strong>
          </span>
      </div>
    </header>
  );
};

export default Header;