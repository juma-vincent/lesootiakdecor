import React from "react";
import "./other.scss";
import ProductItem from "../../components/product-item/product-item";
import Spinner from "../../components/spinner/spinner";
import axios from 'axios';


class SubcategoryProductsPage extends React.Component {
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
 


export default SubcategoryProductsPage;
