import React from 'react';
import './whatsapp-button.scss';
import whatsapp from '../../assets/whatsapp.svg';

const WhatsAppButton = (props) => {
    return ( 
        <div>
            <a href="https://wa.me/254701032469">
                <button id='whatsapp-button' >
                    {props.children}
                    <img src={whatsapp} style={{marginLeft:'5px', height:'20px'}} alt=""/>
                </button>
           </a>
      </div>
     );
}
 
export default WhatsAppButton;