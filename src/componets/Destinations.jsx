import React from 'react'
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
import "./styles/destination.css";
import img1 from "../assets/img/map.svg"

function Destinations() {
  return (
    <>
      <div>

        <div>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">


            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>


            <div className="carousel-inner">

              <div className="carousel-item active">
                <img src={slide1} className="d-block w-100" alt="slide1" />
                <div className="carousel-caption d-none d-md-block text-black">
                  <h5>Goa Beaches and Resorts</h5>
                  <p>Find Your Perfect Place For Travell</p>

                </div>
              </div>

              <div className="carousel-item">
                <img src={slide2} className="d-block w-100" alt="slide2" />
                <div className="carousel-caption d-none d-md-block text-black">
                  <h5>Diu-Daman Beaches and Resort</h5>
                  <p>Find Your Perfect Place For Travell</p>

                </div>
              </div>

              <div className="carousel-item">
                <img src={slide3} className="d-block w-100" alt="slide3" />
                <div className="carousel-caption d-none d-md-block text-black">
                  <h5>Kedarnath</h5>
                  <p>Find Your Perfect Place For Travell</p>

                </div>
              </div>

            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        </div>
      </div>


      <div className="destination-grid mt-5 container">
        <h2 className="text-center my-4">Popular Destinations</h2>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, porro!</p>
        <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mb-5 col-12 mx-auto p-4 ">
          <div className="destination-card d-flex justify-content-center align-items-center gap-4 flex-wrap mb-5">
            <div className="destination-img">
              <img src={slide1} alt="" />
              <div className="destination-text">
                <h5>Goa</h5>
                <p>Starting from $500</p>

              </div>
            </div>


          </div>

          <div className="destination-card d-flex justify-content-center align-items-center gap-4 flex-wrap mb-5">
            <div className="destination-img">
              <img src={slide1} alt="" />
              <div className="destination-text">
                <h5>Goa</h5>
                <p>Starting from $500</p>

              </div>
            </div>


          </div>

          <div className="destination-card d-flex justify-content-center align-items-center gap-2 flex-wrap mb-5">
            <div className="destination-img">
              <img src={slide1} alt="" />
              <div className="destination-text">
                <h5>Goa</h5>
                <p>Starting from $500</p>

              </div>
            </div>


          </div>

          <div className="destination-card d-flex justify-content-center align-items-center gap-4 flex-wrap mb-5">
            <div className="destination-img">
              <img src={slide1} alt="" />
              <div className="destination-text">
                <h5>Goa</h5>
                <p>Starting from $500</p>

              </div>
            </div>


          </div>
        </div>
      </div>

      {/* map sectionn */}


      <div className="map-section">
        <div className="map-heading text text-center w-50 m-auto p-5">
          <h2>Our Branches and locations</h2>
          <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium quod commodi similique temporibus odit vel. Totam debitis, est quasi culpa rem fuga incidunt optio sunt nemo maxime commodi error?</p>
        </div>

       <div className="map-container">
         <div className="map-text text-center p-4">
          <h2>Our Locations</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>

        </div>

       
    <div className="map-container">
    
      <img
        src={img1}
        alt="world map"
        className="world-map"
      />

      
      <div className="pin" style={{ top: "40%", left: "48%" }}>
        <span>Paris</span>
      </div>

      <div className="pin" style={{ top: "55%", left: "60%" }}>
        <span>Dubai</span>
      </div>

      <div className="pin" style={{ top: "70%", left: "60%" }}>
        <span>Maldives</span>
      </div>

      <div className="pin" style={{ top: "38%", left: "20%" }}>
        <span>New York</span>
      </div>

      <div className="pin" style={{ top: "40%", left: "70%" }}>
        <span>Kedarnath</span>
      </div>

      <div className="pin" style={{ top: "47%", left: "69%" }}>
        <span>Goa</span>
      </div>

      
    </div>

       </div>
      </div>
    </>
  );
}

export default Destinations