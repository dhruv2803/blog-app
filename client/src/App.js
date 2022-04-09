import Blog from "./pages/Blog";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/blog/:id" exact>
                        <Blog />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
