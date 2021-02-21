import React, { useState} from "react";
import "./smallscreen-drop-down.scss";
import { connect } from "react-redux";
import { ReactComponent as LeftArrow} from '../../assets/icons/left-arrow-10.svg';
import { ReactComponent as DownArrow} from '../../assets/icons/down-arrow11.svg';


import { CSSTransition } from 'react-transition-group';


import { withRouter } from "react-router-dom";
import DropDownItem from "../drop-down-item/drop-down-item";



const SmallScreenDropDownMenu = ({history, handleToggle}) => {
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
                  <DropDownItem  onIconClick={()=>{
                      history.push('/');
                      handleToggle()
                    }}>Home</DropDownItem>
                  <DropDownItem  onIconClick={()=>{
                      history.push('/funerals');
                      handleToggle()
                    }}>Funerals/Burials</DropDownItem>
                  <DropDownItem  onIconClick={()=>{
                      history.push('memorials');
                      handleToggle()
                    }}>Memorials</DropDownItem>
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
                  <DropDownItem  onIconClick={()=>{
                      history.push('/love-good-wishes');
                      handleToggle()
                    }}>Love Good Wishes</DropDownItem>
                  
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
                  <DropDownItem  onIconClick={()=>{
                      history.push('/Wedding-planning');
                      handleToggle()
                    }} > Wedding Planning </DropDownItem>
                  <DropDownItem  onIconClick={()=>{
                      history.push('/floral-styling');
                      handleToggle()
                    }}> Floral styling</DropDownItem>
                  
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
                  <DropDownItem  onIconClick={()=>{
                      history.push('/churches');
                      handleToggle()
                    }} > Churches </DropDownItem>
                  <DropDownItem  onIconClick={()=>{
                      history.push('/general-meetings');
                      handleToggle()
                    }}> General Meetings</DropDownItem>
                  
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
                  <DropDownItem  onIconClick={()=>{
                      history.push('/baby-shower');
                      handleToggle()
                    }} > Baby Shower </DropDownItem>
                  <DropDownItem  onIconClick={()=>{
                      history.push('/proposal');
                      handleToggle()
                    }}> Proposal</DropDownItem>
                  <DropDownItem  onIconClick={()=>{
                      history.push('/birthday');
                      handleToggle()
                    }}> Birthday</DropDownItem>
                  <DropDownItem  onIconClick={()=>{
                      history.push('luncheon');
                      handleToggle()
                    }}> Luncheon</DropDownItem>                  
                  
              </div>

          </CSSTransition>



          

      </div>
   );
}

export default withRouter(SmallScreenDropDownMenu);
