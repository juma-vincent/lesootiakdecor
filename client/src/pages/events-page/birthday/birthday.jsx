import React from "react";
import "./birthday.scss";
import axios from 'axios';
import ProductItem from "../../../components/product-item/product-item";
import Spinner from "../../../components/spinner/spinner";


class BirthdayPage extends React.Component {
  state ={
    products: null
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
         <div className="subcategory-products-page">           
            <h1 style={{textAlign: 'center', padding:'0 15px'}}>
              {this.props.match.params.subcategoryName.toUpperCase()}
            </h1>

            <h2 id='birthday-title'>Expressions through Flowers 🌹</h2>

            <div id='birthday-description'>
            Allow us to bring visions of your events to life,
            We promise to give you the best
            Kindly contact us for any inquiries. 
            </div>

            <div className="subcategory-products">            
              {this.state.products.map((product) => (
                <ProductItem
                key={product._id}
                className="subcategory-product-item"                
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
 


export default BirthdayPage;
