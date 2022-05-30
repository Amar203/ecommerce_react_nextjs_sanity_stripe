import React from 'react';
import { client } from '../lib/client';
import {AboutBanner, AboutTextBanner } from '../components';

const About = ({products, bannerData}) => (

   
  <div>
        <AboutBanner aboutBanner={bannerData.length && bannerData[0]}  />    
        <AboutTextBanner aboutTextBanner={bannerData.length && bannerData[0]} />
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


export default About;