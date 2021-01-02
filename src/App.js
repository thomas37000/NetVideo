import React from "react";
import Routter from "./Router";
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import "./App.css";

function loader() {
  document.querySelector(".loader-container").classList.add("hidden");
}

setTimeout(loader, 100);

function App() {
  return (
    <div className="App">
      <div class="loader-container">
        <div class="loader"></div>
      </div>
      <Routter />
      <ScrollUpButton
                style={{
                  backgroundColor: '#28A745',
                  fill: '#fff',
                  width: '40px',
                  height: '40px',
                  padding: '3px',
                  outline: 'none',
                  transform: 'translateY(-3rem) translateX(1.5rem)',
                  borderRadius: '50px',
                }}
              />
    </div>
  );
}

export default App;
