import React from 'react';

const AboutTextBanner = ({ aboutTextBanner}) => {
  return (
    <div className="text-banner-container">
      <div className="banner-desc">
        <div className="products-heading">
          <h2>{aboutTextBanner.titleAboutText}</h2> 
           <div className='about-text'>
            <p>{aboutTextBanner.smallAboutText}</p>
            </div> 
         </div>
        </div>  
      </div>
  )
}

export default AboutTextBanner