
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Pages/Contact/Contact';
import Footer from './components/Pages/Footer/Footer';
import Header from './components/Pages/Header/Header';
import Team from './components/Pages/Team/Team';
import Home from './components/Pages/Home/Home.jsx';
import NotFound from './components/Pages/404NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />     
          <Route path="*" element={<NotFound />} />     
      </Routes>
      <Footer />
</div>
  );
}

export default App;
