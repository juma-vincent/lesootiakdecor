import React, { useState} from "react";

import "./nav-dropdown.scss";
import { connect } from "react-redux";


import { withRouter } from "react-router-dom";



const NavDropdown = ({ items, dispatch, history }) => {
    
  return (
    <div className="nav-dropdown">
      <div className="cart-items">
        
          {items.map((item) => (
            <h4> {item}</h4>
          ))}
        
        
      </div>

      
    </div>
  );
};



export default withRouter(NavDropdown);
