import './App.css';
//Comps
import Nav from './Components/Nav';
import Header from './Components/Header';
import Highlights from './Components/Highlights';
import Features from './Components/Features';
import Latest from './Components/Latest';
import Footer from './Components/Footer';
//data
import dataSeller from "./data-seller"
import dataLast from "./data-lastest"


function App() {
  return (
    <div className="App">
  
      <Nav />
    
    
    <main>

  
    <Latest data={dataLast}/>
    <section id="explore">
    <div className="container">
    <div className="big-row row_column">
<h2>Explore more <span className="neon-blue">Cakes</span></h2>
<a href='#features'>
<button className='btn '> Browse Cakes</button>
</a>
</div>
</div>
    </section>
    </main>
    <Footer />
    </div>
  );
}

export default App;
