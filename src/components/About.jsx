import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaAppleAlt, FaHeartbeat } from "react-icons/fa";

export default function About() {
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

  const features = [
    {
      icon: <FaLeaf />,
      title: "Fresh Ingredients",
      description: "We source only the freshest, highest quality ingredients for all our dishes."
    },
    {
      icon: <FaAppleAlt />,
      title: "Organic Focus",
      description: "Our menu emphasizes organic produce and sustainably sourced proteins."
    },
    {
      icon: <FaHeartbeat />,
      title: "Nutritionally Balanced",
      description: "Every meal is crafted to provide optimal nutrition and energy."
    }
  ];

  return (
    <section className="about-section py-2">
      <div className="container mt-1" id="cont-2">
        <div className="row g-5 align-items-center">

          <motion.div 
            className="col-12 col-lg-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-container">
              <img 
                src="rounded_corners.jpg" 
                alt="Healthy Foodie" 
                className="about-image"
              />
              
              <motion.div 
                className="floating-badge badge-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <span className="badge-icon">🌿</span>
                <span className="badge-text">100% Organic</span>
              </motion.div>
              
              <motion.div 
                className="floating-badge badge-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <span className="badge-icon">⭐</span>
                <span className="badge-text">Top Rated</span>
              </motion.div>
              
              <motion.div 
                className="experience-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <span className="years">10+</span>
                <span className="text">Years of Excellence</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-12 col-lg-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="about-content" variants={itemVariants}>
              <p className="subtitle" style={{ color: "#FF9F0D" }}>About Us</p>
              <h1 className="title">
                Food is an important part <br className="d-none d-md-block" /> of a Balanced Diet
              </h1>
              
              <motion.p 
                className="description"
                variants={itemVariants}
              >
                At Foodie, we believe that nutritious food is the foundation of a healthy lifestyle. 
                Our mission is to provide delicious, wholesome meals that nourish your body and delight your taste buds.
                Every dish is crafted with care using premium ingredients to ensure the perfect balance of flavor and nutrition.
              </motion.p>
              
              <motion.div 
                className="features-container"
                variants={containerVariants}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    className="feature-item" 
                    key={index}
                    variants={itemVariants}
                  >
                    <div className="feature-icon">
                      {feature.icon}
                    </div>
                    <div className="feature-content">
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.button 
                type="button" 
                className="btn-learn-more"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        .about-section {
          position: relative;
          overflow: hidden;
          padding: 80px 0;
           background-color: #fafafa;
        }
        
        /* Image Styling */
        .about-image-container {
          position: relative;
          padding: 20px;
        }
        
        .about-image {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.5s ease;
        }
        
        /* Floating Badges */
        .floating-badge {
          position: absolute;
          display: flex;
          align-items: center;
          background: white;
          padding: 10px 15px;
          border-radius: 50px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }
        
        .badge-1 {
          top: 30px;
          left: 0;
        }
        
        .badge-2 {
          bottom: 60px;
          right: 0;
        }
        
        .badge-icon {
          font-size: 1.2rem;
          margin-right: 8px;
        }
        
        .badge-text {
          font-weight: 600;
          color: #333;
        }
        
        /* Experience Badge */
        .experience-badge {
          position: absolute;
          bottom: 0;
          left: 40px;
          background: #FF9F0D;
          color: white;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(255, 159, 13, 0.3);
          z-index: 2;
        }
        
        .years {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
        }
        
        .text {
          font-size: 0.8rem;
          text-align: center;
          max-width: 80px;
        }
        
        /* Content Styling */
        .about-content {
          padding: 20px;
        }
        
        .subtitle {
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }
        
        .title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #333;
          line-height: 1.2;
        }
        
        .description {
          color: #666;
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 30px;
        }
        
        /* Features */
        .features-container {
          margin-bottom: 30px;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        
        .feature-icon {
          background: rgba(255, 159, 13, 0.1);
          color: #FF9F0D;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-right: 15px;
          flex-shrink: 0;
        }
        
        .feature-title {
          font-weight: 600;
          margin-bottom: 5px;
          color: #333;
        }
        
        .feature-description {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        /* Button */
        .btn-learn-more {
          background: #FF9F0D;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 5px 15px rgba(255, 159, 13, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .btn-learn-more:hover {
          background: #e08c0b;
          box-shadow: 0 8px 20px rgba(255, 159, 13, 0.4);
        }
        
        /* Responsive Adjustments */
        @media (max-width: 992px) {
          .title {
            font-size: 2.2rem;
          }
          
          .experience-badge {
            width: 100px;
            height: 100px;
          }
          
          .years {
            font-size: 1.8rem;
          }
        }
        
        @media (max-width: 768px) {
          .about-section {
            padding: 60px 0;
          }
          
          .about-image-container {
            margin-bottom: 30px;
          }
          
          .title {
            font-size: 2rem;
          }
          
          .floating-badge {
            padding: 8px 12px;
          }
          
          .badge-1 {
            top: 20px;
            left: 10px;
          }
          
          .badge-2 {
            bottom: 50px;
            right: 10px;
          }
        }
        
        @media (max-width: 576px) {
          .experience-badge {
            width: 90px;
            height: 90px;
            left: 20px;
          }
          
          .years {
            font-size: 1.5rem;
          }
          
          .text {
            font-size: 0.7rem;
          }
          
          .feature-icon {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
