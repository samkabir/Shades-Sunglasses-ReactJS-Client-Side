import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Explore from "./Pages/Explore/Explore/Explore";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";

function App() {
  return (
    <div className="App">
        <AuthProvider>
          <Router>
            <Navigation></Navigation>
                <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route exact path="/home">
                    <Home></Home>
                  </Route>
                  <Route path="/login">
                    <Login></Login>
                  </Route>
                  <Route path="/register">
                    <Register></Register>
                  </Route>
                  <PrivateRoute path="/purchase/:productId">
                    <Purchase></Purchase>
                  </PrivateRoute>
                  <PrivateRoute path="/dashboard">
                    <DashBoard></DashBoard>
                  </PrivateRoute>
                  <Route path="/explore">
                    <Explore></Explore>
                  </Route>
                </Switch>
            <Footer></Footer>   
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
