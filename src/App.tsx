import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { HomePage } from './pages/Home/Home';
import NewsPage from './pages/NewsPage/NewsPage';
import About from './pages/About/About';
import Anusree from './pages/Anusree/Anusree';
import { ContextSample } from './pages/Anusree/Context';
import TravellBlog from './pages/Anusree/TravellBlog';
import SubPage from './pages/Anusree/SubPage';
import FoodBlog from './pages/Anusree/FoodBlog';
import Rakhi from './pages/Rakhi/Rakhi';
import RouteData from './pages/Rakhi/RouteData';
import { HomePage as IndexPage  } from './pages/Rakhi/HomePage';
import ScienceBlog from './pages/Rakhi/ScienceBlog';
import TechnologyBlog from './pages/Rakhi/TechnologyBlog';
import { Contents } from './pages/Rakhi/Contents';
import science from './pages/Rakhi/Resources/news.jpg';
import technology from './pages/Rakhi/Resources/tech.jpg';
import Santhosh from './pages/Santhosh/Santhosh';
import Samara from './pages/Samara/Samara';
import Parvathy from './pages/Parvathy/Parvathy';
import PetsContext from './pages/Parvathy/PetsContext';
import Books from './pages/Parvathy/Books';
import Cats from './pages/Parvathy/Cats';
import MyHome from './pages/Parvathy/Home';
import Vishnupriya from './pages/Vishnupriya/Vishnupriya';
import { Home as Phome } from './pages/Vishnupriya/Home';
import { ShoppingCart } from './pages/Vishnupriya/ShoppingCart';
import Electronics from './pages/Vishnupriya/Electronics';
import { Mobiles } from './pages/Vishnupriya/Mobiles';
import { Laptops } from './pages/Vishnupriya/Laptops';
import { UserCont } from './pages/Vishnupriya/UserContext'; 
import Divya from './pages/Divya/Divya';
import Product from './pages/Divya/Products';
import { Grocery } from './pages/Divya/Grocery';
import { Skincare } from './pages/Divya/Skincare';
import { AuthUser } from './pages/Divya/UserContext'; 
import Aiswarya from './pages/Aiswarya/Aiswarya';
import Viji from './pages/Viji/Viji';
import { Nepal } from './pages/Viji/Nepal';
import { Bangladesh } from './pages/Viji/Bangladesh';
import Manooja from './pages/Manooja/Manooja';
import { Dhanya1 } from './pages/Dhanya/Dhanya1';
import { FoodBlog as Food } from './pages/Dhanya/FoodBlog';
import { TravelBlog as Travel } from './pages/Dhanya/TravelBlog';
import { TravelRef1 } from './pages/Dhanya/TraveRef';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { TravelContext } from './pages/Dhanya/TravelContext';
import { Bindu } from './pages/Bindu/Bindu';
import { Bhome }  from './pages/Bindu/Bhome';
import { Health } from './pages/Bindu/Health';
import { Sports } from './pages/Bindu/Sports';
import { CanadaWeather } from './pages/Samara/CanadaWeather';
import { PolandWeather } from './pages/Samara/PolandWeather';
import { SamaraHome } from './pages/Samara/SamaraHome';
import { WeatherContext } from './pages/Samara/WeatherContext';
import { Mhome } from './pages/Manooja/Mhome';
import { Business } from  './pages/Manooja/Business';
import { Education } from './pages/Manooja/Education';
import { ContextYoga } from './pages/Manooja/ContextYoga';
import { Posts } from './pages/Santhosh/Posts';
import { Users } from './pages/Santhosh/Users';
import { Home as Home1 } from './pages/Santhosh/Home';
import { Login } from './pages/Santhosh/Login';
import Radhika from './pages/Radhika/Radhika';
import { Entertainment } from './pages/Radhika/Entertainment';
import { Art } from './pages/Radhika/Art';
import { Dance } from './pages/Radhika/Dance';
import { MusicContext } from './pages/Radhika/MusicContext';
import { Politics } from './pages/Aiswarya/Politics';
import { Arts } from './pages/Aiswarya/Arts';
import { Homepages } from './pages/Aiswarya/Homepages';
import { Counter } from './pages/Rakhi/CounterContext';
import { Contextpage } from './pages/Aiswarya/Contextpage';


class App extends Component {
  
  render( ) {

    // map routes to resources
    let routes = (
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/news" element={ <NewsPage/> }>
           <Route path=":id" element={ <NewsPage/> }/>
        </Route>
        <Route path="/about" element={ <About/> }>
            <Route path=":contact" element={ <About/> }>
              <Route path=":email" element={ <About/> }/>
            </Route>
        </Route>
        <Route path="/anusree"  element={ <Anusree title="Anusree's Component"/> } >
          <Route path=":travel" element={ <TravellBlog title="Travel Blog"/> }>
            <Route path="paris" element={ <SubPage title="Paris"/> }/>
          </Route>
          <Route path="foodblog" element={ <FoodBlog title="Food Blog"/> }>
            <Route path="pizza" element={ <SubPage title="Pizza"/> }/>
          </Route>
          <Route path="context" element={ <ContextSample title="Context Example"/> }/>
        </Route>
        <Route path="/santhosh" element={ <Santhosh title="This is Santhosh's Component"/> }>          
          <Route index element={ <Home1 title="Home"/> }/>
          <Route path="Home" element={ <Home1 title="Home"/> }/>
          <Route path="users" element={ <Users title="Users Details"/> }/>
          <Route path="posts" element={ <Posts title="Posts"/> }/>
          <Route path="login" element={ <Login/> } />
          <Route path=":id" element={ <Santhosh title="This is Santhosh's Component"/> }/>
        </Route>
        <Route path="/rakhi" element={ <Rakhi title="Rakhi's Component"/> }>
          <Route path=":id" element={ <RouteData title="Rakhi's Component"/> }/>
          <Route index element={ <IndexPage title="The value of an idea lies in the using of it!"/> }/>
          <Route path="science" element={ <ScienceBlog title="Science Blog"/> }>
            <Route path="top" element={<Contents title='Physics-based cryptocurrency transmits energy through blockchain' content='Researchers from Lawrence Livermore National Laboratory (LLNL) have devised a physics-based cryptocurrency that links electrical energy and blockchain technologies in a new way.' image={science}/> }/>
          </Route>
          <Route path="technology" element={ <TechnologyBlog title="Information Technology"/> }>
            <Route path="trending" element={<Contents title='So long, Internet Explorer. The browser retires today' content='The browser retires today. Internet Explorer is finally headed out to pasture.' image={technology}/> }/>
            </Route>
          <Route path="counter" element={ <Counter/> }></Route>
        </Route>
         <Route path="/bindu" element={ <Bindu title="This is Bindu's Component"/> }>
         <Route index element={ <Bhome title="Home"/> }/>
         <Route path="bhome" element={ <Bhome title="Home"/> }/>
         <Route path="health" element={ <Health title="Health"/> }/>
         <Route path="sports" element={ <Sports title="Sports"/> }/>
         <Route path=":id" element={ <Bindu title="This is Bindu's Component"/> }/>
         </Route>
        <Route path="/radhika" element={ <Radhika title="This is Radhika's Component"/> }>
          <Route index element={ <Entertainment title="Entertainment"/> }/>
          <Route path="art" element={ <Art title="Art"/> }/>
          <Route path="dance" element={ <Dance title="Dance"/> }/>
          <Route path="musiccontext" element={ <MusicContext /> } />
          <Route path=":id" element={ <Radhika title="This is Radhika's Component"/> }/>
        </Route>
        <Route path="/samara" element={ <Samara title="Welcome to Samara's Component"/> }>
          <Route index element={ <SamaraHome title="Welcome to our Weather Calculator"/> }/>
          <Route path="canadaweather" element={ <CanadaWeather title="Canada weather details"/> }/>
          <Route path="polandweather" element={ <PolandWeather title="Poland weather details"/> }/>
          <Route path="context" element={ <WeatherContext/> } />
          <Route path=":id" element={ <SamaraHome title="Welcome to our Weather Calculator" /> }/>
        </Route>
        <Route path="/parvathy" element={ <Parvathy title="This is Parvathy's Component"/> }>
          <Route index element={ <MyHome /> }/>
          <Route path="home" element={ <MyHome /> }/>
          <Route path="books" element={ <Books title="Books" /> }/>
          <Route path="cats" element={ <Cats title="Cats" /> }/>
          <Route path="petscontext" element={ <PetsContext title="Context" /> }/>
          <Route path=":id" element={ <Parvathy title="This is Parvathy's Component" /> }/>
        </Route>
        <Route path="/vishnupriya" element={ <Vishnupriya title="This is Vishnupriya's Component"/>}>
        <Route index element={ <ShoppingCart title="Shopping-Cart"/> }/>
         <Route path="shoppingcart" element={ <ShoppingCart title="Shopping-Cart"/> }/>
         <Route path="home" element={ <Phome title="Home"/> }/>
         <Route path="electronics" element={ <Electronics title="Electronics"/> }>
          <Route path="mobiles" element={ <Mobiles title="Mobiles"/> }/>
          <Route path="laptops" element={ <Laptops title="Laptops"/> }/>
         </Route>
         <Route path="usercontext" element={ <UserCont/> }></Route>
        </Route>
        <Route path="/divya" element={ <Divya title="This is Divya's Component"/> }>
        <Route index element={ <Product title="Product"/> }/>
          <Route path="product" element={ <Product title="Product"/> }>
            <Route path="grocery" element={ <Grocery/> }/>
            <Route path="skincare" element={ <Skincare/> }/>
          </Route>
          <Route path=":id" element={ <Divya title="This is Divya's Component"/> }/>
          <Route path="usercontext" element={ <AuthUser/> }></Route>

        </Route>
        <Route path="/aiswarya" element={ <Aiswarya title="Aiswarya's Component"/> }>
        <Route index element={ <Homepages/> }/>
          <Route path="politics" element={ <Politics title="Politics" /> }/>
          <Route path="Arts" element={ <Arts title="Arts" /> }/>
          <Route path="context" element={ <Contextpage title="Context"/> }/>
          <Route path=":id" element={ <Aiswarya title="Aiswarya's Component"/> }/>
        </Route>
        <Route path="/viji" element={ <Viji title="This is Viji's Component"/> }>
        <Route path="nepal" element={ <Nepal title="Details of Nepal"/> }/>
         <Route path="bangladesh" element={ <Bangladesh title="Details of Bangladesh"/> }/>
          <Route path=":id" element={ <Viji title="This is Viji's Component"/> }/>
        </Route>
        <Route path="/manooja" element={ <Manooja title="This is Manooja's Component"/> }>
          <Route path=":id" element={ <Manooja title="This is Manooja's Component"/> }/>
          <Route path="index" element={ <Mhome title="Home"/> }/>
          <Route path="business" element={ <Business title="Business"/> }/>
          <Route path="education" element={ <Education title="Education"/> }/>
          <Route path="contextnew" element={ <ContextYoga/> }/>
         </Route>  
        <Route path="/dhanya" element={ <Dhanya1 title="This is Dhanya's Component"/> }>
          {/* <Route path=":id" element={ <Dhanya title="This is Dhanya's Component"/> }/> */}
          <Route path="food" element={ <Food /> } />
          <Route path="travel" element={ <Travel /> } />
          <Route path="context" element={ <TravelContext/> } />
          <Route path="ref" element={ <TravelRef1/> }/>
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