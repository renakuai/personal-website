import './App.css';
import React, { useState } from "react";
import Nav from './components/Nav';
import { Outlet } from "react-router-dom";

function App() {
  const [link, setLink] = useState('home');

  return (
    <section className="App">
      {link == 'home' &&
        <div className="Nav__Pink">
          <Nav />
        </div>
      }
      {link == 'code' &&
        <div className="Nav__Periwinkle">
          <Nav />
        </div>
      }
      {link == 'design' &&
        <div className="Nav__Red">
          <Nav />
        </div>
      }
      {link == 'writing' &&
        <div className="Nav__White">
          <Nav />
        </div>
      }
      <Outlet context={[link, setLink]}/>
    </section>
  );
}

export default App;