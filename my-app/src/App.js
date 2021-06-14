import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Hello from './pages/Hello'
import Products from './pages/Products'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/products'>Les products</Link>
      </nav>
      <Switch>
        <Route path='/' exact={true} component={Hello} />
        <Route path='/products' exact={true} component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
