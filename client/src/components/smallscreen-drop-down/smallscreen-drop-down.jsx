import React, { useState} from "react";
import "./smallscreen-drop-down.scss";
import { connect } from "react-redux";
import { ReactComponent as DownArrow} from '../../assets/icons/down-arrow11.svg';
import { ReactComponent as LeftArrow} from '../../assets/icons/left-arrow-10.svg';


import { CSSTransition } from 'react-transition-group';


import { withRouter } from "react-router-dom";
import DropDownItem from "../drop-down-item/drop-down-item";



const SmallScreenDropDownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  
  const handleIconClick = (path)=>{
      activeMenu && setActiveMenu(path); // if activeMenu is truthy, setActiveMenu()
  }

  return ( 
      <div className='smallscreen-drop-down-menu'>
          
          <CSSTransition in={activeMenu === 'main'} unmountOnExit
           timeout={1} 
           classNames='menu-primary'
          
           >

              <div className="menu">
                  <DropDownItem>Home</DropDownItem>
                  <DropDownItem>Funerals/Burials</DropDownItem>
                  <DropDownItem>Memorials</DropDownItem>
                  <DropDownItem
                      rightIcon={<DownArrow fill='black' height='13px' width='14px'/>}
                      onIconClick={()=> handleIconClick('giveaways')}
                  >
                      Giveaways
                  </DropDownItem>

                  <DropDownItem  
                      rightIcon={<DownArrow fill='black' height='13px' width='14px'/>}
                      // leftIcon={<LeftArrow fill='black' height='14px' width='14px'/>}
                      onIconClick={ ()=> handleIconClick('wedding')}                
                  >
                     Wedding
                  </DropDownItem>

                  <DropDownItem
                      rightIcon={<DownArrow fill='black' height='13px' width='14px'/>}
                      onIconClick={()=> handleIconClick('meetings')}
                  >
                      Meetings
                  </DropDownItem>

                  <DropDownItem
                      rightIcon={<DownArrow fill='black' height='13px' width='14px'/>}
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
                  leftIcon={<LeftArrow fill='black' height='18px' width='18px'/>}
                  onIconClick={()=>handleIconClick('main')}
                  >
                      <h4 style={{marginLeft:'20px', hover:'unset'}}>Giveaways</h4>
                  </DropDownItem>
                  <DropDownItem >Love Good Wishes</DropDownItem>
                  
              </div>

          </CSSTransition>

{/* ---------------------------------------------------------------------Weddings */}
          <CSSTransition in={activeMenu === 'wedding'} 
          unmountOnExit timeout={1} classNames='menu-secondary'>

              <div className="menu">
                  
                  <DropDownItem  
                  leftIcon={<LeftArrow fill='black' height='18px' width='18px'/>}
                  onIconClick={()=>handleIconClick('main')}
                  
                  >
                      <h4 style={{marginLeft:'20px', hover:'unset'}}>Wedding</h4>
                  </DropDownItem>
                  <DropDownItem > Wedding Planning </DropDownItem>
                  <DropDownItem> Floral styling</DropDownItem>
                  
              </div>

          </CSSTransition>

          {/* ---------------------------------------------------------------------Meetings */}
          <CSSTransition in={activeMenu === 'meetings'} 
          unmountOnExit timeout={1} classNames='menu-secondary'>

              <div className="menu">
                  
                  <DropDownItem  
                  leftIcon={<LeftArrow fill='black' height='18px' width='18px'/>}
                  onIconClick={()=>handleIconClick('main')}
                  
                  >
                      <h4 style={{marginLeft:'20px', hover:'unset'}}>Meetings</h4>
                  </DropDownItem>
                  <DropDownItem > Churches </DropDownItem>
                  <DropDownItem> General Meetings</DropDownItem>
                  
              </div>

          </CSSTransition>


          {/* ---------------------------------------------------------------------Events */}
          <CSSTransition in={activeMenu === 'events'} 
          unmountOnExit timeout={1} classNames='menu-secondary'>

              <div className="menu">
                  
                  <DropDownItem  
                  leftIcon={<LeftArrow fill='black' height='18px' width='18px'/>}
                  onIconClick={()=>handleIconClick('main')}
                  
                  >
                      <h4 style={{marginLeft:'20px', hover:'unset'}}>Events</h4>
                  </DropDownItem>
                  <DropDownItem > Baby Shower </DropDownItem>
                  <DropDownItem> Proposal</DropDownItem>
                  <DropDownItem> Birthday</DropDownItem>
                  <DropDownItem> Luncheon</DropDownItem>                  
                  
              </div>

          </CSSTransition>



          

      </div>
   );
}

export default SmallScreenDropDownMenu;
