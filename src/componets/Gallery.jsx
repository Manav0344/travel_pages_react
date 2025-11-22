import React, { useState } from "react";

const Gallery = () => {
  const categories = {
    Beaches: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    ],
    Mountains: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    ],
    Cities: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
    ],
    Nature: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80",
    ],
    Waterfalls: [
      "https://images.unsplash.com/photo-1505731132164-cca9f84f1e3b",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    ],
    Adventure: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    ],
    Desert: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    ],
    Forest: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    ],
    Lakes: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    ],
    Islands: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    ],
    Snow: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
    ],
    Road: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    ],
    Sunset: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    ],
    Night: [
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    ],
  };

  const allCategories = Object.keys(categories);
  const [active, setActive] = useState("Beaches");
  const [modalImg, setModalImg] = useState("");

  return (
    <>
      
      <div
        className="container-fluid d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
          height: "80vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-4 rounded">
          <h1 className="fw-bold display-4">Explore Our Travel Gallery</h1>
          <p className="lead">
            Discover breathtaking destinations across all categories.
          </p>
        </div>
      </div>

    
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-3">Categories</h2>
        <p className="text-center mb-4">Choose category to explore images</p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {allCategories.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(c)}
              className={`btn px-4 ${
                active === c ? "btn-primary" : "btn-outline-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* IMAGE GRID */}
      <div className="container-fluid px-4 pb-5">
        <div className="row g-4">
          {categories[active].map((img, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className="gallery-card position-relative overflow-hidden rounded shadow-lg"
                onClick={() => setModalImg(img)}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img
                  src={img}
                  alt="Travel"
                  className="img-fluid"
                  style={{
                    height: "350px",
                    width: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
                <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-white fw-semibold">
                  View Image
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <div className="modal fade" id="imageModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-black">
            <img src={modalImg} className="w-100" alt="Selected" />
          </div>
        </div>
      </div>

      {/* WHY TRAVEL SECTION */}
      <div className="container my-5 py-4">
        <h2 className="text-center fw-bold mb-4">Why Travel With Us?</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm text-center">
              <h4>🌍 1000+ Destinations</h4>
              <p>We cover the most beautiful places around the world.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm text-center">
              <h4>🏆 Best Experience</h4>
              <p>We ensure unforgettable travel memories.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm text-center">
              <h4>💸 Affordable</h4>
              <p>Enjoy budget-friendly travel packages.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
