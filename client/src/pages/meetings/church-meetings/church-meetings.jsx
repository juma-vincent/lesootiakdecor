import React from "react";
import "./church-meetings.scss";
import axios from 'axios';
import ProductItem from "../../../components/product-item/product-item";
import Spinner from "../../../components/spinner/spinner";


class ChurchMeetingsPage extends React.Component {
  state ={
    products: null
  }  

  async componentDidMount(){
    const res = await axios.post('/api/filter_product_by_category',
        { categoryName: this.props.match.params.categoryName}
    );
    
    this.setState({ products: res.data});
    

    } 

  render() { 
    
    return ( 
      
      
      <>
        {this.state.products?
        (
         <div className="meetings-products-page">           
            <h1 style={{textAlign: 'center', padding:'0 15px'}}>
              CHURCH {this.props.match.params.categoryName.toUpperCase()} 
            </h1>

            <div id='meetings-description'>
            Regardless of the causes of our worst hurts and heartaches, 
            the ultimate source of relief is the same, spirituality.
            
            </div>
            <div id='meetings-description'>
            Contact us to help you with it.
            
            </div>
            
         

            <div className="meetings-products">            
              {this.state.products.map((product) => (
                <ProductItem
                key={product._id}
                className="meetings-product-item"                
                item={product}
                />
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
 

export default ChurchMeetingsPage;
