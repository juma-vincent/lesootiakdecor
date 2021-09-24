import React, { Component } from 'react';
import { FormContainer } from './booking-page.styles';
import emailjs from 'emailjs-com';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { toggleSuccessMessageOn } from '../../redux/modals/modal-actions';

// import { FormContainer } from './upload-product.styles';
// import { uploadProduct } from '../../redux/shop/shop.actions';





class EventBooking extends Component {
      state= {                
        submitBtnText:'Book Now'

      }   
  
    
      sendEmail= (event)=>{

        const { toggleSuccessMessageOn, history } = this.props;   
          event.preventDefault();
          emailjs.sendForm(
              'service_iqi3ux5', 
              'template_qwu1iy7', 
              event.target,
              'user_QmHFtyrlogy5xgJtaCrYY'
              ).then(res=>{                  
                  toggleSuccessMessageOn();
                  history.push('/')
                
                  
              }).catch(error=>history.push('/')

              );
               
      }
     
  
      render() {
        const { submitBtnText } = this.state;  
                
        return(
          <div>
              <h2 style={{fontSize: '21px'}}> Book An Event</h2>        
              
              <form onSubmit={this.sendEmail} >        
  
                <FormContainer>

                                       
                    <label htmlFor='phone'> <span className='label-name'>Phone </span> 
                        <input                      
                        name='phone'                      
                        type='text'
                        // value={name}
                        required
                        
                        />
                    </label >
                    
                    <label htmlFor='email'><span className='label-name'>Email </span> 
                        <input                      
                        name='email'                      
                        type='email'
                        // value={imageurl}
                        required
                        
                        />
                    </label>
                    
                    <label htmlFor='population'> <span className='label-name'>Number of Guests </span> 
                        <input                       
                        name='population'
                        type='number'                  
                        // value={price}
                        required
                                          
                        />
                    </label>

                    <label htmlFor='location'><span className='label-name'>Event Location </span> 
                        <input                      
                        name='location'                      
                        type='text'
                        // value={location}
                        required
                        
                        />
                    </label>

                    
                    <label htmlFor='date'><span className='label-name'>Event Date </span> 
                        <input                      
                        name='date'                      
                        type='text'
                        placeholder='DD/MM/YYYY'
                        required                       
                        
                        />
                    </label>

                    <label htmlFor='details'><span className='label-name'>Event Details </span> 
                    <textarea name="details" ></textarea>
                    </label>
                    
                    
                                       
                    
  
                    <span >
                        <input onClick={()=> this.setState({...this.state, submitBtnText:'Sending'})}
                        className= {`${submitBtnText ==='Sending'? 'uploading': null}`} 
                        id='btn' type='submit' value={submitBtnText}/>
                       
                    </span>
                </FormContainer>
  
                
              </form>    
  
              
          </div>
        ); 
      }
}

const mapDispatchToProps = (dispatch) => ({
    toggleSuccessMessageOn: () =>
      dispatch(toggleSuccessMessageOn),
  });

  
 
export default connect(null, mapDispatchToProps)(withRouter(EventBooking));