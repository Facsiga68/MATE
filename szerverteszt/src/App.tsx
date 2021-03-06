import React from 'react';
import Axios from "axios";
import './App.css';
import { Button, InputGroup, Icon } from "@blueprintjs/core";
import crypto from 'crypto';
import CSS from 'csstype';


export default class App extends React.Component {
  
  state = {
    fnev: '',
    fjelszo: '',
    lekerNev: '',
    rendszegazda: false,
    keresNev: ''
  };

  private AxiosTeszt = async () => {
      let result = await Axios({
      method: "POST", 
      data: {id: 431},
      url: process.env.REACT_APP_SERVER_URL+"joker/tesztszemely",
      withCredentials: true
    });
    console.log(result);
  }

  private SessionsTeszt = async () => {
    let result = await Axios({
      method: "POST", 
      url: process.env.REACT_APP_SERVER_URL+"joker/tesztsessions",
      withCredentials: true
    });
    console.log(result);
  }

  private SHA256Teszt = () => {
    console.log('TgdAhWK+24tgzgXB3s/jrRa3IjCWfeAfZAt+Rym0n84=');
    const hash = crypto.createHash('sha256').update('3').digest('base64');
    console.log(hash);
  }

  private BelepesTeszt = async () => {
      let FNEV=this.state.fnev;
      let FJELSZO=crypto.createHash('sha256').update(this.state.fjelszo).digest('base64');
      let result = await Axios({
        method: "POST", 
        url: process.env.REACT_APP_SERVER_URL+"joker/MATEazonositas",
        data: {FNEV: FNEV, FJELSZO: FJELSZO},
        withCredentials: true
      });
      console.log(result);
  }

  private LekeresTeszt = async () => {
    let FNEV=this.state.fnev;
    let RGAZDA=this.state.rendszegazda;
    let result = await Axios({
      method: "POST", 
      url: process.env.REACT_APP_SERVER_URL+"joker/FiokAdat",
      data: {FNEV: FNEV, RGAZDA: RGAZDA},
      withCredentials: true
    });
    console.log(result);
  }

  fNevValtozik = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({fnev: event.target.value})
  };

  fJelszoValtozik = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({fjelszo: event.target.value})
  };

  lekerNevValtozik = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({lekerNev: event.target.value})
  };

  RGazda = () => {
    this.setState({rendszegazda: !this.state.rendszegazda})
  }

  keresNevValtozik = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({keresNev: event.target.value})
  };

  private EgyszeruKereses = async () => {
    let nev=this.state.keresNev;
    let result = await Axios({
      method: "POST", 
      url: "http://localhost:8081/PhoneBook/Egyszeru_kereses",
      data: {nev: nev}
    });
    console.log(result);
  }

  private OsszetettKereses = async () => {
    let nev=this.state.keresNev;
    let result = await Axios({
      method: "POST", 
      url: process.env.REACT_APP_SERVER_URL+"PhoneBook/Osszetett_kereses",
      data: {nev: nev}
    });
    console.log(result);
  }

  render() {

    let stilus: CSS.Properties = {
      marginLeft: "20px"
    }
    let checkBox = this.state.rendszegazda ? "checkBox checkedIn" : "checkBox checkedOut";
    return (
      <div className="page">
        <div className="header">
            <Button intent="success" text="Axios teszt" onClick={this.AxiosTeszt} />
            <Button intent="success" text="Sessions teszt" onClick={this.SessionsTeszt} />
            <Button intent="success" text="SHA256 teszt" onClick={this.SHA256Teszt} style={stilus} />
            <InputGroup onChange={this.fNevValtozik} placeholder="Felhasználói név" style={{width: "100px", marginLeft: "20px"}} />
            <InputGroup onChange={this.fJelszoValtozik} placeholder="Jelszó" style={{width: "100px"}} />
            <Button intent="success" text="Belépés teszt" onClick={this.BelepesTeszt} />
            <InputGroup onChange={this.lekerNevValtozik} placeholder="Lekér név" style={{width: "100px", marginLeft: "20px"}} />
            <Button intent="success" text="Adatok lekérése" onClick={this.LekeresTeszt} />
            <button className={checkBox} style={{marginLeft: "5px", marginTop: "5px"}} onClick={this.RGazda.bind(this)}>{<Icon icon="small-tick"/>}</button>
        </div>
        <div className="header">
            <InputGroup onChange={this.keresNevValtozik} placeholder="Keresés ..." style={{width: "100px", marginLeft: "20px"}} />
            <Button intent="success" text="Egyszerű keresés" onClick={this.EgyszeruKereses} />
            <Button intent="success" text="Összetett keresés" onClick={this.OsszetettKereses} />
        </div>
        <div className="content">

        </div>
        <div className="footer">
          
        </div>
      </div> 
    );
  
  }
}