import './styles/App.css';
import { Outlet } from "react-router-dom";
import Nav from './components/Nav';
import React, { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false);
  const [light, setLight] = useState(true);

  const theme = {
    dark,
    setDark,
    light,
    setLight
  }

  return (
    <main className={light ? 'Theme__light' : 'Theme__dark'}>
      <div className="Background">
        <div className="blob--one"></div>
        <div className="blob--two"></div>
        <div className="blob--three"></div>
      </div>
      <Nav {...theme} />
      <section className="App">
        <Outlet />
      </section>
    </main>
  );
}

export default App;
