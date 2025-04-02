import React from "react";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  FaGoogle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHeart
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };
  
  const socialLinks = [
    { icon: <FaFacebookF />, url: "/#", label: "Facebook" },
    { icon: <FaTwitter />, url: "/#", label: "Twitter" },
    { icon: <FaGoogle />, url: "/#", label: "Google" },
    { icon: <FaInstagram />, url: "/#", label: "Instagram" },
    { icon: <FaLinkedinIn />, url: "/#", label: "LinkedIn" },
    { icon: <FaGithub />, url: "/#", label: "GitHub" }
  ];
  
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "123 Foodie Street, Texas, USA" },
    { icon: <FaPhoneAlt />, text: "+1-112-121-1111", isLink: true, href: "tel:+11121211111" },
    { icon: <FaEnvelope />, text: "info@foodie.com", isLink: true, href: "mailto:info@foodie.com" }
  ];

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <motion.div 
            className="row"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand Column */}
            <motion.div 
              className="col-lg-4 col-md-6 mb-5 mb-lg-0"
              variants={itemVariants}
            >
              <div className="footer-brand">
                <h2 className="footer-logo">FOODIE</h2>
                <p className="footer-tagline">Delicious food for every mood</p>
              </div>
              
              <p className="footer-description">
                Here at Foodie.com we make sure to use healthy and fresh vegetables and cereals in making best meals. 
                Meaty dishes are prepared using meat of healthy animals bought from trusted firms. 
                Give us a chance to give you best taste of your life 😊
              </p>
              
              <div className="footer-social">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.url}
                    className="social-link"
                    aria-label={link.label}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="col-lg-2 col-md-6 mb-5 mb-lg-0"
              variants={itemVariants}
            >
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Menu</a></li>
                <li><a href="/#">About Us</a></li>
                <li><a href="/#">Services</a></li>
                <li><a href="/#">Contact</a></li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="col-lg-3 col-md-6 mb-5 mb-md-0"
              variants={itemVariants}
            >
              <h3 className="footer-heading">Contact Us</h3>
              <ul className="contact-info">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    <div className="contact-icon">{item.icon}</div>
                    {item.isLink ? (
                      <a href={item.href}>{item.text}</a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="col-lg-3 col-md-6"
              variants={itemVariants}
            >
              <h3 className="footer-heading">Newsletter</h3>
              <p className="newsletter-text">Subscribe to receive updates, access to exclusive deals, and more.</p>
              
              <form className="newsletter-form">
                <div className="form-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter your email" 
                    required
                  />
                  <motion.button 
                    type="submit" 
                    className="btn-subscribe"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">
                &copy; {currentYear} <a href="https://Foodie.com/">Foodie.com</a>. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <p className="made-with">
                Made with <span className="heart"><FaHeart /></span> by Foodie Team
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .site-footer {
          background-color: #fff;
          color: #333;
          position: relative;
          overflow: hidden;
        }
        
        .site-footer::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 159, 13, 0.1) 0%, rgba(255, 159, 13, 0) 70%);
          border-radius: 50%;
          z-index: 0;
        }
        
        .footer-top {
          padding: 80px 0 50px;
          position: relative;
          z-index: 1;
        }
        
        /* Brand Section */
        .footer-brand {
          margin-bottom: 20px;
        }
        
        .footer-logo {
          font-size: 2.2rem;
          font-weight: 800;
          color: #333;
          margin-bottom: 5px;
          font-style: italic;
        }
        
        .footer-tagline {
          color: #FF9F0D;
          font-size: 1rem;
          font-weight: 500;
        }
        
        .footer-description {
          color: #666;
          line-height: 1.7;
          margin-bottom: 25px;
        }
        
        /* Social Links */
        .footer-social {
          display: flex;
          gap: 12px;
          margin-bottom: 30px;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f5f5f5;
          color: #333;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-link:hover {
          background: #FF9F0D;
          color: white;
          transform: translateY(-5px);
        }
        
        /* Footer Headings */
        .footer-heading {
          font-size: 1.3rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 10px;
        }
        
        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #FF9F0D;
        }
        
        /* Footer Links */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 12px;
        }
        
        .footer-links a {
          color: #666;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
          position: relative;
        }
        
        .footer-links a::before {
          content: '→';
          margin-right: 8px;
          opacity: 0;
          transform: translateX(-10px);
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #FF9F0D;
          transform: translateX(5px);
        }
        
        .footer-links a:hover::before {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Contact Info */
        .contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .contact-info li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
        }
        
        .contact-icon {
          color: #FF9F0D;
          margin-right: 15px;
          font-size: 1.1rem;
          margin-top: 3px;
        }
        
        .contact-info a {
          color: #666;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .contact-info a:hover {
          color: #FF9F0D;
        }
        
        /* Newsletter */
        .newsletter-text {
          color: #666;
          margin-bottom: 20px;
          line-height: 1.7;
        }
        
        .newsletter-form .form-group {
          position: relative;
        }
        
        .form-control {
          height: 50px;
          border-radius: 25px;
          padding: 10px 20px;
          border: 1px solid #ddd;
          width: 100%;
          font-size: 0.95rem;
          box-shadow: none;
          transition: all 0.3s ease;
        }
        
        .form-control:focus {
          border-color: #FF9F0D;
          box-shadow: 0 0 0 3px rgba(255, 159, 13, 0.2);
          outline: none;
        }
        
        .btn-subscribe {
          position: absolute;
          right: 5px;
          top: 5px;
          height: 40px;
          border-radius: 20px;
          background: #FF9F0D;
          color: white;
          border: none;
          padding: 0 20px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-subscribe:hover {
          background: #e08c0b;
        }
        
        /* Footer Bottom */
        .footer-bottom {
          background: #FF9F0D;
          padding: 20px 0;
          color: white;
        }
        
        .copyright {
          margin: 0;
          font-size: 0.95rem;
        }
        
        .copyright a {
          color: white;
          font-weight: 600;
          text-decoration: none;
        }
        
        .made-with {
          margin: 0;
          text-align: right;
          font-size: 0.95rem;
        }
        
        .heart {
          color: #ff4757;
          display: inline-block;
          animation: heartbeat 1.5s infinite;
          margin: 0 5px;
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        /* Responsive Adjustments */
        @media (max-width: 992px) {
          .footer-top {
            padding: 60px 0 30px;
          }
        }
        
        @media (max-width: 768px) {
          .made-with {
            text-align: center;
            margin-top: 10px;
          }
          
          .copyright {
            text-align: center;
          }
          
          .footer-heading {
            margin-top: 30px;
          }
        }
        
        @media (max-width: 576px) {
          .footer-top {
            padding: 40px 0 20px;
          }
          
          .footer-logo {
            font-size: 1.8rem;
          }
          
          .social-link {
            width: 35px;
            height: 35px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </footer>
  );
}
