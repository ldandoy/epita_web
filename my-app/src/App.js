import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Hello from './pages/Hello'
import Posts from './pages/Posts'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/posts'>Les posts</Link>
      </nav>
      <Switch>
        <Route path='/' exact={true} component={Hello} />
        <Route path='/posts' exact={true} component={Posts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
