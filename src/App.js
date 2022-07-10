import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreatePage from './components/CreatePage';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Switch>
          
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/create" >
            <CreatePage></CreatePage>
          </Route>

          <Route path="/blogs/:id">
            <BlogDetails></BlogDetails>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
