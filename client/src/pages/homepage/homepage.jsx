import React from 'react';
import BannerSlider from '../../components/banner-slider/banner-slider';
import Features from '../../components/features/features';


const Homepage = () => {
    return ( 
        <div className="homepage" style={{width:'100vw', margin: 'auto'}}> 
    <BannerSlider autoPlay={6}/>
    {/* <div style={{width:'100vw', height: '150px', boxShadow: '0.5px 2px 5px lightgrey', padding: '40px'}}> 
        Best Selling Flowers
    </div> */}
   <div id='about' style={{boxShadow: '0.5px 2px 5px lightgrey', margin:'30px', padding: '10px', 
   borderRadius:'3px'}} >
       <h2>About Lesootia K Decor</h2>
        <p >Lesootia K Decor was started in 2020.
        </p>
   </div>
   <Features/>


     
      
    </div>
     );
}
 
export default Homepage;