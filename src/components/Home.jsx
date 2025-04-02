import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Home() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const infoCards = [
    {
      icon: <FaClock />,
      text: "10AM to 10PM",
      image: "time-16.png"
    },
    {
      icon: <FaMapMarkerAlt />,
      text: "Texas, United States",
      image: "location-16.png"
    },
    {
      icon: <FaPhoneAlt />,
      text: "+1-112-121-1111",
      image: "phone-28-16.png",
      isPhone: true
    }
  ];

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="container mt-3" id="cont-1">
        <div className="row g-5 align-items-center">
          <motion.div 
            className="col-12 col-lg-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-content">
              <motion.span 
                className="hero-badge"
                variants={itemVariants}
              >
                #1 Rated Food Delivery
              </motion.span>
              
              <motion.h1 
                className="hero-title"
                variants={itemVariants}
              >
                Your Favourite Food Delivered <span className="text-highlight">Hot & Fresh</span>
              </motion.h1>
              
              <motion.p 
                className="hero-description"
                variants={itemVariants}
              >
                Experience culinary excellence delivered to your doorstep. We bring you the finest selection of gourmet meals prepared by expert chefs using only the freshest ingredients.
              </motion.p>
              
              <motion.div 
                className="hero-cta"
                variants={itemVariants}
              >
                <button className="btn-order">
                  Order Now <FaArrowRight className="btn-icon" />
                </button>
                
                <button className="btn-menu">
                  View Menu
                </button>
              </motion.div>
              
              <motion.div 
                className="hero-stats"
                variants={itemVariants}
              >
                <div className="stat-item">
                  <span className="stat-number">10k+</span>
                  <span className="stat-text">Happy Customers</span>
                </div>
                
                <div className="stat-divider"></div>
                
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-text">Menu Items</span>
                </div>
                
                <div className="stat-divider"></div>
                
                <div className="stat-item">
                  <span className="stat-number">30min</span>
                  <span className="stat-text">Fast Delivery</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-12 col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="hero-image-container">
              <img src="img1.png" alt="Delicious Food" className="hero-image" />
              
              <motion.div 
                className="floating-food-item item-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="food-badge">
                  <span className="food-emoji">🥗</span>
                  <span className="food-text">Fresh Salads</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="floating-food-item item-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="food-badge">
                  <span className="food-emoji">🍕</span>
                  <span className="food-text">Gourmet Pizza</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="floating-food-item item-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <div className="food-badge">
                  <span className="food-emoji">🍔</span>
                  <span className="food-text">Premium Burgers</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container info-cards-container" id="cont-3">
        <motion.div 
          className="row g-4 justify-content-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          {infoCards.map((card, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <motion.div 
                className="info-card"
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="info-icon">
                  {card.icon}
                </div>
                {card.isPhone ? (
                  <a href={`tel:${card.text.replace(/[^0-9]/g, '')}`} className="info-text">
                    {card.text}
                  </a>
                ) : (
                  <span className="info-text">{card.text}</span>
                )}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <style jsx>{`
        .hero-section {
          position: relative;
          padding: 80px 0 120px;
          overflow: hidden;
          background-color: #fafafa;
        }
        
        /* Background Shapes */
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        
        .shape {
          position: absolute;
          border-radius: 50%;
        }
        
        .shape-1 {
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: rgba(255, 159, 13, 0.1);
        }
        
        .shape-2 {
          bottom: -150px;
          left: -150px;
          width: 400px;
          height: 400px;
          background: rgba(255, 159, 13, 0.05);
        }
        
        .shape-3 {
          top: 40%;
          left: 30%;
          width: 200px;
          height: 200px;
          background: rgba(255, 159, 13, 0.07);
        }
        
        /* Hero Content */
        .hero-content {
          padding: 20px 0;
        }
        
        .hero-badge {
          display: inline-block;
          background: rgba(255, 159, 13, 0.1);
          color: #FF9F0D;
          padding: 8px 16px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 20px;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #333;
        }
        
        .text-highlight {
          color: #FF9F0D;
          position: relative;
          display: inline-block;
        }
        
        .text-highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(255, 159, 13, 0.2);
          z-index: -1;
        }
        
        .hero-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 30px;
          max-width: 550px;
        }
        
        /* CTA Buttons */
        .hero-cta {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
        }
        
        .btn-order {
          background: #FF9F0D;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 5px 15px rgba(255, 159, 13, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .btn-order:hover {
          background: #e08c0b;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(255, 159, 13, 0.4);
        }
        
        .btn-icon {
          font-size: 0.9rem;
          transition: transform 0.3s ease;
        }
        
        .btn-order:hover .btn-icon {
          transform: translateX(5px);
        }
        
        .btn-menu {
          background: transparent;
          color: #333;
          border: 2px solid #FF9F0D;
          padding: 12px 25px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .btn-menu:hover {
          background: rgba(255, 159, 13, 0.1);
          transform: translateY(-5px);
        }
        
        /* Stats */
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        
        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #333;
        }
        
        .stat-text {
          font-size: 0.9rem;
          color: #666;
        }
        
        .stat-divider {
          width: 1px;
          height: 40px;
          background: #ddd;
        }
        
        /* Hero Image */
        .hero-image-container {
          position: relative;
          padding: 20px;
        }
        
        .hero-image {
          width: 100%;
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        /* Floating Food Items */
        .floating-food-item {
          position: absolute;
          z-index: 2;
        }
        
        .item-1 {
          top: 20%;
          left: 0;
          animation: float2 7s ease-in-out infinite;
        }
        
        .item-2 {
          top: 60%;
          right: 5%;
          animation: float2 8s ease-in-out infinite;
        }
        
        .item-3 {
          bottom: 10%;
          left: 10%;
          animation: float2 6s ease-in-out infinite;
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .food-badge {
          background: white;
          display: flex;
          align-items: center;
          padding: 8px 15px;
          border-radius: 50px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .food-emoji {
          font-size: 1.2rem;
          margin-right: 8px;
        }
        
        .food-text {
          font-weight: 600;
          font-size: 0.9rem;
          color: #333;
        }
        
        /* Info Cards */
        .info-cards-container {
          margin-top: -50px;
          position: relative;
          z-index: 10;
        }
        
        .info-card {
          background: white;
          border-radius: 15px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          height: 100%;
        }
        
        .info-icon {
          width: 50px;
          height: 50px;
          background: rgba(255, 159, 13, 0.1);
          color: #FF9F0D;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        
        .info-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .info-text:hover {
          color: #FF9F0D;
        }
        
        /* Responsive Adjustments */
        @media (max-width: 1200px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-stats {
            flex-wrap: wrap;
          }
        }
        
        @media (max-width: 992px) {
          .hero-section {
            padding: 60px 0 100px;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-image-container {
            margin-top: 40px;
          }
          
          .floating-food-item {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 40px 0 120px;
          }
          
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-cta {
            flex-direction: column;
            gap: 10px;
            width: 100%;
            max-width: 300px;
          }
          
          .btn-order, .btn-menu {
            width: 100%;
            justify-content: center;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .info-cards-container {
            margin-top: -30px;
          }
          
          .info-card {
            padding: 15px;
            margin-bottom: 15px;
          }
        }
        
        @media (max-width: 576px) {
          .hero-badge {
            font-size: 0.8rem;
          }
          
          .hero-title {
            font-size: 1.8rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }
          
          .stat-number {
            font-size: 1.3rem;
          }
          
          .stat-text {
            font-size: 0.8rem;
          }
          
          .info-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
          
          .info-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
