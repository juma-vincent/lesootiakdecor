import React from "react";
import "./memorials-page.scss";
import ProductItem from "../../components/product-item/product-item";
import Spinner from "../../components/spinner/spinner";
import axios from 'axios';


class MemorialsPage extends React.Component {
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
         <div className="memorials-page">           
            <h1 style={{textAlign: 'center', padding:'0 15px'}}>
              {this.props.match.params.categoryName.toUpperCase()} 
            </h1>

            
             <div id='memorials-description'> 
              We talk about them not because we are stuck or we haven't moved on but we talk about
              them because we are theirs and they are ours and no passage of time can change that.
             </div>

            <div className="memorials-products">            
              {this.state.products.map((product) => (
                <ProductItem
                key={product._id}
                className="memorials-product-item"                
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
 

export default MemorialsPage;
