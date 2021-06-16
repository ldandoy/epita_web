import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Hello from './pages/Hello'
import Products from './pages/Products'
import EditProducts from './pages/EditProducts'

function App() {

  return (
    <BrowserRouter forceRefresh={true}>
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/products'>Les products</Link>
      </nav>
      <Switch>
        <Route path='/' exact={true} component={Hello} />
        <Route path='/products' exact={true} component={Products} />
        <Route path='/products/:productId/edit' exact={true} component={EditProducts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
