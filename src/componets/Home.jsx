import React from "react";

import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
import "./styles/home.css";
const Home = () => {
  return (
   
   <>
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
              <h5>First Slide</h5>
              <p>Representing placeholder content for the first slide.</p>
              <button className="p-2 rounded mx-2">Get Started</button>
              <button className="p-2 rounded">Read More</button>
            </div>
          </div>

          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="slide2" />
            <div className="carousel-caption d-none d-md-block text-black">
              <h5>Second Slide</h5>
              <p>Placeholder content for the second slide.</p>
              <button className="p-2 rounded mx-2">Get Started</button>
              <button className="p-2 rounded">Read More</button>
            </div>
          </div>

          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="slide3" />
            <div className="carousel-caption d-none d-md-block text-black">
              <h5>Third Slide</h5>
              <p>Placeholder content for the third slide.</p>
              <button className="p-2 rounded mx-2">Get Started</button>
              <button className="p-2 rounded">Read More</button>
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

  <div className="card-section">
      <div className="card-heading text-center mt-5 mb-5 w-70">
        <h2>Our Best Destinations</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ullam eaque consectetur, ratione explicabo dolorem reprehenderit. Nobis officiis sit,  illum earum laboriosam quas ratione inventore officia, molestiae alias sapiente voluptates.</p>
      </div>

      <div className="all-cards">
        <div className="card-container d-flex justify-content-center align-items-center gap-4 flex-wrap mb-5 w">
          <div className="card" style={{width: "18rem"}}>
          <img src={slide1} className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Goa</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Book Now</a>
             <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
          <img src={slide1} className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Diu-Daman</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Book Now</a>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
          <img src={slide1} className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Matheran</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Book Now</a>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
          <img src={slide1} className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Polo Forest</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Book Now</a>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
          <img src={slide1} className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Bakor</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Book Now</a>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
          <img src={slide1} className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">Kedarnath</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Book Now</a>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
        </div>
        

        
      </div>
   </div>


    <div className="choose-us">
      <div className="choose-us-content text-center mt-5 mb-5">
        <h2>Why Choose Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <div className="check-icons">
          <i class="bi bi-bag-check-fill">Experts Guied</i> <br />
          <i class="bi bi-bag-check-fill">Best Prices</i> <br />
          <i class="bi bi-bag-check-fill">Best Range</i> <br />
          <i class="bi bi-bag-check-fill">Best Places</i> <br />
          <i class="bi bi-bag-check-fill">Safe Travelling</i> <br />
          <i class="bi bi-bag-check-fill">Support</i> <br />
        </div>
        </div>
        
      </div>  
   
   

   </>
   
   
   

    
  );
};

export default Home;
