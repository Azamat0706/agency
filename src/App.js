// import logo from './logo.svg';
import './App.css';

import Contents from './component/contents/Contents';
import Footer from './component/footer/Footer';
import Gallery from './component/gallery/Gallery';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Partners from './component/partners/Partners';
import Testimonials from './component/testimonials/Testimonials';
import Follow from './component/follow/Follow';  
import Serveces from './component/serveces/Serveces';

function App() {
  return (
    
    <div className="App">
        <div className="warapper">
        <Header/>
     <Home/>
    <Serveces/>
     <Contents/>
     <Gallery/>
     <Partners/>
     <Follow/>
      <Testimonials/>
     <Footer/>
        </div>

    </div>
  );
}

export default App;
