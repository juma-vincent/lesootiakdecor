import React,{useState, useEffect} from 'react';
import BannerSlider from '../../components/banner-slider/banner-slider';
import Features from '../../components/features/features';
import ProductItem from '../../components/product-item/product-item';
import './homepage.scss';
import axios from 'axios';


const Homepage = () => {
    
     const [products, setProducts] = useState([]);

     useEffect(async ()=>{
        const res = await axios.post('/api/filter_product_by_popularity',
        { popularityLevel: 'high'} );

        setProducts(res.data)
    }, []) ;

    return ( 
        <div className="homepage" style={{width:'100vw', margin: 'auto'}}> 
            <BannerSlider autoPlay={6}/>
            <h2>Best Selling Products</h2>
            <div className='best-selling-products' > 
                
                {products.map((product) => (
                        <ProductItem
                        key={product._id}
                        className="product-item"                
                        item={product}
                        />
                    ))}
            </div>
            <div className='about-section'>
                <div id='about'  >

                    <h2>About Us</h2>
                        
                    Lesootia K Decor is the leading decor and floral styling business in the country.
                    Our shop offers a variety of flowers for all occasions. 
                    We also provide event planning and floral styling for corporate, weddings, burials,
                    memorials.
                    Shop our services online and have them delivered to you anywhere in the country. 


                        <div id="about-content">
                            <div className='expressions-through-flowers'>Expressions through Flowers</div>
                           
                            <div className='about-and-features-title'>An event Planning and floral styling business</div>
                            We take care of all necessary arrangements to successfully setup your event.
                            We want to ensure that our service is an integral part of our client’s overall success.
                            Let us help you plan a top-notch event that will leave a lasting impression on your 
                            attendees.

                            <div className='about-and-features-title'>Delivery</div>
                            We have excellent and timely delivery services countrywide.
                            We've got an excellent delivery team that covers the whole of Kenya currently. We 
                            have same day delivery in Nairobi. We also have timely delivery
                            via our Courier Services for all orders  outside Nairobi. All flowers 
                            are properly and carefully packaged which ensures they arrive in perfect condition
                            when you receive them. 

                            
                        </div>
                        
                </div>
            </div>
        <div className='features-wrapper'> 
        <div className='about-and-features-title'>Why Choose Lesootia K Decor?</div>       
            <Features/>
        </div>


     
      
    </div>
     );
}
 
export default Homepage;

