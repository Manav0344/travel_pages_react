import React from 'react'
import bg from "../assets/img/Background.png"
import "../componets/styles/about.css"
import img1 from "../assets/img/about.jpg"
import img2 from "../assets/img/p-1.jpg"
import img3 from "../assets/img/p-2.jpg"
import img4 from "../assets/img/p-3.jpg"
import nap3 from "../assets/img/nap3.jpg"



const About = () => {
  return (
    <div>

     <div className="about-header d-flex  justify-content-center flex-column p-6 mb-5
      " style={{ backgroundImage: `url(${bg})` }}>
      <div className="about-text">
        <p><span className="border bg-danger text-white p-1 rounded m-1">Hello </span>i am</p>
        <h2 className="fs-1 font-monospace">Manav Solanki</h2>
        <h3>Travelling Agency </h3>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corporis ipsum. Blanditiis optio aut fugiat excepturi. Cupiditate quis delectus ipsum hic aperiam fuga quia fugit vero adipisci. Earum, ea autem.</p>
        <button className="p-2 rounded border-0 bg-primary text-white">Say Hello</button>
      </div>
      
     </div>


     <div className="about-data section-padding">
      <div className="about-img">
        <img src={img1} className="img-thumbnail rounded" alt="" />
      </div>
      <div className="about-info">
        <h2 className="text-center mb-5 font-monospace">Who We Are?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corporis ipsum. Blanditiis optio aut fugiat excepturi. Cupiditate quis delectus ipsum hic aperiam fuga quia fugit vero adipisci. Earum, ea autem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corporis ipsum. Blanditiis optio aut fugiat excepturi. Cupiditate quis delectus ipsum hic aperiam fuga quia fugit vero adipisci. Earum, ea autem.</p>
        <div className="text-center mt-4">
          <button className="p-2 rounded border-0 bg-primary text-white ">Explore More </button>
        </div>
      </div>
        
      </div>


      <div>
         <section id="team" class="section-padding">
      <div class="container px-5 mt-5">
        <div class="row">
          <div class="col-12 text-center">
            <div class="section-title">
              <h1 class="display-4 fw-semibold">Testimonials</h1>
              <div class="line"></div>
              <p>
                We love to craft digital experiences for brands rather than
                lorem ipsum — showing our creativity and skills.
              </p>
            </div>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="team-members image-zoom p-3">
              <div class="image-zoom-wrapper">
                <img src={img2} alt="" class="img-thumbnail" />
              </div>
              <div class="team-member-content">
                <h4>John Doe</h4>
                <p>UI Designer</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-members image-zoom p-3">
              <div class="image-zoom-wrapper">
                <img src={img3} alt="" class="img-thumbnail" />
              </div>
              <div class="team-member-content">
                <h4>Jane Smith</h4>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-members image-zoom p-3">
              <div class="image-zoom-wrapper">
                <img src={img4} alt="" class="img-thumbnail" />
              </div>
              <div class="team-member-content">
                <h4>Michael Lee</h4>
                <p>Project Manager</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="team-members image-zoom p-3">
              <div class="image-zoom-wrapper">
                <img src={img4} alt="" class="img-thumbnail" />
              </div>
              <div class="team-member-content">
                <h4>Michael Lee</h4>
                <p>Project Manager</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="team-members image-zoom p-3">
              <div class="image-zoom-wrapper">
                <img src={img4} alt="" class="img-thumbnail" />
              </div>
              <div class="team-member-content">
                <h4>Michael Lee</h4>
                <p>Project Manager</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="team-members image-zoom p-3">
              <div class="image-zoom-wrapper">
                <img src={img4} alt="" class="img-thumbnail" />
              </div>
              <div class="team-member-content">
                <h4>Michael Lee</h4>
                <p>Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      </div>

     <section className="py-5 section padding" id="our-story">
  <div className="container px-4 px-md-5">

    <div className="text-center mb-5">
      <h1 className="fw-bold display-5">Our Story</h1>
      <div
        style={{ width: "70px", height: "4px", background: "#0d6efd", borderRadius: "2px" }}
        className="mx-auto"
      ></div>
      <p className="mt-3 text-muted">
        Learn more about our journey, mission, and values.
      </p>
    </div>

    <div className="row g-5">
      <div className="col-md-6">
        <img src={nap3} alt="Our Story" className="img-fluid rounded shadow img-thumbnail rounded-5" />
      </div>

      <div className="col-md-6">
        <div className="accordion" id="storyAccordion">

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                How We Started
              </button>
            </h2>

            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#storyAccordion"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti esse labore similique libero, laborum debitis, sequi mollitia sit reiciendis, magnam sed asperiores hic magni deserunt ipsum iusto assumenda nesciunt porro!
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Our Mission
              </button>
            </h2>

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#storyAccordion"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores culpa, nihil ipsa quos quibusdam aut eius qui cupiditate doloribus tempora nemo! Dignissimos ad aliquid harum, neque id reprehenderit est deserunt.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                Why People Love Us
              </button>
            </h2>

            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#storyAccordion"
            >
              <div className="accordion-body">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, voluptatem! Quo magni voluptatum officia commodi praesentium voluptatibus aspernatur doloribus, aperiam enim repellat illum amet voluptas eum! Rerum consequuntur hic nulla.
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>


      
     </div>
   
  )
}

export default About