
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
import Nitor from './components/Pages/SubMenu/Project/Nitor';
import Projects from './components/Pages/SubMenu/Project/Projects';
import SKH from './components/Pages/SubMenu/Project/SKH';



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
          <Route path="/projects/NITOR" element={ <Nitor/>}>
          {/* <Route path='/projects/NITOR' element={<Nitor/>}></Route> */}
        </Route>
          <Route path="/projects/SKH" element={ <SKH/>}>
          {/* <Route path='/projects/SKH' element={<SKH/>}></Route> */}
        </Route>
          {/* <Route path="/project" element={<Nitor />} />      */}
          <Route path="*" element={<NotFound />} />     
      </Routes>
      <Footer />
</div>
  );
}

export default App;
