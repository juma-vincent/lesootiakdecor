import React from 'react';
import './drop-down-item.scss';

const DropDownItem = (props) => {
    return ( 
        <div className='menu-item' onClick={()=> props.onIconClick()} >
            

             <span >{props.leftIcon}  </span>

              {props.children}

             <span className='icon-right'>{props.rightIcon} </span>
             
        </div>
     );
}
 
export default DropDownItem;