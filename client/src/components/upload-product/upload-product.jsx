import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { FormContainer } from './upload-product.styles';
import { uploadProduct } from '../../redux/shop/shop.actions';



class UploadNewProduct extends Component {
    state= {
        name:'',
        imageurl: '',
        price: 0,
        setprice: '',
        set: '',
        category: '',
        subcategory: '',        
        uploadText:'Upload'

      }   
      
  
      handleChange= (event)=>{
          const {name, value} = event.target;
          this.setState({...this.state, [name]: value});
         
      }
  
      handleSubmit = async (event)=>{
        event.preventDefault();
        const { name, imageurl, price, setprice, set, category, subcategory } = this.state;
        const { history, uploadProduct } = this.props;            
  
        
        uploadProduct({name, imageurl, price, setprice, set, category, subcategory }, history);
        this.setState({ name:"", imageurl:"", price:0, setprice:"", set:"", category:"", subcategory:""});
      }
  
      render() {
        const { name, imageurl, price, setprice, set, category, subcategory, uploadText } = this.state;        
        
        
        return(
          <div>
              <h2> Add New Product</h2>        
              
              <form >        
  
                <FormContainer>
                    <label htmlFor='name'> <span className='label-name'>Product Name </span> 
                        <input                      
                        name='name'                      
                        type='text'
                        value={name}
                        required
                        onChange={this.handleChange}
                        />
                    </label >
                    
                    <label htmlFor='imageurl'><span className='label-name'>Image Url </span> 
                        <input                      
                        name='imageurl'                      
                        type='text'
                        value={imageurl}
                        required
                        onChange={this.handleChange}
                        />
                    </label>
                    
                    <label htmlFor='price'> <span className='label-name'>Price in KES </span> 
                        <input                       
                        name='price'
                        type='number'                  
                        value={price}
                        required
                        onChange={this.handleChange}                  
                        />
                    </label>

                    <label htmlFor='setprice'><span className='label-name'>Set Price </span> 
                        <input                      
                        name='setprice'                      
                        type='text'
                        value={setprice}
                        required
                        onChange={this.handleChange}
                        />
                    </label>

                    <label htmlFor='set'><span className='label-name'>Set </span> 
                        <input                      
                        name='set'                      
                        type='text'
                        value={set}
                        required
                        onChange={this.handleChange}
                        />
                    </label>
                    
                    <label htmlFor='category'><span className='label-name'>Category </span> 
                        <select value={category}  name='category' onChange={this.handleChange}>
                        <option value=''>Not Selected</option>
                        <option value='funerals'>Funerals</option>
                        <option value="memorials">Memorials</option>
                        <option value="giveaways">Giveaways</option>
                        <option value="wedding">Wedding</option>
                        <option value="meetings">Meetings</option>
                        <option value="events">Events</option>
                        </select>
                    </label>

                    <label htmlFor='name'> <span className='label-name'>Subcategory </span> 
                        <input                      
                        name='subcategory'                      
                        type='text'
                        value={subcategory}
                        required
                        onChange={this.handleChange}
                        />
                    </label >                    
                    
  
                    <span >
                        <button className= {`${uploadText ==='Uploading'? 'uploading': null}`} id='btn' onClick={(event)=>{
                        this.handleSubmit(event);
                        this.setState({...this.state, uploadText:'Uploading'});
                        }}                        
                        >
                        <div>{uploadText}</div>  <div className='spin'></div>

                        </button>
                    </span>
                </FormContainer>
  
                
              </form>    
  
              
          </div>
        ); 
      }
}


  const mapDispatchToProps = (dispatch) => ({
    uploadProduct: ({name, imageurl, price, setprice, set, category, subcategory},history) =>
      dispatch(uploadProduct({name, imageurl, price, setprice, set, category, subcategory},history)),
  });
 
export default connect(null, mapDispatchToProps)(withRouter(UploadNewProduct));