import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaRegClock, FaTruck } from "react-icons/fa";

export default function Working() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      id: 1,
      icon: <FaUtensils size={40} />,
      title: "Pick Meals",
      description: "Browse our diverse menu and select your favorite dishes prepared by expert chefs with premium ingredients.",
      image: "hamburger-64.png",
      color: "#FF9F0D"
    },
    {
      id: 2,
      icon: <FaRegClock size={40} />,
      title: "Choose How Often",
      description: "Set your preferred delivery schedule - daily, weekly, or for special occasions. Flexibility that fits your lifestyle.",
      image: "button-64.png",
      color: "#4CAF50"
    },
    {
      id: 3,
      icon: <FaTruck size={40} />,
      title: "Fast Deliveries",
      description: "Enjoy prompt delivery to your doorstep. Hot, fresh, and on time - our delivery team ensures a perfect experience.",
      image: "delivery-food-64.png",
      color: "#2196F3"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="how-it-works-section py-5">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <p className="section-subtitle" style={{ color: "#FF9F0D", fontWeight: "600" }}>Working</p>
          <h1 className="section-title mb-3">How it Works</h1>
          <p className="section-description">
            We give the meals that you require everyday <br /> So, that you can enjoy it with family
          </p>
        </motion.div>

        <motion.div 
          className="row g-4 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div 
              className="col-12 col-md-6 col-lg-4" 
              key={step.id}
              variants={itemVariants}
            >
              <motion.div 
                className="process-card"
                whileHover={{ 
                  y: -15,
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)"
                }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="step-number">
                  <span>{step.id}</span>
                </div>
                
                <div 
                  className="icon-container"
                  style={{ 
                    backgroundColor: hoveredStep === step.id ? step.color : "#f5f5f5",
                    color: hoveredStep === step.id ? "white" : step.color
                  }}
                >
                  {step.icon}
                </div>
                
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="connection-line d-none d-lg-block">
                    <svg width="100" height="20">
                      <path 
                        d="M0,10 C30,0 70,20 100,10" 
                        stroke="#FF9F0D" 
                        strokeWidth="2" 
                        strokeDasharray="5,5" 
                        fill="none"
                      />
                      <circle cx="100" cy="10" r="4" fill="#FF9F0D" />
                    </svg>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <button className="cta-button">
            Start Ordering Now
          </button>
        </motion.div>
      </div>
      
      <style jsx>{`
        .how-it-works-section {
          padding: 100px 0;
          background-color: #fafafa;
          position: relative;
          overflow: hidden;
        }
        
        .how-it-works-section::before {
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
        
        .how-it-works-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255, 159, 13, 0.1) 0%, rgba(255, 159, 13, 0) 70%);
          border-radius: 50%;
          z-index: 0;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #333;
        }
        
        .section-subtitle {
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .section-description {
          font-size: 1.1rem;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
        }
        
        /* Process Card */
        .process-card {
          background-color: white;
          border-radius: 15px;
          padding: 40px 30px;
          text-align: center;
          position: relative;
          transition: all 0.4s ease;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
          height: 100%;
          z-index: 1;
        }
        
        /* Step Number */
        .step-number {
          position: absolute;
          top: -15px;
          left: -15px;
          width: 40px;
          height: 40px;
          background-color: #FF9F0D;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          box-shadow: 0 5px 15px rgba(255, 159, 13, 0.3);
        }
        
        /* Icon Container */
        .icon-container {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          transition: all 0.3s ease;
        }
        
        /* Step Title */
        .step-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #333;
        }
        
        /* Step Description */
        .step-description {
          color: #666;
          font-size: 1rem;
          line-height: 1.6;
        }
        
        /* Connection Line */
        .connection-line {
          position: absolute;
          top: 50%;
          right: -50px;
          transform: translateY(-50%);
          z-index: 2;
        }
        
        /* CTA Button */
        .cta-button {
          background: linear-gradient(45deg, #FF9F0D, #FF7E0D);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1.1rem;
          box-shadow: 0 5px 15px rgba(255, 159, 13, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(255, 159, 13, 0.4);
        }
        
        /* Responsive Adjustments */
        @media (max-width: 992px) {
          .process-card {
            padding: 30px 20px;
          }
          
          .icon-container {
            width: 80px;
            height: 80px;
          }
          
          .step-title {
            font-size: 1.3rem;
          }
        }
        
        @media (max-width: 768px) {
          .how-it-works-section {
            padding: 70px 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .process-card {
            margin-bottom: 40px;
          }
          
          .step-number {
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
