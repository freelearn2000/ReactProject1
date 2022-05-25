import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { HomePage } from './pages/HomePage/HomePage';
import { NewsPage } from './pages/NewsPage/NewsPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { AnusreeMohan } from './pages/AnusreeMohan/AnusreeMohan';
import { RakhiRavi } from './pages/RakhiRavi/RakhiRavi';
import { Santhosh } from './pages/Santhosh/Santhosh';
import { Radhika } from './pages/Radhika/Radhika';
import { SamaraKP } from './pages/SamaraKP/SamaraKP';
import { Parvathy } from './pages/Parvathy/Parvathy';
<<<<<<< HEAD
import { Vishnupriya } from './pages/Vishnupriya/Vishnupriya';
=======
import { Divya } from './pages/Divya/Divya';
>>>>>>> 1def911d0209032552685b1f280d8ed5e84a8491

class App extends Component {
  
  render( ) {

    // map routes to resources
    let routes = (
      <Routes>
        <Route path="/*" element={<HomePage/>} />
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/anusreemohan" element={<AnusreeMohan/>}/>
        <Route path='/santhosh' element={<Santhosh/>} />
        <Route path="/rakhiravi" element={<RakhiRavi/>}/>
        <Route path="/radhika" element={<Radhika/>}/>
        <Route path="/samarakp" element={<SamaraKP/>}/>
        <Route path="/parvathy" element={<Parvathy/>}/>
<<<<<<< HEAD
        <Route path="/vishnupriya" element={<Vishnupriya/>}/>
        
=======
        <Route path="/divya" element={<Divya/>}/>
>>>>>>> 1def911d0209032552685b1f280d8ed5e84a8491
      </Routes>
    );


    return (
      <div className="ui raised very padded text container segments">
        <div className="ui segment">
            <Header title='React Application'/>
        </div>
        <div className="ui segment">
            {routes}
        </div>
        <div className="ui segment">
            <Footer content='@2022'/>
        </div>
      </div>
    );
  }
}

export default App;
