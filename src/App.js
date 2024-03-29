import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentLeft from './components/Content-left';

function App() {
  return (
    <div className="container">
      <Header/>
      <Hero/>
      <ContentLeft/>
    </div>
  );
}

export default App;
