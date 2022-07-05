import  React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
          <div className="app">
            <Routes>
              <Route path="/checkout">
                <h1>Checkout</h1>
              </Route>
              <Router path = "/login">
                <h1>Login page</h1>
              </Router>
              <Route path="/">
                <h1>HOME PAGE</h1>
              </Route>
            </Routes>
          </div>

    </Router>


  );
}

export default App;
