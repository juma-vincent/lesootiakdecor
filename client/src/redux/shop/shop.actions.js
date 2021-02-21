import axios from 'axios';
import { ADD_NEW_CATEGORY, ADD_NEW_PRODUCT, FETCH_PRODUCTS, FETCH_PRODUCTS_BY_CATEGORY } from './shop.action.types';

export const addNewProduct = ({name, price, imageurl, category}) => async dispatch=>{
   const res = await axios.post('/api/new_product', {
     name,
     imageurl,
     price,
     category
   });

   dispatch(fetchAllProducts());
}

export const addNewCategory = ({name, imageurl}) => async dispatch =>{
    const res = await axios.post('/api/new_category', {
        name, 
        imageurl
    });

    dispatch(fetchAllProducts());
}

export const fetchAllProducts = () => async dispatch=>{
    const res = await axios.get('/api/all_products');
    dispatch({ type: FETCH_PRODUCTS, payload: res.data});
}
 
export const fetchProductsByCategory = ({categoryName}) => async dispatch =>{
    const res= await axios.post('/api/category_products', {
        categoryName
    });
    dispatch({ type: FETCH_PRODUCTS_BY_CATEGORY, payload: res.data})
}


