import './App.css';
import React, { useState } from "react";
import Nav from './components/Nav';
import { Outlet } from "react-router-dom";

function App() {
  const [link, setLink] = useState('home');
  const [user, setUser] = useState({
    auth: false,
    name: ''
  });

  const userProps = {
    user,
    setUser,
  }

  return (
    <section className="App">
      {link === 'home' &&
        <div className="Nav__Pink">
          <Nav {...userProps}/>
        </div>
      }
      {link === 'code' &&
        <div className="Nav__Periwinkle">
          <Nav />
        </div>
      }
      {link === 'design' &&
        <div className="Nav__Mint">
          <Nav {...userProps}/>
        </div>
      }
      {(link === 'writing' || link === 'auth') &&
        <div className="Nav__Gradient">
          <Nav {...userProps}/>
        </div>
      }
      <Outlet context={[link, setLink, user, setUser]}/>
    </section>
  );
}

export default App;