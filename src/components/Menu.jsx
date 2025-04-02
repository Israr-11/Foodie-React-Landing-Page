import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Menu(props) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleBuyNow = (itemName) => {
    alert(`Contact on phone number for delivery of ${itemName}`);
  };

  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["all", "breakfast", "lunch", "dinner", "desserts"];

  const menuItems = [
    {
      id: 1,
      name: props.name1,
      text: props.text1,
      image: props.pic1,
      price: "$12.99",
      category: "breakfast",
    },
    {
      id: 2,
      name: props.name2,
      text: props.text2,
      image: props.pic2,
      price: "$14.99",
      category: "lunch",
    },
    {
      id: 3,
      name: props.name3,
      text: props.text3,
      image: props.pic3,
      price: "$11.99",
      category: "dinner",
    },
    {
      id: 4,
      name: props.name4,
      text: props.text4,
      image: props.pic4,
      price: "$9.99",
      category: "breakfast",
    },
    {
      id: 5,
      name: props.name5,
      text: props.text5,
      image: props.pic5,
      price: "$13.99",
      category: "desserts",
    },
    {
      id: 6,
      name: props.name6,
      text: props.text6,
      image: props.pic6,
      price: "$10.99",
      category: "lunch",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div id="menu-portion" className="menu-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="subtitle"
            style={{ color: "#FF9F0D", fontWeight: "600", fontSize: "18px" }}
          >
            Our Menu
          </motion.p>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="section-title mb-3"
            style={{ fontWeight: "bold" }}
          >
            Explore Our Delicious Offerings
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="section-description"
          >
            We give the meals that you require everyday <br />
            So, that you can enjoy it with family
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="category-filter mb-5"
        >
          <div className="d-flex justify-content-center flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn mx-2 mb-2 ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="row g-4">
          {filteredItems.map((item, index) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="col-12 col-md-6 col-lg-4"
              key={item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="menu-card">
                <div className="menu-img-container">
                  <img src={item.image} className="menu-img" alt={item.name} />

                  <div
                    className={`menu-overlay ${
                      hoveredItem === item.id ? "active" : ""
                    }`}
                  >
                    <div className="action-buttons">
                      <button
                        className="action-btn"
                        onClick={() => handleBuyNow(item.name)}
                      >
                        <FaShoppingCart />
                      </button>
                      <button className="action-btn">
                        <FaHeart />
                      </button>
                      <button className="action-btn">
                        <FaSearch />
                      </button>
                    </div>
                  </div>

                  <div className="price-tag">{item.price}</div>
                </div>

                <div className="menu-content">
                  <h4 className="menu-title">{item.name}</h4>
                  <p className="menu-description">{item.text}</p>
                  <button
                    type="button"
                    className="btn-order"
                    onClick={() => handleBuyNow(item.name)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn-view-all">View Full Menu</button>
        </div>
      </div>

      <style jsx>{`
        .menu-section {
          padding: 80px 0;
          background-color: #fafafa;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-description {
          font-size: 1.1rem;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Category Filter */
        .category-btn {
          background: transparent;
          border: 2px solid #ff9f0d;
          color: #333;
          padding: 8px 20px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          outline: none;
        }

        .category-btn:hover,
        .category-btn.active {
          background-color: #ff9f0d;
          color: white;
        }

        /* Menu Card */
        .menu-card {
          background-color: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }

        .menu-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .menu-img-container {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .menu-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .menu-card:hover .menu-img {
          transform: scale(1.1);
        }

        /* Overlay */
        .menu-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .menu-overlay.active {
          opacity: 1;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
        }

        .action-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff9f0d;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          transform: translateY(20px);
          opacity: 0;
        }

        .menu-overlay.active .action-btn {
          transform: translateY(0);
          opacity: 1;
          transition-delay: 0.1s;
        }

        .menu-overlay.active .action-btn:nth-child(2) {
          transition-delay: 0.2s;
        }

        .menu-overlay.active .action-btn:nth-child(3) {
          transition-delay: 0.3s;
        }

        .action-btn:hover {
          background: #ff9f0d;
          color: white;
        }

        /* Price Tag */
        .price-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #ff9f0d;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-weight: bold;
          box-shadow: 0 3px 10px rgba(255, 159, 13, 0.3);
        }

        /* Menu Content */
        .menu-content {
          padding: 20px;
          text-align: center;
        }

        .menu-title {
          font-weight: 700;
          margin-bottom: 10px;
          color: #333;
        }

        .menu-description {
          color: #666;
          font-size: 0.95rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .btn-order {
          background: #ff9f0d;
          color: white;
          border: none;
          padding: 8px 25px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 3px 10px rgba(255, 159, 13, 0.3);
        }

        .btn-order:hover {
          background: #e08c0b;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 159, 13, 0.4);
        }

        .btn-view-all {
          background: transparent;
          border: 2px solid #ff9f0d;
          color: #ff9f0d;
          padding: 10px 30px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .btn-view-all:hover {
          background: #ff9f0d;
          color: white;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .menu-img-container {
            height: 180px;
          }

          .action-btn {
            width: 35px;
            height: 35px;
            font-size: 14px;
          }

          .menu-overlay {
            opacity: 1;
            background: rgba(0, 0, 0, 0.3);
          }

          .action-btn {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
