import React, { Component } from 'react';
import { FormContainer } from './contact-page.styles';
import emailjs from 'emailjs-com';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { toggleSuccessMessageOn } from '../../redux/modals/modal-actions';





class ContactPage extends Component {
      state= {                
        submitBtnText:'Send Message'

      }   
  
    
      sendEmail= (event)=>{

        const { toggleSuccessMessageOn, history } = this.props;   
          event.preventDefault();
          emailjs.sendForm(
              'service_iqi3ux5', 
              'template_yaoszq9', 
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
              <h2 style={{fontSize: '21px'}}> Contact Us</h2>        
              
              <form onSubmit={this.sendEmail} >        
  
                <FormContainer>

                    <label htmlFor='name'> <span className='label-name'>Your Name </span> 
                        <input                       
                        name='name'
                        type='text'
                        required
                                          
                        />
                    </label>

                                       
                    <label htmlFor='phone'> <span className='label-name'>Phone </span> 
                        <input                      
                        name='phone'                      
                        type='text'
                        required
                        
                        />
                    </label >
                    
                    <label htmlFor='email'><span className='label-name'>Email </span> 
                        <input                      
                        name='email'                      
                        type='email'
                        required
                        
                        />
                    </label>     
                    

                    <label htmlFor='message'><span className='label-name'>Your Message </span> 
                    <textarea name="message" ></textarea>
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

  
 
export default connect(null, mapDispatchToProps)(withRouter(ContactPage));