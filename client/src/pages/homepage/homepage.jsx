import React,{useState} from 'react';
import BannerSlider from '../../components/banner-slider/banner-slider';
import Features from '../../components/features/features';
import ProductItem from '../../components/product-item/product-item';
import './homepage.scss';


const Homepage = () => {
     const [products, setProducts] = useState({flowers: [{id: 1, name:'Flower1', price: 200}, {id: 2, name:'Flower2', price: 300}]}  )
    return ( 
        <div className="homepage" style={{width:'100vw', margin: 'auto'}}> 
            <BannerSlider autoPlay={6}/>
            <h2>Best Selling Flowers</h2>
            <div className='flowers' style={{width:'100vw',  boxShadow: '0.5px 2px 5px lightgrey', padding: '40px'}}> 
                
                {products.flowers.map((product) => (
                        <ProductItem
                        key={product.id}
                        className="product-item"                
                        item={product}
                        />
                    ))}
            </div>
            <div className='about-section'>
                <div id='about'  >

                    <h2>About Us</h2>
                        <p >
                            Lesootia K Decor is a leading online gift store in the country.
                            Our shop offers a variety of fresh flowers for all occasions including 
                            Birthdays, Aniversaries, Weddings among others.
                            We also provide event planning and management solutions for corporate, weddings,
                            companies, and brands in any industry sector.
                            Shop for flowers online with us and send to your loved ones all over the country.
                        <div id="about-content">
                            <div className='about-and-features-title'>Expressions through Flowers</div>
                            When you fall short of words put a smile on their face with a beautiful flower.
                            We know the language of flowers, let us help you deliver the perfect message to
                            your loved ones.
                            <div className='about-and-features-title'>An event Planning and floral styling business</div>
                            We take care of all necessary arrangements to successfully setup your event.
                            We want to ensure that our service is an integral part of our client’s overall success.
                            Let us help you plan a top-notch event that will leave a lasting impression on your 
                            attendees.

                            <div className='about-and-features-title'>Delivery</div>
                            We have an excellent delivery team that covers the whole of Kenya currently. We 
                            have same day delivery in Nairobi,  within 2 hours. We also have next day delivery
                             via our Courier Services for all orders  outside Nairobi. All flowers 
                            are properly and carefully packaged which ensures they arrive in perfect condition
                            when you receive them. 

                            
                        </div>
                        </p>
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