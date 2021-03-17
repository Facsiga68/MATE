import React from 'react';
import Axios from "axios";
import './App.css';
import { Button, InputGroup, Icon } from "@blueprintjs/core";
//import { Tooltip2 } from "@blueprintjs/popover2";
import crypto from 'crypto';
import CSS from 'csstype';

import './login.css';
import logo from './images/logo.png';

export default class App extends React.Component {
  
  state = {
    fnev: '',
    fjelszo: '',
    lekerNev: '',
    rendszegazda: false,
    keresNev: ''
  };

  private BelepesTeszt = async () => {
      let FNEV=this.state.fnev;
      let FJELSZO=crypto.createHash('sha256').update(this.state.fjelszo).digest('base64');
      let result = await Axios({
        method: "POST", 
        url: process.env.REACT_APP_SERVER_URL+"joker/MATEazonositas",
        data: {FNEV: FNEV, FJELSZO: FJELSZO},
        withCredentials: true
      });
      console.log(result.data);
      if (result.data.BELEPESEGYEZES == true)
      {
        alert("Sikeres bejelentkezés!");
      }
      else
      {
        alert("Sikertelen bejelentkezés!");
      }
  }

  fNevValtozik = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({fnev: event.target.value})
  };

  fJelszoValtozik = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({fjelszo: event.target.value})
  };

  RGazda = () => {
    this.setState({rendszegazda: !this.state.rendszegazda})
  }

  render() {

    let stilus: CSS.Properties = {
      marginLeft: "20px"
    }
    let checkBox = this.state.rendszegazda ? "checkBox checkedIn" : "checkBox checkedOut";
    return (
      <div className="page">

        <div className="header">
        <h1>IT Jogosultságkezelő Rendszer</h1>
        </div>
 
        <div className="content">
          <div className="logo">
            <img src={logo}/>
          </div>
          <div className="login">
            <InputGroup onChange={this.fNevValtozik} placeholder="Felhasználói név" style={{width: "200px", height: "30px", border: "solid", borderWidth: "thin", marginBottom: "5px"}} />
            <InputGroup onChange={this.fJelszoValtozik} placeholder="Jelszó" style={{width: "200px", height: "30px", border: "solid", borderWidth: "thin"}} />
            <Button intent="success" text="Belépés" onClick={this.BelepesTeszt} style={{height: "25px", width: "200px", margin: "20px", backgroundColor: "seagreen", color: "white"}}/>
            <p style={{color: "#D52222", maxWidth: "500px", textAlign: "center", margin: "20px"}}>Munkavállalók esetében a MATE azonosító 3 betű 4 szám alakú, Hallgatók esetében az azonosító egyezik a NEPTUN kóddal.</p>
            <p style={{maxWidth: "500px", textAlign: "center"}}>Ha korábban már használta a webmail, wifi, vagy elearning rendszereket, akkor az ezen rendszerekben használt jelszóval kísérelje meg itt is a bejelentkezést, ne az alapértelmeztt jelszóval!</p>
          </div>
        </div>

        <div className="footer">
          <p style={{textAlign: "center"}}>Hibabejelentés: helpdesk@uni-mate.hu</p>
        </div>
        
      </div> 
    );
  
  }
}