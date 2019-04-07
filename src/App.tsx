import React from "react";
import "./App.scss";
import RouterIndex from "./router/index";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='appMain'>
        <RouterIndex/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
