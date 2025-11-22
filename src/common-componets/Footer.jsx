import React from 'react'
import "../componets/styles/footer.css";

const Footer = () => {
  return (
    <div className='footers'>
       

      <footer>
        <div className="footer-header">
        <h2>Questions ? call +91 89059 78910</h2>
        <h2>Email: manavsolanki344@gmail.com</h2>
        </div>
    
    <div class="row">
        <div class="col">
            <a href="#">FAQS</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
        </div>

        <div class="col">
            <a href="#">Help Centre</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Notices</a>
        </div>

        <div class="col">
            <a href="#">Account</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Travel</a>

        </div>

        <div class="col">
            <a href="#">Media Centre</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
            
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer