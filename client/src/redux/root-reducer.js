import { combineReducers } from 'redux';
import NavigationToggleReducer from './modals/modals.reducer';


const rootReducer = combineReducers({
    navtoggle: NavigationToggleReducer
})



export default rootReducer;

//store.js
// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import { persistStore } from "redux-persist";
// import rootReducer from "./root-reducer";
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "./root-saga";

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// sagaMiddleware.run(rootSaga);
// export const persistor = persistStore(store);

// export default { store, persistor };



// rootreducer

// import { combineReducers } from "redux";
// import userReducer from "./user/user.reducer";
// import { cartReducer } from "./cart/cart.reducer";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import directoryReducer from "./directory/directory.reducer";
// import shopReducer from "./shop/shop.reducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };

// const rootReducer = combineReducers({
//   user: userReducer,
//   cart: cartReducer,
//   directory: directoryReducer,
//   shop: shopReducer,
// });

// export default persistReducer(persistConfig, rootReducer);

