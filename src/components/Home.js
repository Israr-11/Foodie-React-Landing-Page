import React from 'react'

export default function Home() {
  return (
    <>

      <div className="container mt-3" id='cont-1' >
        <div className='row g-3'>
          <div className='col-12 col-md-6 col-lg-6'>
            <div className="card border-0" style={{ marginTop: 50 }}>
              <div className="card-body " style={{ textAlign: "center" }}>
                <h1 className="card-title" >Your Favourite Food Delivered  <br /> Hot and Fresh</h1>
                <p className="card-text-col-sm-3">Some quick example text to build on the card title and make up
                  the bulk of the card's content build on the card title and make up build on the card title and make up </p>
                <button type="button" class="btn btn-warning">Read More</button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-6 '>
            <img src="img1.png" alt='Vegetables' />
          </div>
        </div>
      </div>

      <div class="container " id='cont-3' style={{ textAlign: "center", marginTop: 100 }} >
        <div className='row justify-content-evenly g-3'>
          <div className='col-12 col-md-6 col-lg-4'>
            <button type="button" class="btn btn-light" style={{ border: "2px solid #FF9F0D", backgroundColor: "white" }}>
              <img src='time-16.png' alt='Time icon' /> <br /> 10AM to 10PM
            </button>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <button type="button" class="btn btn-light" style={{ border: "2px solid #FF9F0D", backgroundColor: "white" }}>
              <img src='location-16.png' alt='Location' /> <br /> Islamabad, Pakistan
            </button>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <button type="button" class="btn btn-light" style={{ border: "2px solid #FF9F0D", backgroundColor: "white" }}>
              <img src='phone-28-16.png' alt='Phone' /> <br /> <a style={{ linkStyle: "none", color: "black", textDecoration: "none" }}>+92-112-121-1111</a>

            </button>
          </div>
        </div>
      </div>
    </>
  )
}
