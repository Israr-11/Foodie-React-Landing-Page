import React from "react";

export default function Menu(props) {
  const first = () => {
    alert("Contact on phone number for delivery");
  };

  const second = () => {
    alert("Contact on phone number for delivery");
  };
  const third = () => {
    alert("Contact on phone number for delivery");
  };
  const fourth = () => {
    alert("Contact on phone number for delivery");
  };
  const fifth = () => {
    alert("Contact on phone number for delivery");
  };
  const sixth = () => {
    alert("Contact on phone number for delivery");
  };

  return (
    <>
      <div className="container">
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <p class="text-center" style={{ color: "#FF9F0D" }}>
            Menu
          </p>
          <p class="h2">Explore our new Menu</p>
          {/* <h1>Explore our new Menu</h1> */}
          <p class="text-center">
            We give the meals that you require everyday <br /> &nbsp; So, that
            you can enjoy it with family
          </p>
        </div>
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img src={props.pic1} className="card-img-top" alt="Food 1" />
              <div className="card-body" style={{ textAlign: "center" }}>
                <h4 className="card-title">{props.name1}</h4>
                <p className="card-text">{props.text1}</p>
                <button
                  type="button"
                  class="btn btn-warning btn-sm"
                  onClick={first}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img src={props.pic2} className="card-img-top" alt="Food 2" />
              <div className="card-body" style={{ textAlign: "center" }}>
                <h4 className="card-title">{props.name2}</h4>
                <p className="card-text">{props.text2}</p>
                <button
                  type="button"
                  class="btn btn-warning btn-sm"
                  onClick={second}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img src={props.pic3} className="card-img-top" alt="Food 3" />
              <div className="card-body" style={{ textAlign: "center" }}>
                <h4 className="card-title">{props.name3}</h4>
                <p className="card-text">{props.text3}</p>
                <button
                  type="button"
                  class="btn btn-warning btn-sm"
                  onClick={third}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card mt-4">
              <img src={props.pic4} className="card-img-top" alt="Food 4" />
              <div className="card-body" style={{ textAlign: "center" }}>
                <h4 className="card-title">{props.name4}</h4>
                <p className="card-text">{props.text4}</p>
                <button
                  type="button"
                  class="btn btn-warning btn-sm"
                  onClick={fourth}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card mt-4">
              <img src={props.pic5} className="card-img-top" alt="Food 5" />
              <div className="card-body" style={{ textAlign: "center" }}>
                <h4 className="card-title">{props.name5}</h4>
                <p className="card-text">{props.text5}</p>
                <button
                  type="button"
                  class="btn btn-warning btn-sm"
                  onClick={fifth}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card mt-4">
              <img src={props.pic6} className="card-img-top" alt="Food 6" />
              <div className="card-body" style={{ textAlign: "center" }}>
                <h4 className="card-title">{props.name6}</h4>
                <p className="card-text">{props.text6}</p>
                <button
                  type="button"
                  class="btn btn-warning btn-sm"
                  onClick={sixth}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
