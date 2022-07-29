import React from 'react'

export default function Testimonial() {
  return (
    <div>

      <div style={{ textAlign: "center", marginTop: 50 }}>
        <p style={{ color: "#FF9F0D" }}>Testimonial</p>
        <h1>Lets find out what they are saying</h1>
        <p>We give the meals that you require everyday <br /> &nbsp; So, that you can enjoy it with family</p>
      </div>
      <div class="card " style={{ width: "20rem", textAlign: "center", margin: "0 auto" }}>
        <img src="test1.png" class="card-img-top" alt="testimonial 1" />
        <div class="card-body">
          <p class="card-text">Best food I have ever eaten, do book Foodie.com services if you need healthy and tasty food
          </p>
          <h4 style={{ color: "#FF9F0D" }}>Daniel, USA</h4>
        </div>
      </div>
    </div>
  )
}
