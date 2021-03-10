import React,{useState} from "react";
import "./product-item.scss";
import CustomButton from "../custom-button/custom-button";
import whatsapp from '../../assets/whatsapp.svg';

const ProductItem = ({ item }) => {
  const { name, price, setprice, set, imageurl } = item;
  const [btnText, setBtnText] = useState('Contact Seller')

  return (
    <div className="product-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageurl}) ` }}
        
      ></div>
      <div className="product-footer">
        <div className="name">{name}</div>

        <div className="price">
          Ksh <span style={{color: 'black', padding:'0 3px'}}> {price}</span> each 
        </div>

        {item.setprice? 
            <div className="name"> A set of {' '} <span style={{color: 'black'}}>{set}</span> {' '}
            at Ksh {' '}<span style={{color: 'black'}}>{setprice}</span></div>
            : null
        }
        
      </div>

      <a  href="https://wa.me/254701032469" >
      <CustomButton  inverted >
        <span id='btn-text'>{btnText}</span> 
        <img  id='product-item-checkmark' height='' src={whatsapp} alt=""  style={{marginLeft:'5px'}}/>
      </CustomButton>
      </a>
    </div>
  );
};


export default ProductItem;


// ==============================================================================================
// import React,{useState} from "react";
// import "./product-item.scss";
// import CustomButton from "../custom-button/custom-button";
// import { connect } from "react-redux";
// import { addItem } from "../../redux/cart/cart.actions";
// import checkmark from '../../assets/icons/checkmark.svg';



// const ProductItem = ({ item, addItem }) => {
//   const { name, price, imageurl } = item;
//   const [btnText, setBtnText] = useState('Add to cart')

//   return (
//     <div className="product-item">
//       <div
//         className="image"
//         style={{ backgroundImage: `url(${imageurl}) ` }}
        
//       ></div>
//       <div className="product-footer">
//         <div className="name">{name}</div>
//         <div className="price">
//           Ksh {price}  
//         </div>
//       </div>
//       <CustomButton style={ btnText==='Added to cart' ? 
//        { backgroundColor:'rgb(39, 209, 39)', border: 'rgb(39, 209, 39)'} : 
//        null} inverted onClick={() => {
//         addItem(item) ;
//         setBtnText('Added to cart')
//         }}>
//         <span id='btn-text'>{btnText}</span> 
//         <img  id='product-item-checkmark' height='' src={checkmark} alt="" 
//         style={ btnText==='Added to cart' ? {opacity: '1'}: {opacity:'0'}}/>
//       </CustomButton>
      
//     </div>
//   );
// };

// const mapDispatchToProps = (dispatch) => ({
//   addItem: (item) => dispatch(addItem(item)),
// });

// export default connect(null, mapDispatchToProps)(ProductItem);