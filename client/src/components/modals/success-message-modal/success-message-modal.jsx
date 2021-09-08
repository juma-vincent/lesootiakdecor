import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './success-message-modal.scss';

// import { ReactComponent as Xmark} from '../../assets/icons/error.svg'
import { ReactComponent as CheckMark} from '../../../assets/checkmark2.svg'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleSuccessMessageOn } from '../../../redux/modals/modal-actions';
// import { toggleSuccessMessageOn } from '../../redux/modals/modal-actions';
// import { Link } from 'react-router-dom';
// import CustomLink from '../custom-link/custom-link';
// import SmallScreenDropDownMenu from '../smallscreen-drop-down/smallscreen-drop-down';




const SuccessMessageModal = ({isSuccessModalOpen, toggleSuccessMessageOn, match}) => {
    
    return ReactDOM.createPortal(
        <>
         {isSuccessModalOpen? 
         (
         <div className='modal-wrapper' 
         onClick={() => toggleSuccessMessageOn()} 
         >  

          <div onClick={(e) => e.stopPropagation()}>
              
          </div>              
             
                <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                    <div className='check-mark'>
                        <CheckMark fill='green' height='42px' width='52px' onClick={() => toggleSuccessMessageOn()}/> 
                    </div>
                    <div className='modal-header'>
                    Thank you for your interest!
                    </div>

                    <div className='modal-text'>
                     Your message has been received and we will get back to you shortly.
                    </div>

                    <div >
                     <button className='success-button' onClick={() => toggleSuccessMessageOn()}>OK</button>
                    </div>
                    
               </div>
                

            </div>)
         :
          null}
            

        </>,
        document.querySelector('#success-message-modal')
    )
}

const mapStateToProps = ({successModal}) => ({
    isSuccessModalOpen: successModal.successMessageOn   
  });

const mapDispatchToProps = (dispatch) => ({
  toggleSuccessMessageOn: () => dispatch(toggleSuccessMessageOn),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SuccessMessageModal));


