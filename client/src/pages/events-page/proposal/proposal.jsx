import React from "react";
import './proposal.scss';
import Spinner from "../../../components/spinner/spinner";
import axios from 'axios';
import WhatsAppButton from "../../../components/whatsapp-button/whatsapp-button";


class ProposalPage extends React.Component {
    state ={ 
        products:null
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
         <div className="proposal-products-page">           
            <h1 id='proposal-title'>PROPOSAL</h1>

            <h2 id='proposal-title'>Expressions through Flowers 🌹</h2>

            <div id='proposal-description'>
            Allow us to bring visions of your events to life,
            We promise to give you the best
            Kindly contact us for any inquiries. 
            </div>

            <div id='proposal-description'>
            Talk to us about your proposal, we'll make it worth her while.
            </div>

            {/* <div style={{fontSize:'15px', marginTop: '20px'}} >
              Starting from Ksh <span style={{color: 'black', fontWeight:'bold'}}>10,000</span>
            </div> */}

            <WhatsAppButton> Contact For Pricing </WhatsAppButton>

            <div className="proposal-products">            
              {this.state.products.map((product) => (

                <div key={product._id}
                className='proposal-page-image' style={{ backgroundImage: `url(${product.imageurl}) `}}>
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
 

export default ProposalPage;
