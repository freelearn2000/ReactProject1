import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { HomePage } from './pages/HomePage/HomePage';
import { NewsPage } from './pages/NewsPage/NewsPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import Anusree from './pages/Anusree/Anusree';
import { Rakhi } from './pages/Rakhi/Rakhi';
import Santhosh  from './pages/Santhosh/Santhosh';
import { Radhika } from './pages/Radhika/Radhika';
import { Samara } from './pages/Samara/Samara';
import { Parvathy } from './pages/Parvathy/Parvathy';
import { Vishnupriya } from './pages/Vishnupriya/Vishnupriya';
import { Divya } from './pages/Divya/Divya';
import  Bindu from './pages/Bindu/Bindu';
import { Aiswarya } from './pages/Aiswarya/Aiswarya';
import { Viji } from './pages/Viji/Viji';
import { Manooja } from './pages/Manooja/Manooja';
import { Dhanya } from './pages/Dhanya/Dhanya';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';


class App extends Component {
  
  render( ) {

    // map routes to resources
    let routes = (
      <Routes>
        <Route path = "/" element = { <HomePage/> }/>
        <Route path = "/news" element = { <NewsPage/> }>
           <Route path = ":id" element = { <NewsPage/> }/>
        </Route>
        <Route path = "/about" element = { <AboutPage/> }>
          <Route path = ":id" element = { <AboutPage/> }/>
        </Route>
        <Route path = "/anusree" element = { <Anusree title="This is Anusree's Component"/> }/>
        <Route path = "/santhosh" element = { <Santhosh title="This is Santhosh's Component"/> }/>
        <Route path = "/rakhi" element = { <Rakhi title="This is Rakhi's Component"/> }/>
        <Route path = "/radhika" element = { <Radhika title="This is Radhika's Component" /> }/>
        <Route path = "/samara" element = { <Samara title="Welcome to Samara's Component"/> }/>
        <Route path = "/parvathy" element = { <Parvathy title="This is Parvathy's Component"/> }/>
        <Route path = "/vishnupriya" element = { <Vishnupriya title="This is Vishnupriya's Component"/>}/>
        <Route path = "/divya" element = { <Divya title="This is Divya's Component"/> }/>
        <Route path = "/aiswarya" element = { <Aiswarya title="Aiswarya's Component"/> }/>
        <Route path = "/Bindu" element = { <Bindu title="This is Bindu's Component"/> }/>
        <Route path = "/viji" element = { <Viji title="This is Viji's Component"/> }/>
        <Route path = "/manooja" element = { <Manooja title="This is Manooja's Component"/> }/>
        <Route path = "/dhanya" element = { <Dhanya title="This is Dhanya's Component"/>}/>
        <Route path = "*" element = { <ErrorPage ErrorCode="404" ErrorMsg="The page requested was not found"/> }/>
      </Routes>
    );
    
    return (
      <div className = "ui segments">
        <div className = "ui segment">
            <Header title = 'React Application'/>
        </div>
          <div className = "ui raised very padded text container segments">
            <div className = "ui segment">
              {routes}
            </div>
          </div>
          <div className = "ui segment">
            <Footer content = "@2022"/>
          </div>
      </div>
    );
  }
}

export default App;