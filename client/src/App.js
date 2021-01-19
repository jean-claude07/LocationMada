import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Scroll from './components/scroll_back/Scroll';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Preloader from './components/preloader/Preloader';
import Listing from './pages/listing/Listing';
import Promotion from './pages/promotion/Promotion';
import Category from './pages/category/Category'
import condition from './pages/condition_general/condition';
import Login from './pages/espace_client/Login';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Preloader/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/espace_client" component={Login}/>
            <Route exact path="/list" component={Listing}/>
            <Route exact path="/promotion" component={Promotion}/>
            <Route exact path="/categories" component={Category}/>
            <Route exact path="/condition_generale" component={condition}/>
          </Switch>

        <Footer/>

        <Scroll/>
    </BrowserRouter>
  );
}

export default App;
