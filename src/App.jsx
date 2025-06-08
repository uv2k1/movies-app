import { useState } from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [searchTerm,setSearchTerm] = useState('')
  return (
    <>
      <main>
        <div className="pattern"/>
          <div className="wrapper">
              <header>
                <img src="./hero.png" alt="hero banner"></img>
                <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without Hassle</h1>
              </header>
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Search>
          </div>

      </main>
    </>
  );
}

export default App;
