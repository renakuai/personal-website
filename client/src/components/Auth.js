import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Link, Outlet, useLocation  } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const [link, setLink, user, setUser] = useOutletContext();
  const [active, setActive] = useState('');
  
  useEffect(() => {
    setLink('auth');
    setActive('signin');
  }, [])

  const handleActive = (e) => {
    setActive(e.target.id)
  }

  return (
    <section className="Auth Gradient">
      <div className= "Main__Grid">
        <main className="Auth">
          <h1>Sign in / Sign up</h1>
          <section className="Instructions">
            <p>To comment on my posts, you'll need to create an account.</p>
          </section>
          <div className = "Auth--Wrapper">
          <nav className="Auth">
            <ul>
              <li className="Auth__Link"><Link to="/auth" id="signin" onClick={handleActive} className={active === 'signin' ? 'Active' : undefined}>Sign in</Link></li>
              <li className="Auth__Link"><Link to="/auth/signup" id="signup" onClick={handleActive} className={active === 'signup' ? 'Active' : undefined}>Sign up</Link></li>
            </ul>
          </nav>
            <Outlet context={[link, setLink, user, setUser]} />
            </div>
        </main>
      </div>
    </section>
  )
}

export default Auth;