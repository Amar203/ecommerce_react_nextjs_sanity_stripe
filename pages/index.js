import Head from 'next/head';
import React from 'react';
import { client } from '../lib/client';
import { FooterBanner, HeroBanner, HeroTextBanner } from '../components';


const Home=({products, bannerData}) =>(
 
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />    
    <HeroTextBanner heroTextBanner={bannerData.length && bannerData[0]}  /> 
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
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
export default Home;
