import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className='content'>
        <Switch>
          <Route path ="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
