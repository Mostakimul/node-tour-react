import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TheNavbar from './components/common/TheNavbar';
import About from './pages/About';
import AllDestination from './pages/AllDestination';
import AllTourPackages from './pages/AllTourPackages';
import Contact from './pages/Contact';
import Error from './pages/Error';
import EventPackage from './pages/EventPackage';
import Gallery from './pages/Gallery';
import Home from './pages/Home';

function App() {
  return (
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
        <Route path="/event-packages">
          <EventPackage />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
