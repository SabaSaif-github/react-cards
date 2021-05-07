import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import DataFetching from './cards/DataFetching'
import Details from './cards/Details'

function App() {
  return (
    <Router>
      <Route path='/' exact component={DataFetching} />
      <Route path='/details' component={Details} />
    </Router>
  );
}

export default App;
