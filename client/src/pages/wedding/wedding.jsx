import React,{useEffect, useState} from "react";
import './wedding.scss';
import Spinner from "../../components/spinner/spinner";
import axios from 'axios';


class WeddingPage extends React.Component {
    state ={ 
        products:[]
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
         <div className="wedding-products-page">           
            <h1 id='wedding-title'>WEDDING</h1>
            <div id='wedding-description'>
            Everyone loves a wedding, seeing two become one makes our hearts full ❤️.
            Due to diffence in tastes and preference it's hard to put a price on 
            everyone's vision therefore contact us directly to allow us to give
            you the best quotations for your dream wedding. We consider your budget
             and preferences. But below are some of the magical moments we've created.
            </div>
            <div className="wedding-products">            
              {this.state.products.map((product) => (

                <div key={product._id}
                className='wedding-page-image' style={{ backgroundImage: `url(${product.imageurl}) `}}>
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
 



// const mapStateToProps = ({shop}) => ({
//   products : shop.products 
// });

// export default connect(mapStateToProps)(WeddingPage);
export default WeddingPage;
