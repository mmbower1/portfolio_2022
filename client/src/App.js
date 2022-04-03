import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";

// styles
import "./App.css";
import "./scss/App.scss";

// redux
import {
  store,
  // persistor
} from "./store";
import { Provider } from "react-redux";

// containers
const Home = lazy(() => import("./containers/Home"));
const Subscribe = lazy(() => import("./containers/Subscribe"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <div className="App">
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/subscribe" component={Subscribe} />
              <Footer />
            </div>
          </Suspense>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
