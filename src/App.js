import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail" component={Detail} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
