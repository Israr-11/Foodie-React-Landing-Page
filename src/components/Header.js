import React from 'react'

export default function Header() {
  const Book = () => {
    alert("Call us at below given number")
  }
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "black", fontWeight: "bold", marginLeft: "100px", padding: "10px" }} href="#" ><i>FOODIE</i></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto" style={{ marginLeft: "auto", marginRight: "100px", padding: "10px" }}>
              <a className="nav-link active" style={{ color: "black", fontWeight: "bold" }} aria-current="page" href="#">Home</a>
              <a className="nav-link" style={{ color: "black", fontWeight: "bold" }} href="#">Packages</a>
              <a className="nav-link" style={{ color: "black", fontWeight: "bold" }} href="#">About Us</a>
              <a className="nav-link" style={{ color: "black", fontWeight: "bold" }} href="#">Contact Us</a>
              <button type="button" style={{ color: "black", fontWeight: "bold" }} class="btn btn-warning" onClick={Book}>Book Now</button>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}
