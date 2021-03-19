import React from "react";
import './gallery-page.scss';
import Spinner from "../../components/spinner/spinner";
import axios from 'axios';
import WhatsAppButton from "../../components/whatsapp-button/whatsapp-button";


class GalleryPage extends React.Component {
    state ={ 
        products:null
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
         <div className="gallery-page-products-page">           
            <h1 id='gallery-page-title'>{this.props.match.params.categoryName.toUpperCase()}</h1>
            <div id='gallery-page-description'>
           
            </div>


            {/* <WhatsAppButton> Contact For Pricing </WhatsAppButton> */}
            
            <div className="gallery-page-products">            
              {this.state.products.map((product) => (

                <div key={product._id}
                className='gallery-page-image' style={{ backgroundImage: `url(${product.imageurl}) `}}>
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

// export default connect(mapStateToProps)(GalleryPage);
export default GalleryPage;
