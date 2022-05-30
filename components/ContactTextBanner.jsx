import React from 'react';

const ContactTextBanner = ({ contactTextBanner}) => {
  return (
    <div className="text-banner-container">
      <div className="banner-desc">
        <div className="products-heading">
          <h2>{contactTextBanner.titleContactText}</h2> 
            <div className='about-text'>
                <p>{contactTextBanner.contactText}</p>
                <p>{contactTextBanner.contactEmail}</p>
                <p>{contactTextBanner.contactNum}</p>
            </div> 
            </div> 
         </div>
         </div>
  )
}

export default ContactTextBanner