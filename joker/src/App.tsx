import React,  { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

import "@blueprintjs/core/lib/css/blueprint.css";
import { Button, ButtonGroup, FormGroup, InputGroup } from '@blueprintjs/core';
import { render } from '@testing-library/react';

function App() {
  const adminUser = {
    azonosito: "bigot",
    jelszo: "admin"
  }

  const adminTomi = {
    azonosito: "tomi",
    jelszo: "kiraly"
  }

  const [user, setUser] = useState({ azonosito: ""});
  const [error, setError] = useState("");

  const Login = (details: any) => {
    console.log(details);

    if (details.azonosito == adminUser.azonosito && details.jelszo == adminUser.jelszo || details.azonosito == adminTomi.azonosito && details.jelszo == adminTomi.jelszo)
    {
      console.log("Bejelentkezve!");
      setUser({
        azonosito: details.azonosito
      })
    }
    else
    {
      console.log("Nem egyezik az adat!");
      setError("Nem egyezik az adat!");
    }
  }

  const Logout = () => {
    setUser({ azonosito: ""});
  }

  return (
    <div className="App">
      {(user.azonosito != "") ? (
      <div className="welcome" >
        <h2>Sikeres bejeletnkezés!</h2>
        <button onClick={Logout}>Logout</button>
      </div>
     ) : (
      <LoginForm Login={Login} error={error}/>
    )}
    </div>
  );
}

export default App;