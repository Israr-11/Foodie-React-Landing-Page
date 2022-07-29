import React from 'react'

export default function Working() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <p style={{ color: "#FF9F0D" }}>Working</p>
        <h1>How it Works</h1>
        <p>We give the meals that you require everyday <br /> &nbsp; So, that you can enjoy it with family</p>

        <div class="container mt-3" style={{ textAlign: "center" }}>
          <div className='row g-3'>
            <div className='col-12 col-md-6 col-lg-4'>
              <button type="button" class="btn btn-light" style={{ border: "2px solid grey", marginRight: "10px", backgroundColor: "white" }}>
                <img src='hamburger-64.png' alt='Hamburger' /> <br /> <h3 style={{ marginTop: 3 }}>Pick Meals</h3> We give the meals that you require everyday
                <br />So, that you can enjoy it with family
              </button>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <button type="button" class="btn btn-light" style={{ border: "2px solid grey", marginRight: "10px", backgroundColor: "white" }}>
                <img src='button-64.png' alt='Button' /> <br /> <h3 style={{ marginTop: 3 }}>Choose How Often</h3> We give the meals that you require everyday
                <br />So, that you can enjoy it with family
              </button>
            </div>

            <div className='col-12 col-md-6 col-lg-4'>
              <button type="button" class="btn btn-light " style={{ border: "2px solid grey", backgroundColor: "white" }}>
                <img src='delivery-food-64.png' alt='Delivery vehicle' /> <br /> <h3 style={{ marginTop: 3 }}>Fast Deliveries</h3> We give the meals that you require everyday
                <br />So, that you can enjoy it with family
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
