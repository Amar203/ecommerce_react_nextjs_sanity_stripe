import React from 'react';

const HeroTextBanner = ({ heroTextBanner}) => {
  return (
    <div className="text-banner-container">
      <div className="banner-desc">
        <div className="products-heading">
          <h2>{heroTextBanner.homeTitle}</h2> 
           <div className='about-text'>
            <p>{heroTextBanner.homeText}</p>
            </div> 
         </div>
        </div>  
      </div>
  )
}

export default HeroTextBanner