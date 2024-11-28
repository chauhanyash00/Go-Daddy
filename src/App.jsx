import './App.css';
import Section1 from './components/Header/Section1'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main';
import Premium from './components/Premium/Premium'
import Grow from './components/Grow/Grow'
import Plan from './components/Plan/Plan';
import Onward from './components/Onward/Onward';
import Footer from './components/Fotter/Footer';
 
function App() {
  return (
   <>
    <Navbar/>
    <Section1/>
    <Main/>
    <Premium/>
    <Grow/>
    <Plan/>
    <Onward/>
    <Footer/>
   </>
  );
}

export default App;
  