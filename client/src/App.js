import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
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
const Portfolio = lazy(() => import("./containers/Portfolio"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <div className="App">
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
            </div>
          </Suspense>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
