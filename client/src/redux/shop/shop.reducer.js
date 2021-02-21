import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_CATEGORY } from "./shop.action.types"

const INITIAL_STATE ={
    products: []    
}

const shopReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return {...state, products: action.payload};
        case FETCH_PRODUCTS_BY_CATEGORY:
            return { ...state, products: action.payload}            
        default:
            return state;   
    }
}

export default shopReducer;