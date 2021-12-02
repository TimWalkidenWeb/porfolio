import './App.css';
import Header from "./js/components/header";
import Experience from "./js/components/experience";
import Skills from "./js/components/skills";
import Companies from "./js/components/companies"
import Footer from "./js/components/footer";
import React from "react"

function App() {
  return (
    <div className="App">
        <Header/>
        <Experience/>
        <Skills/>
        <Companies/>
        <Footer/>
    </div>
  );
}

export default App;
