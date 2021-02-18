import React from 'react';
import './services-page.scss';
import Spinner from '../../components/spinner/spinner'
import ServicesSlider from '../../components/services-slider/services-slider';

const ServicesPage = () => {
    return ( 
    <div className='services-page-container'>
        < ServicesSlider autoPlay={6}/>
        <div className='events-planning-container'>
            <h3 className='events-planning-title'> Events we Organize</h3>
            <div className='events-planning-content'>
                We carry out planning on birthdays, weddings, at a friendly price.
                
            </div>
            <div>
                {/* <Spinner/> */}
                
            </div>
            
        </div>

    </div> 
    );
}
 
export default ServicesPage;