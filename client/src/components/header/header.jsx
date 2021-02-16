import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import CartIcon from "../cart-icon/cart-icon";
// import CartDropdown from "../cart-dropdown/cart-dropdown";
// import { selectCartHidden } from "../../redux/cart/cart.selectors";
import Option from "../option/option";
import CustomLink from "../custom-link/custom-link";
import { withRouter } from 'react-router-dom';
import MenuIcon from "../menu-icon/menu-icon";
import {ReactComponent as CartIcon} from '../../assets/cart.svg';
// import GoogleOption from '../google-signin-option/google-signin-option';
import { toggleNavigationOpen } from "../../redux/modals/modal-actions";



const Header = ({toggleNavigationOpen , match}) => {  
  return (
    
        
    <div className="header">
      <Link to="/" className="logo-container">
        {/* <img src="/images/jamanu-logo.jpg" alt="" className="logo" />          */}
      </Link>
      
      <div className="sub-header-container">
            <div className='upper-division'>      
        
                <div className="options">
                    {/* <a  href="https://wa.me/254712062516" >
                    <Option text='whatsapp'/>
                    </a> */}
                    <div onClick ={()=>toggleNavigationOpen()}>
                    <MenuIcon width='20px' height='20px' style={{marginLeft:'32px'}}/>
                    </div>
                    {/* <div id='cart-icon-small-screen'>
                      < CartIcon width='30px' height='30px' style={{marginLeft:'150%'}}/>
                    </div>                   */}
                    
                    <Link to="/" >
                    <Option text='Home'/>
                    </Link>
                    <Link to="/services">
                    <Option text='Services'/>
                    </Link>
                    <Link to="/shop">
                    <Option text='Flowers'/>
                    </Link>
                    
                    {match.isExact?
                    (<>
                    <CustomLink text='about'  >
                    <Option text='About'/>
                    </CustomLink>
                    
                    <CustomLink text='contact'>
                    <Option text='Contact'/>
                    </CustomLink>
                    </>
                    )
                    :null
                    }
                    {/* <div id='cart-icon-large-screen'>
                    < CartIcon width='25px' height='25px' style={{marginLeft:'0px'}}/>
                    </div> */}
                      
                </div>
            </div>

            <div className='lower-division'>
              {/* <GoogleOption /> */}
              
            </div> 
            
        </div>
      
    </div>
    
  );
};

const mapDispatchToProps = (dispatch) => ({
    toggleNavigationOpen: () => dispatch(toggleNavigationOpen),
  });
  
export default connect(null, mapDispatchToProps)(withRouter(Header));
