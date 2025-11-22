import React from 'react'
import "../componets/styles/Packages.css"
import img1 from "../assets/img/p8.jpg"
import img2 from "../assets/img/p7.jpg"
import img3 from "../assets/img/nap1.jpg"


const Packages = () => {
  return (

    <>
       <div className='packages'>

  <div className="package-text">
    <h2>Packages</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <h3>Choose Your Favourite Trip</h3>
  </div>


  <div className="filters">

    <input 
      type="text" 
      placeholder="Search Location..."
      className="search-input"
    />

  
    <select className="filter-select">
      <option value="">Package Type</option>
      <option value="adventure">Adventure</option>
      <option value="family">Family</option>
      <option value="honeymoon">Honeymoon</option>
      <option value="luxury">Luxury</option>
    </select>

   
    <select className="filter-select">
      <option value="">Duration</option>
      <option value="3days">1 - 3 Days</option>
      <option value="5days">3 - 5 Days</option>
      <option value="7days">5 - 7 Days</option>
      <option value="10days">7 - 10 Days</option>
    </select>


    <select className="filter-select">
      <option value="">Budget</option>
      <option value="5000">₹5,000 - ₹10,000</option>
      <option value="10000">₹10,000 - ₹20,000</option>
      <option value="20000">₹20,000 - ₹50,000</option>
      <option value="50000">₹50,000+</option>
    </select>

  </div>

</div>


    <div className="popular-packages">
      <div className="p-header">
        <h2>Popular Packages</h2>
        <h3>Choose Your Favourite packages</h3>
        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam labore excepturi suscipit nulla, optio cum doloribus assumenda enim dignissimos, in quisquam doloremque tenetur deserunt? Facilis earum iusto ut dolor asperiores!</p>
      </div>


      <div className="main-card-container">
          <div className="card-container ">
        <div className="card">
          <div className="card-image">
            <img src={img1} className="rounded" alt="Package 1" / >
          </div>
          <div className="card-content text-center mt-2 ">
            <h3>Goa Beaches</h3>
            <p className="text-center fs-4 fw-semibold text-black">5-Day Trip</p>
            <p className="text-center">Price:5000/ Per Person</p>
            <p className="w">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iusto animi ducimus dolore similique corrupti, nihil laborum aperiam ipsa eaque enim quis minima deserunt fugiat consequuntur facere officiis quam? Debitis?</p>
            <button className="p-2 border-0 mb-2 rounded bg-primary">View Details</button>

          </div>
        </div>
      </div>

        <div className="card-container ">
        <div className="card">
          <div className="card-image">
            <img src={img2} className="rounded" alt="Package 1" / >
          </div>
          <div className="card-content text-center mt-2 ">
            <h3>Goa Beaches</h3>
            <p className="text-center fs-4 fw-semibold text-black">5-Day Trip</p>
            <p className="text-center">Price:5000/ Per Person</p>
            <p className="w">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iusto animi ducimus dolore similique corrupti, nihil laborum aperiam ipsa eaque enim quis minima deserunt fugiat consequuntur facere officiis quam? Debitis?</p>
            <button className="p-2 border-0 mb-2 rounded bg-primary">View Details</button>

          </div>
        </div>
      </div>

        <div className="card-container ">
        <div className="card">
          <div className="card-image">
            <img src={img3} className="rounded" alt="Package 1" / >
          </div>
          <div className="card-content text-center mt-2 ">
            <h3>Goa Beaches</h3>
            <p className="text-center fs-4 fw-semibold text-black">5-Day Trip</p>
            <p className="text-center">Price:5000/ Per Person</p>
            <p className="w">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iusto animi ducimus dolore similique corrupti, nihil laborum aperiam ipsa eaque enim quis minima deserunt fugiat consequuntur facere officiis quam? Debitis?</p>
            <button className="p-2 border-0 mb-2 rounded bg-primary">View Details</button>

          </div>
        </div>
      </div>


     


      
      </div>

      </div>
    

    
    </>
  



  )
}

export default Packages