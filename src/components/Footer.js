import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="bg-white text-center text-black mt-5 ">
        <div class="container p-4">
          <section class="mb-4">
            <a
              class="btn btn-outline-black btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-outline-black btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn btn-outline-black btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-google"></i>
            </a>

            <a
              class="btn btn-outline-black btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn btn-outline-black btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              class="btn btn-outline-black btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>

          <section class="">
            <form action="">
              <div class="row d-flex justify-content-center">
                <div class="col-auto">
                  <p class="pt-2">
                    <strong>Sign up for discount and offers</strong>
                  </p>
                </div>

                <div class="col-md-5 col-12">
                  <div class="form-outline form-black mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      class="form-control"
                      placeholder="Email "
                    />
                  </div>
                </div>

                <div class="col-auto">
                  <button type="submit" class="btn btn-outline-black mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section class="mb-4">
            <p>
              Here at Foodie.com we make sure to use healthy and fresh
              vegetables and cereals in making best meals. Meaty dishes are
              prepared using meat of healthy animals bought from trusted firms.
              Give us a chance to give you best taste of your life 😊
            </p>
          </section>
        </div>

        <div class="text-center p-3" style={{ backgroundColor: "#FF9F0D" }}>
          © 2022 Copyright
          <a
            class="text-white"
            style={{ textDecoration: "none" }}
            href="https://Foodie.com/"
          >
            {" "}
            Foodie.com
          </a>
        </div>
      </footer>
    </div>
  );
}
