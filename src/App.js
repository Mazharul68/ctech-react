
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Pages/Contact/Contact';
import Footer from './components/Pages/Footer/Footer';
import Header from './components/Pages/Header/Header';
import Team from './components/Pages/Team/Team';
import Home from './components/Pages/Home/Home.jsx';
import NotFound from './components/Pages/404NotFound/NotFound';
import About from './components/Pages/SubMenuPage/Home/About/About';
import Mission from './components/Pages/SubMenuPage/Home/Mission/Mission';
import Vision from './components/Pages/SubMenuPage/Home/Vision/Vision';
import Projects from './components/Pages/SubMenu/Project/Projects';
import FiftyHospital from './components/Pages/SubMenu/FiftyHospital/FiftyHospital';
import TeamProfile from './components/Pages/Team/TeamProfile';
import Client from './components/Pages/SubMenu/Client/Client';
import Product from './components/Pages/SubMenu/Product/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />     
          <Route path="/about" element={<About />} />     
          <Route path="/mission" element={<Mission />} />     
          <Route path="/vision" element={<Vision />} />   
          <Route path="/projects/:id" element={ <Projects/>}></Route>
          <Route path="/fifty-hospital/:id" element={ <FiftyHospital/>}></Route>
          <Route path="/teamProfile/:id" element={ <TeamProfile/>}></Route>
          <Route path="/client/:id" element={ <Client/>}></Route>
          <Route path="/product/:id" element={ <Product/>}></Route>
          <Route path="*" element={<NotFound />} />     
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
