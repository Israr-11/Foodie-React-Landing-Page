import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-arrow prev-arrow ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-arrow next-arrow ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
};

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "Best food I have ever eaten, do book Foodie services if you need healthy and tasty food. The flavors are authentic and the service is exceptional!",
      name: "David Mitchell",
      location: "Texas",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "I've tried many food delivery services, but Foodie stands out with their fresh ingredients and amazing taste. My family looks forward to our weekly orders!",
      name: "Sarah Johnson",
      location: "California",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "The variety of menu options keeps me coming back. Everything is prepared with care and the portions are generous. Highly recommended!",
      name: "Michael Brown",
      location: "New York",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "As a busy professional, Foodie has been a lifesaver. Delicious, nutritious meals delivered right to my doorstep. Can't imagine my life without it now!",
      name: "Jennifer Lee",
      location: "Chicago",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p
            className="subtitle"
            style={{ color: "#FF9F0D", fontWeight: "600", fontSize: "18px" }}
          >
            Testimonial
          </p>
          <h1 className="section-title mb-3" style={{ fontWeight: "bold" }}>
            What Our Customers Say
          </h1>
          <p className="section-description">
            We deliver exceptional dining experiences that bring joy to families
            every day
          </p>
        </div>

        <div className="testimonial-carousel position-relative">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <div className="testimonial-card">
                  <div className="card shadow-sm border-0 h-100">
                    <div className="card-body d-flex flex-column">
                      <div className="testimonial-rating mb-3">
                        {[...Array(5)].map((_, i) => (
                          <AiFillStar
                            key={i}
                            style={{ color: "#FF9F0D", fontSize: "20px" }}
                          />
                        ))}
                      </div>
                      <p className="card-text flex-grow-1">
                        {testimonial.text}
                      </p>
                      <div className="d-flex align-items-center mt-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-circle me-3"
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <h5
                            className="mb-0"
                            style={{ color: "#FF9F0D", fontWeight: "600" }}
                          >
                            {testimonial.name}
                          </h5>
                          <p className="mb-0 text-muted">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        .testimonial-section {
          background-color: #f9f9f9;
          padding: 80px 0;
        }

        .testimonial-card {
          height: 100%;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
        }

        .card {
          border-radius: 15px;
          overflow: hidden;
          height: 100%;
          padding: 20px;
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

        /* Custom styling for slick carousel */
        .slick-dots li button:before {
          color: #ff9f0d;
        }

        /* Custom arrow styling */
        .custom-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex !important;
          align-items: center;
          justify-content: center;
          background-color: #ff9f0d;
          color: white;
          border-radius: 50%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          font-size: 24px;
          transition: all 0.3s ease;
        }

        .custom-arrow:hover {
          background-color: #e08c0b;
          transform: translateY(-50%) scale(1.1);
        }

        .prev-arrow {
          left: -5px;
        }

        .next-arrow {
          right: -5px;
        }

        /* Make arrows more visible on mobile */
        @media (max-width: 768px) {
          .custom-arrow {
            width: 50px;
            height: 50px;
            font-size: 30px;
            opacity: 0.9;
          }

          .prev-arrow {
            left: 10px;
          }

          .next-arrow {
            right: 10px;
          }
        }
      `}</style>
    </div>
  );
}
