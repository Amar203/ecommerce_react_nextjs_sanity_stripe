import React from 'react';

const AboutBanner = ({ aboutBanner}) => {
  return (
    <div className="about-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{aboutBanner.smallText}</p>
          <h3>{aboutBanner.midText}</h3> 
          <h3>{aboutBanner.largeText2}</h3>
          <p>{aboutBanner.product}</p>
          <p>{aboutBanner.desc}</p>
      </div>
        <div className="right">
        <img 
          src="assets/kang.webp" className="footer-banner-image"
         // src="assets/kangaroobag.jpg"  className="navbar-image"
        />
        </div>

        
      </div>
    </div>
  )
}

export default AboutBanner