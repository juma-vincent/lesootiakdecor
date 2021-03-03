import React, { useState } from 'react';
import DropDownItem from '../drop-down-item/drop-down-item';
import { ReactComponent as RightArrow} from '../../assets/icons/right-arrow.svg';
import { ReactComponent as LeftArrow} from '../../assets/icons/left-arrow-10.svg';
import './drop-down-menu.scss';
import {withRouter} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { toggleOptionDropdownOpen } from '../../redux/modals/modal-actions';


const DropDownMenu = ({history, toggleOptionDropdownOpen}) => {
    const [activeMenu, setActiveMenu] = useState('main');
    
    const handleIconClick = (path)=>{
        activeMenu && setActiveMenu(path); // if activeMenu is truthy, setActiveMenu()
    }

    
    return ( 
        <div className='drop-down-menu'>
            
            <CSSTransition in={activeMenu === 'main'} unmountOnExit
             timeout={1} 
             classNames='menu-primary'
            
             >

            <div className="menu">                  

                  <DropDownItem  onIconClick={()=>{
                      history.push('/funerals');
                      toggleOptionDropdownOpen()
                    }}>Funerals/Burials</DropDownItem>

                  <DropDownItem  onIconClick={()=>{
                      history.push('/memorials');
                      toggleOptionDropdownOpen()
                    }}>Memorials</DropDownItem>
                    
                  <DropDownItem
                      rightIcon={<RightArrow fill='black' height='13px' width='16px'/>}
                      onIconClick={()=> handleIconClick('giveaways')}
                  >
                      Giveaways
                  </DropDownItem>

                  <DropDownItem  
                      rightIcon={<RightArrow fill='black' height='13px' width='16px'/>}
                      // leftIcon={<LeftArrow fill='black' height='14px' width='14px'/>}
                      onIconClick={ ()=> handleIconClick('wedding')}                
                  >
                     Wedding
                  </DropDownItem>

                  <DropDownItem
                      rightIcon={<RightArrow fill='black' height='13px' width='16px'/>}
                      onIconClick={()=> handleIconClick('meetings')}
                  >
                      Meetings
                  </DropDownItem>

                  <DropDownItem
                      rightIcon={<RightArrow fill='black' height='13px' width='16px'/>}
                      onIconClick={()=> handleIconClick('events')}
                  >
                      Events
                  </DropDownItem>
            </div>

          </CSSTransition>
{/* ---------------------------------------------------------------------Giveaways */}
          <CSSTransition in={activeMenu === 'giveaways'} 
          unmountOnExit timeout={1} classNames='menu-secondary'>

              <div className="menu">
                  
                  <DropDownItem  
                        leftIcon={<LeftArrow fill='black' height='22px' width='24px'/>}
                        onIconClick={()=>handleIconClick('main')}
                  >
                     <h4 style={{marginLeft:'20px', hover:'unset'}}>Giveaways</h4>
                  </DropDownItem>

                  <DropDownItem  
                      onIconClick={()=>{
                      history.push('/love');
                      toggleOptionDropdownOpen()
                      }}
                    >Love 
                  </DropDownItem>

                    <DropDownItem  
                      onIconClick={()=>{
                      history.push('/good-wishes');
                      toggleOptionDropdownOpen()
                      }}
                    >Good Wishes
                    </DropDownItem>
                  
              </div>

          </CSSTransition>

{/* ---------------------------------------------------------------------Weddings */}
          <CSSTransition in={activeMenu === 'wedding'} 
          unmountOnExit timeout={1} classNames='menu-secondary'>

              <div className="menu">
                  
                  <DropDownItem  
                        leftIcon={<LeftArrow fill='black' height='22px' width='24px'/>}
                        onIconClick={()=>handleIconClick('main')}                  
                  >
                      <h4 style={{marginLeft:'20px', hover:'unset'}}>Wedding</h4>
                  </DropDownItem>

                  <DropDownItem  
                            onIconClick={()=>{
                            history.push('/category/wedding');
                            toggleOptionDropdownOpen()
                            }} 
                   > Wedding Planning 
                  </DropDownItem>

                  <DropDownItem  
                      onIconClick={()=>{
                      history.push('/category/wedding');
                      toggleOptionDropdownOpen()
                      }}
                    > Floral styling
                  </DropDownItem>
                  
              </div>

          </CSSTransition>

          {/* ---------------------------------------------------------------------Meetings */}
          <CSSTransition in={activeMenu === 'meetings'} 
          unmountOnExit timeout={1} classNames='menu-secondary'>

              <div className="menu">
                  
                  <DropDownItem  
                        leftIcon={<LeftArrow fill='black' height='22px' width='24px'/>}
                        onIconClick={()=>handleIconClick('main')}                  
                  >
                      <h4 style={{marginLeft:'20px', hover:'unset'}}>Meetings</h4>
                  </DropDownItem>

                  <DropDownItem  
                      onIconClick={()=>{
                      history.push('/category2/meetings');
                      toggleOptionDropdownOpen()
                      }} 
                    > Churches 
                  </DropDownItem>

                  <DropDownItem  
                      onIconClick={()=>{
                      history.push('/category3/meetings');
                      toggleOptionDropdownOpen()
                      }}
                    > General Meetings
                  </DropDownItem>
                  
              </div>

          </CSSTransition>


          {/* ---------------------------------------------------------------------Events */}
          <CSSTransition in={activeMenu === 'events'} 
          unmountOnExit timeout={1} classNames='menu-secondary'>

              <div className="menu">
                  
                  <DropDownItem  
                        leftIcon={<LeftArrow fill='black' height='22px' width='24px'/>}
                        onIconClick={()=>handleIconClick('main')}                  
                  >
                      <h4 style={{marginLeft:'20px', hover:'unset'}}>Events</h4>
                  </DropDownItem>

                  <DropDownItem  
                            onIconClick={()=>{
                            history.push('/subcategory4/baby-shower');
                            toggleOptionDropdownOpen();
                            }} 
                  > Baby Shower 
                  </DropDownItem>

                  <DropDownItem  
                            onIconClick={()=>{
                            history.push('/subcategory1/proposal');
                            toggleOptionDropdownOpen()
                            }}
                    > Proposal
                   </DropDownItem>

                  <DropDownItem  
                            onIconClick={()=>{
                            history.push('/subcategory3/birthday');
                            toggleOptionDropdownOpen()
                            }}
                    > Birthday
                  </DropDownItem>

                  <DropDownItem  
                            onIconClick={()=>{
                            history.push('/subcategory2/luncheon');
                            toggleOptionDropdownOpen()
                            }}
                    > Luncheon
                  </DropDownItem>  

                    <DropDownItem  
                            onIconClick={()=>{
                            history.push('/other');
                            toggleOptionDropdownOpen()
                            }}
                    > Other 
                  </DropDownItem>                 
                  
              </div>

          </CSSTransition>

            

        </div>
     );
}



const mapDispatchToProps = (dispatch) => ({
    toggleOptionDropdownOpen: () => dispatch(toggleOptionDropdownOpen),
});
 
export default connect(null, mapDispatchToProps)(withRouter(DropDownMenu));