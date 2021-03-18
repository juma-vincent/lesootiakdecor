import React from 'react';
import Header from './components/header/header';
import './App.scss';
import Homepage from './pages/homepage/homepage';
import { Route, Switch} from 'react-router-dom';
import Footer from './components/footer/footer';
import NavigationModal from './components/modals/navigation-modal';
import UploadNewProduct from './components/upload-product/upload-product';
import WeddingPage from './pages/wedding/wedding';
import SubcategoryProductsPage from './pages/subcategory-products-page/subcategory-products-page';
import ProposalPage from './pages/events-page/proposal/proposal';
import BirthdayPage from './pages/events-page/birthday/birthday';
import BabyShowerPage from './pages/events-page/baby-shower/baby-shower';
import LuncheonPage from './pages/events-page/luncheon/luncheon';
import ChurchMeetingsPage from './pages/meetings/church-meetings/church-meetings';
import GeneralMeetingsPage from './pages/meetings/general-meetings/general-meetings';
import OtherPage from './pages/events-page/other/other';
import checkoutPage from './pages/checkout-page/checkout-page';
import FuneralsPage from './pages/funerals-page/funerals-page';
import MemorialsPage from './pages/memorials-page/memorials-page';
import GoodWishesPage from './pages/giveaways/good-wishes/good-wishes';
import LoveFlowersPage from './pages/giveaways/love-flowers/love-flowers';



export default ()=>{
    return (
        <div className='App'>
        <Header/>
        
        <Switch>
            <Route exact path='/' component={Homepage} />  
            <Route exact path='/checkout' component={checkoutPage} />                  
            <Route path='/subcategory/:subcategoryName' component={SubcategoryProductsPage} />  
            <Route path='/admin/upload' component={UploadNewProduct} />  
            <Route path='/category/:categoryName' component={WeddingPage} />  
            <Route path='/subcategory1/:subcategoryName' component={ProposalPage} />  
            <Route path='/subcategory2/:subcategoryName' component={LuncheonPage} /> 
            <Route path='/subcategory3/:subcategoryName' component={BirthdayPage} /> 
            <Route path='/subcategory4/:subcategoryName' component={BabyShowerPage}/> 
            <Route path='/subcategory5/:subcategoryName' component={GoodWishesPage}/>
            <Route path='/subcategory6/:subcategoryName' component={LoveFlowersPage}/>
            <Route path='/category1/:categoryName' component={FuneralsPage} /> 
            <Route path='/category4/:categoryName' component={MemorialsPage} /> 
            <Route path='/category2/:categoryName' component={ChurchMeetingsPage} /> 
            <Route path='/category3/:categoryName' component={GeneralMeetingsPage} /> 
            <Route path='/other' component={OtherPage} /> 
        </Switch>

        <Footer/>

        <NavigationModal/>

        </div>
    );
}