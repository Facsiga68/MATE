import React,  { useState } from 'react';
import './App.css';

import "@blueprintjs/core/lib/css/blueprint.css";
import { Button, ButtonGroup, FormGroup, InputGroup } from '@blueprintjs/core';
import { render } from '@testing-library/react';

function Belepve(props: any) {
  return <h1>Belépve.</h1>;
}

function Kilepve(props: any) {
  return <h1>Kilépve.</h1>;
}

function JelenlegiAllapot(props: any) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Belepve />;
    }
    return <Kilepve />;
}

  class App extends React.Component {

  state= {
    belepve: 0,
    kilepve: 1,
    filter: "",
    felhasznalok: [
      {
        id: "id",
        jelszo: "jelszo"
      },
    ]
  }

  gombBelepes = () => {
    if (<JelenlegiAllapot isLoggedIn = {true}/>)
    {
      alert("Sikerult belepni")
    }
    else
    {
      alert("Nem sikerult belepni")
    }
  }

  render() {

    return (
      <div className="Login">

        <FormGroup>

          <InputGroup
          style={{width: "200px"}}
          type="text"
          >
          </InputGroup>

          <InputGroup
          style={{width: "200px"}}
          type="password"
          >
          </InputGroup>

          <ButtonGroup>
            <Button
            onClick={this.gombBelepes}
            >Belépés</Button>
            <Button>Elfelejtett jelszó</Button>
          </ButtonGroup>

        </FormGroup>

        <JelenlegiAllapot isLoggedIn={false} />

      </div>
    )
  }
}

export default App;