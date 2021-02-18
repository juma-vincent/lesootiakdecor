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
        <div id='about' style={{boxShadow: '0.5px 2px 5px lightgrey', margin:'30px', padding: '10px', 
        borderRadius:'3px'}} >
            <h2>About Lesootia K Decor</h2>
                <p >Lesootia K Decor was started in 2020.
                </p>
        </div>
        <div className='features-wrapper'>
            <Features/>
        </div>


     
      
    </div>
     );
}
 
export default Homepage;