import React from 'react';
import Header from './components/header/header';
import './App.scss';
import Homepage from './pages/homepage/homepage';
import { Route, Switch} from 'react-router-dom';
import ServicesPage from './pages/services-page/services-page';
import Footer from './components/footer/footer';
import NavigationModal from './components/modals/navigation-modal';
import ProductsPage from './pages/products-page/products-page';


export default ()=>{
    return (
        <div className='App'>
        <Header/>
        
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/services' component={ServicesPage} />        
            {/* <Route path='/shop' component={ProductsPage} />   */}
        </Switch>

        <Footer/>

        {/* <NavigationModal/> */}

        </div>
    );
}