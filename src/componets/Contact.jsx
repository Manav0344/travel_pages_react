import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <>
      
      <div
        className="contact-banner"
        style={{
          // backgroundImage: "url('./ assets/img/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "70vh",
        }}
      >
        <div className="bg-dark bg-opacity-50 h-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-white fw-bold">Contact Us</h1>
          <p className="text-light">We’re here to help you plan your trip</p>
        </div>
      </div>

     
      <div className="container my-5 ">
        <div className="row g-4 mt-5 mt-{30px}">

         
          <div className="col-md-5">
            <h3 className="fw-bold mb-3">Contact Details</h3>

            <p>📍 Office Address: Ahmedabad, India</p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>📧 Email: travel@example.com</p>
            <p>⏰ Working Hours: 9 AM – 6 PM</p>

            <div>
              <strong>Follow us:</strong><br />
              🌐 Facebook | Instagram | Twitter
            </div>
          </div>

         
          <div className="col-md-7">
            <h3 className="fw-bold mb-3">Send Message</h3>

            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input className="form-control" type="text" placeholder="Name" />
                </div>

                <div className="col-md-6">
                  <input className="form-control" type="email" placeholder="Email" />
                </div>

                <div className="col-md-6">
                  <input className="form-control" type="text" placeholder="Phone" />
                </div>

                <div className="col-12">
                  <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                </div>

                <div className="col-12">
                  <button className="btn btn-primary w-100">Submit</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>

     
      <div className="container my-5">
        <h3 className="fw-bold text-center mb-3">Find Us on Map</h3>
        <div style={{ height: "400px" }}>
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610019564!2d72.74109905961327!3d19.08219783936859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzU1LjkiTiA3MsKwNDQnMjguMyJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
