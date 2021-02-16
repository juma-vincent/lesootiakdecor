import { FETCH_PRODUCTS } from "./shop.action.types"

const INITIAL_STATE ={
    products: []
}

const shopReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return {...state, products: action.payload}
            
        default:
            return state;   
    }
}