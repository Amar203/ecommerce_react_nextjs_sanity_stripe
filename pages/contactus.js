import React from 'react';
import { client } from '../lib/client';
import { ContactTextBanner, HeroBanner } from '../components';

const Contactus = ({products, bannerData}) => (

  

   <div>
        <ContactTextBanner contactTextBanner={bannerData.length && bannerData[0]} />
        <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />    
  </div>
  );
  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
        props: { products, bannerData }
      }
  
}

export default Contactus