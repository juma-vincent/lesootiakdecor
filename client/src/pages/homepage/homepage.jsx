import React from 'react';
// import BannerSlider from '../../components/banner-slider/banner-slider'
const Homepage = () => {
    return ( 
        <div className="homepage" style={{width:'100vw', margin: 'auto'}}> 
    {/* <BannerSlider autoPlay={10}/> */}
   <div id='about' style={{boxShadow: '0.5px 2px 5px lightgrey', margin:'30px', padding: '10px', 
   borderRadius:'3px'}} >
       <h2>About Lesootia K Decor</h2>
        <p >Lesootia K Decor was started in 2020.
        </p>
   </div>


     
      
    </div>
     );
}
 
export default Homepage;