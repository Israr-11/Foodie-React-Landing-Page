import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUtensils, FaBars, FaTimes, FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleBookNow = () => {
    alert("Call us at the number below to make a reservation");
  };
  
  const navLinks = [
    { title: "Home", href: "/#", active: true },
    { title: "Packages", href: "/#", active: false },
    { title: "About Us", href: "/#", active: false },
    { title: "Contact Us", href: "/#", active: false }
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <nav className="navbar">
          <motion.a 
            className="navbar-brand" 
            href="/#"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaUtensils className="brand-icon" />
            <span className="brand-text">FOODIE</span>
          </motion.a>
          
          <motion.div 
            className="nav-links-desktop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ul className="nav-menu">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                >
                  <a 
                    href={link.href} 
                    className={link.active ? 'active' : ''}
                  >
                    {link.title}
                    {link.active && <span className="active-indicator"></span>}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.button 
              className="btn-book-now"
              onClick={handleBookNow}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <FaCalendarCheck className="btn-icon" />
              <span>Book Now</span>
            </motion.button>
          </motion.div>
          
          <motion.button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </nav>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-menu">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <a 
                    href={link.href} 
                    className={link.active ? 'active' : ''}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              className="mobile-cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <button 
                className="btn-book-mobile"
                onClick={handleBookNow}
              >
                <FaCalendarCheck className="btn-icon" />
                <span>Book Now</span>
              </button>
              
              <a href="tel:+11121211111" className="phone-link">
                <FaPhoneAlt className="phone-icon" />
                <span>+1-112-121-1111</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 15px 0;
          transition: all 0.3s ease;
          background: transparent;
        }
        
        .site-header.scrolled {
          background: white;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          padding: 10px 0;
        }
        
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0;
        }
        
        /* Brand/Logo */
        .navbar-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          margin-left: 100px;
          padding: 10px;
          transition: all 0.3s ease;
        }
        
        .brand-icon {
          color: #FF9F0D;
          font-size: 1.8rem;
          margin-right: 10px;
        }
        
        .brand-text {
          font-size: 1.8rem;
          font-weight: 800;
          color: #333;
          font-style: italic;
          letter-spacing: 1px;
        }
        
        .navbar-brand:hover .brand-icon {
          transform: rotate(20deg);
        }
        
        /* Desktop Navigation */
        .nav-links-desktop {
          display: flex;
          align-items: center;
          margin-right: 100px;
        }
        
        .nav-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-menu li {
          margin: 0 5px;
          position: relative;
        }
        
        .nav-menu li a {
          display: block;
          padding: 10px 15px;
          color: #333;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-menu li a:hover {
          color: #FF9F0D;
        }
        
        .nav-menu li a.active {
          color: #FF9F0D;
        }
        
        .active-indicator {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          background: #FF9F0D;
          border-radius: 50%;
        }
        
        /* Book Now Button */
        .btn-book-now {
          background: #FF9F0D;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: 20px;
          box-shadow: 0 5px 15px rgba(255, 159, 13, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .btn-book-now:hover {
          background: #e08c0b;
          box-shadow: 0 8px 20px rgba(255, 159, 13, 0.4);
        }
        
        .btn-icon {
          font-size: 0.9rem;
        }
        
        /* Mobile Menu Toggle */
        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          color: #333;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .mobile-menu-toggle:hover {
          color: #FF9F0D;
        }
        
        /* Mobile Menu */
        .mobile-menu {
          display: none;
          background: white;
          padding: 20px;
          overflow: hidden;
        }
        
        .mobile-nav-menu {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
        }
        
        .mobile-nav-menu li {
          margin-bottom: 10px;
        }
        
        .mobile-nav-menu li a {
          display: block;
          padding: 10px 0;
          color: #333;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border-bottom: 1px solid #eee;
        }
        
        .mobile-nav-menu li a:hover,
        .mobile-nav-menu li a.active {
          color: #FF9F0D;
        }
        
        /* Mobile CTA */
        .mobile-cta {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .btn-book-mobile {
          background: #FF9F0D;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 5px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          box-shadow: 0 5px 15px rgba(255, 159, 13, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .phone-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border: 1px solid #eee;
          border-radius: 5px;
          color: #333;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .phone-link:hover {
          background: #f5f5f5;
          color: #FF9F0D;
        }
        
        /* Responsive Adjustments */
        @media (max-width: 1200px) {
          .navbar-brand {
            margin-left: 50px;
          }
          
          .nav-links-desktop {
            margin-right: 50px;
          }
        }
        
        @media (max-width: 992px) {
          .navbar-brand {
            margin-left: 20px;
          }
          
          .nav-links-desktop {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: block;
            margin-right: 20px;
          }
          
          .mobile-menu {
            display: block;
          }
        }
        
        @media (max-width: 576px) {
          .navbar-brand {
            margin-left: 10px;
          }
          
          .brand-text {
            font-size: 1.5rem;
          }
          
          .brand-icon {
            font-size: 1.5rem;
          }
          
          .mobile-menu-toggle {
            margin-right: 10px;
          }
        }
      `}</style>
    </header>
  );
}
