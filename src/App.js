import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentLeft from './components/Content-left';
import ContentRight from './components/Content-right';
import Text from './components/Text';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header/>
      <Hero/>
      <ContentLeft/>
      <Text/>
      <ContentRight/>
      <Text/>
      <Gallery/>
      <Text/>
      <Footer/>
    </div>
  );
}

export default App;
