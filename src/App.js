import React from "react";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    // <div>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}/>
            <Route path="/shop" element={<Shop />}/>
          </Routes>
          
        </div>
      </BrowserRouter>
      

    // </div>
  );
};


const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;  