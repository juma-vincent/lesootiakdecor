import React from 'react';
import './services-page.scss';
import Spinner from '../../components/spinner/spinner'

const ServicesPage = () => {
    return ( 
    <div className='services-page-container'>
        <div className='events-planning-container'>
            <h3 className='events-planning-title'>About Events</h3>
            <div className='events-planning-content'>
                I organize events such as weddings, birthdays and so on.
                I organize events such as weddings, birthdays and so on.
                I organize events such as weddings, birthdays and so on.
                I organize events such as weddings, birthdays and so on.
                I organize events such as weddings, birthdays and so on.
                I organize events such as weddings, birthdays and so on.
                
            </div>
            <div>
                <Spinner/>
                
            </div>
            
        </div>

    </div> 
    );
}
 
export default ServicesPage;