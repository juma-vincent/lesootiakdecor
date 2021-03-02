import React,{useEffect, useState} from "react";
import './luncheon.scss';

import Spinner from "../../components/spinner/spinner";
import axios from 'axios';


class LuncheonPage extends React.Component {
    state ={ 
        products:[]
        }  

    async componentDidMount(){
    const res = await axios.post('/api/filter_product_by_subcategory',
        { subcategoryName: this.props.match.params.subcategoryName}
    );
    
    this.setState({ products: res.data});
   

    }    

    render() {         
    
    return ( 
      
      
      <>
        {this.state.products?
        (
         <div className="products-page">           
            <h1 id='luncheon-title'>LUNCHEON</h1>
            <div id='luncheon-description'>
            Talk to us about your luncheon, we'll make it memorable to your guests.
            </div>
            <div className="products">            
              {this.state.products.map((product) => (

                <div key={product._id}
                className='luncheon-page-image' style={{ backgroundImage: `url(${product.imageurl}) `}}>
                </div>

              ))}
            </div>
            
          </div>
        )
        :
        <Spinner/>
        }
      </>
    
     );
  }
}
 

export default LuncheonPage;
