import React,{useEffect, useState} from "react";
import "./products-page.scss";
import { connect } from "react-redux";
import ProductItem from "../../components/product-item/product-item";
import Spinner from "../../components/spinner/spinner";


class ProductsPage extends React.Component {
  state ={products: [{id: 1, name:'Flower1', price: 200}, {id: 2, name:'Flower2', price: 300}]}  
  render() { 
    
    return ( 
      
      
      <>
        {this.state.products?
        (
         <div className="products-page">           
            <h1 style={{textAlign: 'start', padding:'0 15px'}}>Flowers Page</h1>
            <div className="products">            
              {this.state.products.map((product) => (
                <ProductItem
                key={product.id}
                className="product-item"                
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
 



// const mapStateToProps = ({shop}) => ({
//   products : shop.products 
// });

// export default connect(mapStateToProps)(ProductsPage);
export default ProductsPage;
