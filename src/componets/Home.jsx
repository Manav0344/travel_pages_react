import React from "react";
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";

const Home = () => {
  return (
    <>
      {/* CAROUSEL */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">

          {[slide1, slide2, slide3].map((img, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src={img}
                className="d-block w-100"
                style={{ height: "600px", objectFit: "cover" }}
              />
              <div className="carousel-caption bg-white bg-opacity-75 p-4 rounded mb-4 text-black">
                <h5>{`Slide ${index + 1}`}</h5>
                <p>Placeholder content for slide.</p>
                <button className="btn btn-primary me-2">Get Started</button>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          ))}

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* DESTINATIONS */}
      <div className="container my-5">

        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h2>Our Best Destinations</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="row g-4 justify-content-center">

          {["Goa", "Diu-Daman", "Matheran", "Polo Forest", "Bakor", "Kedarnath"].map((place, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img src={slide1} className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">{place}</h5>
                  <p className="card-text">Sample text about this destination.</p>

                  <div className="d-flex justify-content-center gap-2 flex-wrap">
                    <button className="btn btn-primary">Book Now</button>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="py-5 text-center bg-light">

        <h2>Why Choose Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">

          {["Experts Guide", "Best Prices", "Best Range", "Best Places", "Safe Travelling", "Support"].map((item, index) => (
            <div key={index} className="d-flex align-items-center gap-2">
              <i className="bi bi-bag-check-fill text-primary fs-4"></i>
              <span className="fs-5">{item}</span>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Home;
