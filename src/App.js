import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
// import About from "./pages/AboutPage";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:id" children={<SingleProduct />} />
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
