import React from "react";

export default function About() {
  return (
    <>
      <div className="container mt-5" id="cont-2">
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-6">
            <img src="rounded_corners.jpg" alt="Healthy Foodie" />
          </div>
          {/* Its actually first col-12 for mobile devices mean 12/12=1 which shows 1 coloumn grid and then we have for
        medium screens that are tablets where two grids 12/6=2 and for the large screens 12/6=2 */}

          <div className="col-12 col-md-6 col-lg-6">
            <div className="card border-0" style={{ marginTop: 50 }}>
              <div className="card-body " style={{ textAlign: "center" }}>
                <p style={{ color: "#FF9F0D" }}>About</p>
                <h1 className="card-title">
                  Food is an important part <br /> of Balanced Diet
                </h1>
                <p className="card-text-col-sm-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content build on the card title and
                  make up build on the card title and make up{" "}
                </p>
                <button type="button" class="btn btn-warning">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
