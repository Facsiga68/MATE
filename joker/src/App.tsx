import React,  { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

import "@blueprintjs/core/lib/css/blueprint.css";
import { Button, ButtonGroup, FormGroup, InputGroup } from '@blueprintjs/core';
import { Column, Table, Cell } from "@blueprintjs/table";
import "@blueprintjs/table/lib/css/table.css";
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

  const cellRenderer = (rowIndex: number) => {
    return <Cell>{"aaa"}</Cell>
  };

  const users = [
    {nev: "Tamas", kor: "25", hely: "Gyongyos"},
    {nev: "David", kor: "20", hely: "Matraszolos"},
    {nev: "Richard", kor: "22", hely: "Gyongyos"}
  ]

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
      <div className="fooldal" >
        <h2>Sikeres bejelentkezés!</h2>

        <div className="fejlec">
          <ButtonGroup>
            <Button text="Fiók adatok"></Button>
            <Button text="Szolgáltatások"></Button>
            <Button text="Jelszó változtatás"></Button>
            <Button onClick={Logout}>Kilépés</Button>
          </ButtonGroup>
        </div>

        <div className="tartalom">
    
          <Table numRows={10}>
            <Column name="megnevezes" cellRenderer={cellRenderer}/>
            <Column name="adat"/>
          </Table>

          <Table numRows={3}>
            <Column name="megnevezes"/>
            <Column name="adat" cellRenderer={cellRenderer}/>
            <Column/>
          </Table>

        </div>

      </div>
     ) : (
      <LoginForm Login={Login} error={error}/>
    )}
    </div>
  );
}

export default App;