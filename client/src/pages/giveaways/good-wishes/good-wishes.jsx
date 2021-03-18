import React from "react";
import "./good-wishes.scss";
import axios from 'axios';
import ProductItem from "../../../components/product-item/product-item";
import Spinner from "../../../components/spinner/spinner";


class GoodWishesPage extends React.Component {
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
              {this.props.match.params.subcategoryName.split('-').join(' ').toUpperCase()}
            </h1>

            <h2 id='good-wishes-title'>Love ❤️🧡💛💚💙💜🖤🤍🤎wins 👑🏆</h2>

            <div id='good-wishes-description'>
             
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
 


export default GoodWishesPage;
