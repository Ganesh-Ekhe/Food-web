// import React from 'react';
import './footer.css';
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports </p>
<div className="footer-social-icons">
  <img src={assets.facebook_icon} alt="" />
  <img src={assets.twitter_icon} alt="" />
  <img src={assets.linkedin_icon} alt="" />
</div>
          </div>
          
          <div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
  <li>Home</li>
  <li>About us</li>
  <li>Delivery</li>
  <li>Privacy Policy</li>
</ul>
          </div>

            <div className="footer-content-right">
              <h2>Get In TOUCH</h2>
              <ul>
                <li>+1-123-254-369</li>
                <li>Contact@tomaoto.com</li>
              </ul>

            </div>
         </div>
         <hr />
         <p className='footer-copyright'>copyright 2024 @ tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer