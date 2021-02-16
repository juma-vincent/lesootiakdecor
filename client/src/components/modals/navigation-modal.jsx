import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './navigation-modal.scss';
import { ReactComponent as Xmark} from '../../assets/icons/error.svg'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleNavigationOpen } from '../../redux/modals/modal-actions';
import { Link } from 'react-router-dom';
import CustomLink from '../custom-link/custom-link';


const NavigationModal = ({isNavtoggleOpen, toggleNavigationOpen, match}) => {
    
    return ReactDOM.createPortal(
        <>
         {isNavtoggleOpen? 
         (
         <div className='modal-wrapper' onClick={() => toggleNavigationOpen()}>                
             
                <div className='modal-title' onClick={(e) => e.stopPropagation()}>
                    <div className='x-mark'>
                        <Xmark fill='gray' height='22px' onClick={() => toggleNavigationOpen()}/> 
                    </div>

                    <ul>
                        
                        <li onClick={() => toggleNavigationOpen()}><Link to='/'>Home</Link></li>                   
                        <li onClick={() => toggleNavigationOpen()}><Link to='/services'>Services</Link></li>                   
                        <li onClick={() => toggleNavigationOpen()}><Link to='/shop'>FLowers</Link></li> 
                        {match.isExact?
                                <>
                                <li>
                                    <CustomLink text='about'>
                                        <div onClick={() => toggleNavigationOpen()}>
                                        About
                                        </div>
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink text='contact'>
                                        <div onClick={() => toggleNavigationOpen()}>
                                            Contact
                                        </div>
                                    </CustomLink>
                                </li>
                                </>
                            :
                            null        
                        }                       
                        
                        
                    </ul>
                    
               </div>
                {/* <div className='modal-content'>
                    
                </div> */}

            </div>)
         :
          null}
            

        </>,
        document.querySelector('#navigation-modal')
    )
}

const mapStateToProps = ({navtoggle}) => ({
    isNavtoggleOpen: navtoggle.navIsOpen    
  });

const mapDispatchToProps = (dispatch) => ({
  toggleNavigationOpen: () => dispatch(toggleNavigationOpen),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationModal));