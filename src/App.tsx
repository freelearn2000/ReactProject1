import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { HomePage } from './pages/HomePage/HomePage';
import { NewsPage } from './pages/NewsPage/NewsPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { Anusree } from './pages/Anusree/Anusree';
import { Rakhi } from './pages/Rakhi/Rakhi';
import { Santhosh } from './pages/Santhosh/Santhosh';
import { Radhika } from './pages/Radhika/Radhika';
import { SamaraKP } from './pages/SamaraKP/SamaraKP';
import { Parvathy } from './pages/Parvathy/Parvathy';
import { Vishnupriya } from './pages/Vishnupriya/Vishnupriya';
import { Divya } from './pages/Divya/Divya';
import { Bindu } from './pages/Bindu/Bindu';
import { Aiswarya } from './pages/Aiswarya/Aiswarya';
import { Viji } from './pages/Viji/Viji';
import { Manooja } from './pages/Manooja/Manooja';
import { Dhanya } from './pages/Dhanya/Dhanya';


class App extends Component {
  
  render( ) {

    // map routes to resources
    let routes = (
      <Routes>
        <Route path="/*" element={<HomePage/>} />
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/anusree" element={<Anusree/>}/>
        <Route path='/santhosh' element={<Santhosh/>} />
        <Route path="/rakhi" element={<Rakhi/>}/>
        <Route path="/radhika" element={<Radhika/>}/>
        <Route path="/samarakp" element={<SamaraKP/>}/>
        <Route path="/parvathy" element={<Parvathy/>}/>
        <Route path="/vishnupriya" element={<Vishnupriya/>}/>
        <Route path="/divya" element={<Divya/>}/>
        <Route path="/bindu" element={<Bindu/>}/>
        <Route path='/aiswarya' element={<Aiswarya/>}/>
        <Route path='/viji' element={<Viji/>}/>
        <Route path="/aiswarya" element={<Aiswarya/>}/>
        <Route path="/manooja" element={<Manooja/>}/>
        <Route path="/dhanya" element={<Dhanya/>}/>
      </Routes>
    );


    return (
      <div className="ui segments">
        <div className="ui segment">
              <Header title='React Application'/>
          </div>
        <div className="ui raised very padded text container segments">
          <div className="ui segment">
              {routes}
          </div>
        </div>
        <div className="ui segment">
            <Footer content='@2022'/>
        </div>
      </div>
    );
  }
}

export default App;
