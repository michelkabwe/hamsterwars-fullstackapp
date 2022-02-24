
import Start from '../src/components/Start.jsx'
import Battle from '../src/components/Battle.jsx'
import Gallery from '../src/components/Gallery.jsx'
import { BrowserRouter as Router, Link, Switch, Route, } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
            <nav> 
                <Link to="/"> Start </Link>
                <Link to="/battle"> Tävling </Link>
                <Link to="/gallery"> Galleri </Link>
               
            
            </nav>
  
      </header>

      <main>

      <Switch>
          <Route path="/gallery"> <Gallery /> </Route>
          <Route path="/battle"> <Battle /> </Route>
          <Route path="/"> <Start /> </Route>
      </Switch>
  
  
      </main>
    </div>
    </Router>
  );
}

export default App;
