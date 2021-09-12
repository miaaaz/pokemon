import './App.css';
import Home from "./components/home/Home";
import Pocket from "./components/pocket/Pocket";
import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* home */}
        <Route
            exact={true}
            path={["/"]}>
          <Home/>
        </Route>

        {/* pocket */}
        <Route
            exact={true}
            path={["/pocket"]}>
          <Pocket/>
        </Route>

      </div>
    </Router>

  );
}

export default App;
