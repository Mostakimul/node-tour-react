import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TheFooter from './components/common/TheFooter';
import TheNavbar from './components/common/TheNavbar';
import DetailsDestinantion from './components/destination/DetailsDestinantion';
import AuthProvider from './context/AuthProvider';
import About from './pages/About';
import AddDestinations from './pages/Admin/AddDestinations';
import AllDestination from './pages/AllDestination';
import AllTourPackages from './pages/AllTourPackages';
import Contact from './pages/Contact';
import Error from './pages/Error';
import EventPackage from './pages/EventPackage';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-gray-800">
          <div className="container">
            <TheNavbar />
          </div>
        </div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/tour-packages">
            <AllTourPackages />
          </Route>
          <Route path="/our-destinations">
            <AllDestination />
          </Route>
          <Route path="/destination/:id">
            <DetailsDestinantion />
          </Route>
          <Route path="/event-packages">
            <EventPackage />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <PrivateRoute path="/gallery">
            <Gallery />
          </PrivateRoute>
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/admin/add-destinantion">
            <AddDestinations />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <TheFooter />
      </Router>
    </AuthProvider>
  );
}

export default App;
