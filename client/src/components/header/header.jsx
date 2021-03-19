import React, { isValidElement } from "react";
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
import { ReactComponent as DownArrow} from '../../assets/icons/down-arrow11.svg';
// import GoogleOption from '../google-signin-option/google-signin-option';
import { toggleNavigationOpen } from "../../redux/modals/modal-actions";
import DropDownMenu from "../drop-down-menu/drop-down-menu";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";




const Header = ({toggleNavigationOpen , cartIsOpen, match}) => {    

  return (
            
    <div className="header">
      <Link to="/" className="logo-container">
        <img src="/images/logo-1.png" alt="" className="logo" />         
        
      </Link>
      
      <div className="sub-header-container">
            <div className='upper-division'>      
        
                <div className="options">
                    {/* <a  href="https://wa.me/254712062516" >
                    <Option text='whatsapp'/>
                    </a> */}

                    <div onClick ={()=>toggleNavigationOpen()}>
                    <MenuIcon width='20px' height='20px'/>
                    </div>  
                    
                    {/* <div id='cart-icon-small-screen'>
                      < CartIcon />
                    </div>    */}

                    <Link to="/" >
                    <Option text='Home'/>
                    </Link>                    
                    <span>
                      <Option text='Occasions' icon={<DownArrow fill='gray' height='18px' width='14px'
                      style={{marginBottom:'-5px'}} 
                      />}>
                        <DropDownMenu />
                      </Option>
                    </span>
                    
                    
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
                    <Link to='/category5/gallery'>
                    <Option text='Gallery'/>
                    </Link>
                                           
                </div>
            </div>

            <div className='lower-division'>
              {/* <GoogleOption /> */}
              
            </div> 
            
        </div>

        {/* {cartIsOpen? <CartDropdown/> : null} */}
      
    </div> 
    
  );
};

const mapStateToProps = state =>({
  cartIsOpen: state.cart.cartIsOpen
});

const mapDispatchToProps = (dispatch) => ({
    toggleNavigationOpen: () => dispatch(toggleNavigationOpen),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
