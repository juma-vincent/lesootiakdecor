import React from "react";
import "./funerals-page.scss";
import ProductItem from "../../components/product-item/product-item";
import Spinner from "../../components/spinner/spinner";
import axios from 'axios';


class FuneralsPage extends React.Component {
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
         <div className="funerals-page">           
            <h1 style={{textAlign: 'center', padding:'0 15px'}}>
              {this.props.match.params.categoryName.toUpperCase()} 
            </h1>

            <div id="funerals-description">Those we love don't go away.
                  They walk beside us, unseen, unheard but always near
                  Still loved, still missed, still cherished.
            </div>
            

            <div className="category-products">            
              {this.state.products.map((product) => (
                <ProductItem
                key={product._id}
                className="category-product-item"                
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
 

export default FuneralsPage;
