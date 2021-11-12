import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Home/Shared/Header/Header';
import Footer from './pages/Home/Shared/Footer/Footer';
import OrderReview from './pages/OrderReview/OrderReview';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Products from './pages/Home/Products/Products';
import AllExplore from './pages/Home/Explore/AllExplore/AllExplore';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route exact path = "/home">
          <Home></Home>
        </Route>
        <Route exact path = "/products">
          <Products></Products>
        </Route>
        <Route exact path = "/allexplore">
          <AllExplore></AllExplore>
        </Route>
        <PrivateRoute exact path = "/orderreview">
          <OrderReview></OrderReview>
        </PrivateRoute>
        <PrivateRoute exact path = "/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route exact path = "/login">
          <Login></Login>
        </Route>
        <Route exact path = "/register">
          <Register></Register>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
