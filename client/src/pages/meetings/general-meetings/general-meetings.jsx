import React from "react";
import "./general-meetings.scss";
import axios from 'axios';
import ProductItem from "../../../components/product-item/product-item";
import Spinner from "../../../components/spinner/spinner";



class GeneralMeetingsPage extends React.Component {
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
              GENERAL {this.props.match.params.categoryName.toUpperCase()} 
            </h1>

            <div id='meetings-description'>
            Who said meetings have to be boring and blunt.
            Book with us and let us bring life and color to it.
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
 

export default GeneralMeetingsPage;
