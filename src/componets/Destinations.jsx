import React from "react";
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
import img1 from "../assets/img/map.svg";

function Destinations() {
  const destinationImgStyle = {
    height: "300px",
    width: "80%",
    objectFit: "cover",
    marginTop: "50px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
    transition: "0.4s",
  };

  const destinationTextStyle = {
    position: "absolute",
    bottom: "20px",
    left: "50px",
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    transition: "0.4s",
    cursor: "pointer",
  };

  const mapImageStyle = {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    marginTop: "50px",
    marginBottom: "50px",
    objectFit: "cover",
  };

  const pinStyle = {
    position: "absolute",
    width: "20px",
    height: "20px",
    background: "red",
    borderRadius: "50%",
    cursor: "pointer",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 0 5px rgba(0,0,0,0.3)",
  };

  const pinLabelStyle = {
    position: "absolute",
    top: "-20px",
    left: "-10px",
    fontSize: "12px",
    background: "white",
    padding: "2px 5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    whiteSpace: "nowrap",
  };

  return (
    <>
     
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          {[slide1, slide2, slide3].map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={slide} className="d-block w-100" style={{ height: "600px", objectFit: "cover" }} />

              <div className="carousel-caption d-none d-md-block text-black bg-white bg-opacity-75 p-3 rounded">
                <h5>{index === 0 ? "Goa Beaches and Resorts" : index === 1 ? "Diu-Daman Beaches" : "Kedarnath"}</h5>
                <p>Find Your Perfect Place For Travel</p>
              </div>
            </div>
          ))}
        </div>

       
        <button className="carousel-control-prev" type="button" data-bs-slide="prev" data-bs-target="#carouselExampleCaptions">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-slide="next" data-bs-target="#carouselExampleCaptions">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

  
      <div className="container mt-5 text-center">
        <h2>Popular Destinations</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="row justify-content-center mt-4">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="position-relative d-flex justify-content-center">
                <img src={slide1} alt="Goa" style={destinationImgStyle} className="hover-zoom" />

                <div style={destinationTextStyle} className="destination-hover">
                  <h5>Goa</h5>
                  <p className="m-0">Starting from $500</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  
      <div className="container mt-5 text-center">
        <div className="w-75 mx-auto">
          <h2>Our Branches and Locations</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="position-relative mx-auto" style={{ width: "90%" }}>
          <img src={img1} alt="world map" style={mapImageStyle} />

          {/* Map Pins */}
          <div style={{ ...pinStyle, top: "40%", left: "48%" }}>
            <span style={pinLabelStyle}>Paris</span>
          </div>

          <div style={{ ...pinStyle, top: "55%", left: "60%" }}>
            <span style={pinLabelStyle}>Dubai</span>
          </div>

          <div style={{ ...pinStyle, top: "70%", left: "60%" }}>
            <span style={pinLabelStyle}>Maldives</span>
          </div>

          <div style={{ ...pinStyle, top: "38%", left: "20%" }}>
            <span style={pinLabelStyle}>New York</span>
          </div>

          <div style={{ ...pinStyle, top: "40%", left: "70%" }}>
            <span style={pinLabelStyle}>Kedarnath</span>
          </div>

          <div style={{ ...pinStyle, top: "47%", left: "69%" }}>
            <span style={pinLabelStyle}>Goa</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destinations;
