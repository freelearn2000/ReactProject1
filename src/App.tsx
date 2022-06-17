import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { HomePage } from './pages/HomePage/HomePage';
import NewsPage from './pages/NewsPage/NewsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Anusree from './pages/Anusree/Anusree';
import TravellBlog from './pages/Anusree/TravellBlog';
import { Pizza } from './pages/Anusree/Pizza';
import FoodBlog from './pages/Anusree/FoodBlog';
import Rakhi from './pages/Rakhi/Rakhi';
import RouteData from './pages/Rakhi/RouteData';
import { HomePage as IndexPage  } from './pages/Rakhi/HomePage';
import ScienceBlog from './pages/Rakhi/ScienceBlog';
import TechnologyBlog from './pages/Rakhi/TechnologyBlog';
import { ContentPage } from './pages/Rakhi/ContentPage';
import science from './pages/Rakhi/Resources/news.jpg';
import technology from './pages/Rakhi/Resources/tech.jpg';
import Santhosh from './pages/Santhosh/Santhosh';;
import Radhika from './pages/Radhika/Radhika';
import Samara from './pages/Samara/Samara';
import Parvathy from './pages/Parvathy/Parvathy';
import Vishnupriya from './pages/Vishnupriya/Vishnupriya';
import Divya from './pages/Divya/Divya';
import Bindu from './pages/Bindu/Bindu';
import Aiswarya from './pages/Aiswarya/Aiswarya';
import Viji from './pages/Viji/Viji';
import Manooja from './pages/Manooja/Manooja';
import { Dhanya1 } from './pages/Dhanya/Dhanya1';
import { FoodBlog as Food } from './pages/Dhanya/FoodBlog';
import { TravelBlog as Travel } from './pages/Dhanya/TravelBlog';
import { Products } from './pages/Vishnupriya/Products';
import { Blog } from './pages/Vishnupriya/Blog';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { Product } from './pages/Divya/Products';
import { Grocery } from './pages/Divya/Grocery';
import { Skincare } from './pages/Divya/Skincare';
import { Health } from './pages/Bindu/Health';
import { Sports } from './pages/Bindu/Sports';
import { CanadaWeather } from './pages/Samara/CanadaWeather';
import { PolandWeather } from './pages/Samara/PolandWeather';
import Books from './pages/Parvathy/books';
import Cats from './pages/Parvathy/cats';
import Home from './pages/Parvathy/home';
import { Posts } from './pages/Santhosh/Posts';
import { Users } from './pages/Santhosh/Users';
import { Home as Home1 } from './pages/Santhosh/Home';
import { National } from './pages/Radhika/National';
import { Kerala } from './pages/Radhika/Kerala';
import { Politics } from './pages/Aiswarya/Politics';
import { Arts } from './pages/Aiswarya/Arts'


class App extends Component {
  
  render( ) {

    // map routes to resources
    let routes = (
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/news" element={ <NewsPage/> }>
           <Route path=":id" element={ <NewsPage/> }/>
        </Route>
        <Route path="/about" element={ <AboutPage/> }>
            <Route path=":contact" element={ <AboutPage/> }>
              <Route path=":email" element={ <AboutPage/> }/>
            </Route>
        </Route>
        <Route path="/anusree" element={ <Anusree title="Anusree's Component"/> } >
          {/* <Route index element={ <Anusree title="Anusree's Component"/> }/> */}
          <Route path=":id" element={ <TravellBlog title="Travel Blog"/> }/>
          <Route path="foodblog" element={ <FoodBlog title="Food Blog"/> }>
            <Route path="pizza" element={ <Pizza title="Pizza"/> }/>
          </Route>
        </Route>
        <Route path="/santhosh" element={ <Santhosh title="This is Santhosh's Component"/> }>          
          <Route index element={ <Home1 title="Home"/> }/>
          <Route path="Home" element={ <Home1 title="Home"/> }/>
          <Route path="users" element={ <Users title="Users Details"/> }/>
          <Route path="posts" element={ <Posts title="Posts"/> }/>
          <Route path=":id" element={ <Santhosh title="This is Santhosh's Component"/> }/>
        </Route>
        <Route path="/rakhi" element={ <Rakhi title="Rakhi's Component"/> }>
          <Route path=":id" element={ <RouteData title="Rakhi's Component"/> }/>
          <Route index element={ <IndexPage title="The value of an idea lies in the using of it!"/> }/>
          <Route path="science" element={ <ScienceBlog title="Science Blog"/> }>
            <Route path="top" element={<ContentPage title='Physics-based cryptocurrency transmits energy through blockchain' content='Researchers from Lawrence Livermore National Laboratory (LLNL) have devised a physics-based cryptocurrency that links electrical energy and blockchain technologies in a new way.' image={science}/> }/>
          </Route>
          <Route path="technology" element={ <TechnologyBlog title="Technology Blog"/> }>
            <Route path="trending" element={<ContentPage title='So long, Internet Explorer. The browser retires today' content='The browser retires today. Internet Explorer is finally headed out to pasture.' image={technology}/> }/>
          </Route>
        </Route>
        <Route path="/Bindu" element={ <Bindu title="This is Bindu's Component"/> }>
          <Route path=":id" element={ <Bindu title="This is Bindu's Component"/> }/>
          <Route path="health" element={ <Health title="Health"/> }/>
          <Route path="sports" element={ <Sports title="Sports"/> }/>
        </Route>
        <Route path="/radhika" element={ <Radhika title="This is Radhika's Component"/> }>
          <Route path=":id" element={ <Radhika title="This is Radhika's Component"/> }/>
          <Route path="national" element={ <National title="National"/> }/>
          <Route path="kerala" element={ <Kerala title="Kerala"/> }/>
        </Route>
        <Route path="/samara" element={ <Samara title="Welcome to Samara's Component"/> }>
          <Route path="canadaweather" element={ <CanadaWeather title="Canada weather details"/> }/>
          <Route path="polandweather" element={ <PolandWeather title="Poland Weather details"/> }/>
          <Route path=":id" element={ <Samara title="Welcome to Samara's Component" /> }/>
        </Route>
        <Route path="/parvathy" element={ <Parvathy title="This is Parvathy's Component"/> }>
        <Route path=":id" element={ <Parvathy title="This is Parvathy's Component" /> }/>
          <Route path="books" element={ <Books title="Books" /> }/>
          <Route path="cats" element={ <Cats title="Cats" /> }/>
          <Route path="home" element={ <Home /> }/>
        </Route>
        <Route path="/vishnupriya" element={ <Vishnupriya title="This is Vishnupriya's Component"/>}>
         <Route path="products" element={ <Products title="Products details"/> }/>
         <Route path="blog" element={ <Blog title="Blog"/> }/>
        </Route>
        <Route path="/divya" element={ <Divya title="This is Divya's Component"/> }>
          <Route path=":id" element={ <Divya title="This is Divya's Component"/> }/>
          <Route path="product" element={ <Product title="Product"/> }>
            <Route path="grocery" element={ <Grocery/> }/>
            <Route path="skincare" element={ <Skincare/> }/>
          </Route>
        </Route>
        <Route path="/aiswarya" element={ <Aiswarya title="Aiswarya's Component"/> }>
          <Route path=":id" element={ <Aiswarya title="Aiswarya's Component"/> }/>
          <Route path="politics" element={ <Politics title="Politics" /> }/>
          <Route path="Arts" element={ <Arts title="Arts" /> }/>
        </Route>
        <Route path="/viji" element={ <Viji title="This is Viji's Component"/> }>
          <Route path=":id" element={ <Viji title="This is Viji's Component"/> }/>
        </Route>
        <Route path="/manooja" element={ <Manooja title="This is Manooja's Component"/> }>
          <Route path=":id" element={ <Manooja title="This is Manooja's Component"/> }/>
        </Route>  
        <Route path="/dhanya" element={ <Dhanya1 title="This is Dhanya's Component"/> }>
          {/* <Route path=":id" element={ <Dhanya title="This is Dhanya's Component"/> }/> */}
          <Route path="food" element={ <Food /> } />
          <Route path="travel" element={ <Travel /> } />
        </Route>
        <Route path="*" element={ <ErrorPage ErrorCode="404" ErrorMsg="The page requested was not found"/> }/>
      </Routes>
    );
    
    return (
      <div className="ui segments">
        <div className="ui segment">
            <Header title='React Application'/>
        </div>
          <div className="ui raised very padded text container segments">
            <div className="ui segment">
              { routes }
            </div>
          </div>
          <div className="ui segment">
            <Footer content="@2022"/>
          </div>
      </div>
    );
  }
}

export default App;