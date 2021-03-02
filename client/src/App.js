import React from 'react';
import Header from './components/header/header';
import './App.scss';
import Homepage from './pages/homepage/homepage';
import { Route, Switch} from 'react-router-dom';
import Footer from './components/footer/footer';
import NavigationModal from './components/modals/navigation-modal';
import UploadNewProduct from './components/upload-product/upload-product';
import WeddingPage from './pages/wedding/wedding';
import ProposalPage from './pages/proposal/proposal';
import LuncheonPage from './pages/luncheon/luncheon';
import SubcategoryProductsPage from './pages/subcategory-products-page/subcategory-products-page';
import CategoryProductsPage from './pages/category-products-page/category-products-page';


export default ()=>{
    return (
        <div className='App'>
        <Header/>
        
        <Switch>
            <Route exact path='/' component={Homepage} />                    
            <Route path='/subcategory/:subcategoryName' component={SubcategoryProductsPage} />  
            <Route path='/admin/upload' component={UploadNewProduct} />  
            <Route path='/category/:categoryName' component={WeddingPage} />  
            <Route path='/subcategory1/:subcategoryName' component={ProposalPage} />  
            <Route path='/subcategory2/:subcategoryName' component={LuncheonPage} /> 
            <Route path='/category1/:categoryName' component={CategoryProductsPage} /> 
        </Switch>

        <Footer/>

        <NavigationModal/>

        </div>
    );
}