import React, { ChangeEvent } from 'react';
import ReactDOM from "react-dom";
import {  Button, ButtonGroup, Colors, InputGroup, Icon} from "@blueprintjs/core";

import "./index.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import mate_logo_feher from "./kepek/mate-logo-feher.png";
import hu_flag from "./kepek/hu_flag.png";
import us_uk_flag from "./kepek/us_uk_flag.png"

export default class App extends React.Component {
  state = {
    black: true,
    textboxValue: "",
    filter: "",
    emberek: [
      {
        nev: "Nagy Balázs",
        munkakor: "Egyetemi tanársegéd",
        szervezetiEgyseg: "Borászati Tanszék",
        hely: "1118 Budapest, Ménesi út 45., D épület I. emelet B terem",
        kozvetlenSzam:	"+36-(1)-305-7312", telefonMellek: "+36-(1)-305-7100 ext. 6312",
        email: "Nagy.Balazs@szie.hu"
      },
      {
        nev: "Kovács Imre",
        munkakor: "Egyetemi tanársegéd",
        szervezetiEgyseg: "Borászati Tanszék",
        hely: "1118 Budapest, Ménesi út 45., D épület I. emelet",
        kozvetlenSzam:	"+36-(1)-305-7312", telefonMellek: "+36-(1)-305-7100 ext. 6312",
        email: "Nagy.Balazs@szie.hu"
      },
      {
        nev: "Juhász Miklós",
        munkakor: "Egyetemi tanársegéd",
        szervezetiEgyseg: "Borászati Tanszék",
        hely: "1118 Budapest, Ménesi út 45., D épület I. emelet",
        kozvetlenSzam:	"+36-(1)-305-7312", telefonMellek: "+36-(1)-305-7100 ext. 6312",
        email: "Nagy.Balazs@szie.hu"
      },
      {
        nev: "Nagy Zsolt",
        munkakor: "Egyetemi tanársegéd",
        szervezetiEgyseg: "Borászati Tanszék",
        hely: "Gyöngyös D épület I. emelet",
        kozvetlenSzam:	"+36-(1)-305-7312", telefonMellek: "+36-(1)-305-7100 ext. 6312",
        email: "Nagy.Balazs@szie.hu"
      },
      {
        nev: "Bella Gábor",
        munkakor: "Egyetemi tanársegéd",
        szervezetiEgyseg: "Borászati Tanszék",
        hely: "1118 Budapest, Ménesi út 45., D épület I. emelet",
        kozvetlenSzam:	"+36-(1)-305-7312", telefonMellek: "+36-(1)-305-7100 ext. 6312",
        email: "Nagy.Balazs@szie.hu"
      },
      {
        nev: "Kis János",
        munkakor: "Egyetemi tanársegéd",
        szervezetiEgyseg: "Borászati Tanszék",
        hely: "1118 Budapest, Ménesi út 45., D épület I. emelet",
        kozvetlenSzam:	"+36-(1)-305-7312", telefonMellek: "+36-(1)-305-7100 ext. 6312",
        email: "Nagy.Balazs@szie.hu"
      },
      {
        nev: "Nagy Barnabás Ádám",
        munkakor: "Egyetemi tanársegéd",
        szervezetiEgyseg: "Borászati Tanszék",
        hely: "1118 Budapest, Ménesi út 45., D épület I. emelet",
        kozvetlenSzam:	"+36-(1)-305-7312", telefonMellek: "+36-(1)-305-7100 ext. 6312",
        email: "Nagy.Balazs@szie.hu"
      },
      {
        nev: "Nagy Barnabás Ádám",
        munkakor: "Egyetemi tanársegéd",
        szervezetiEgyseg: "Borászati Tanszék",
        hely: "1118 Budapest, Ménesi út 45., D épület I. emelet",
        kozvetlenSzam:	"+36-(1)-305-7312", telefonMellek: "+36-(1)-305-7100 ext. 6312",
        email: "Nagy.Balazs@szie.hu"
      },
      {
        nev: "Teszt1",
        munkakor: "Egyetemi tanársegéd",
        szervezetiEgyseg: "Borászati Tanszék",
        hely: "1118 Budapest, Ménesi út 45., D épület I. emelet",
        kozvetlenSzam:	"+36-(1)-305-7312", telefonMellek: "+36-(1)-305-7100 ext. 6312",
        email: "teszt1@gmail.com"
      },
      {
        nev: "Teszt2",
        munkakor: "Egyetemi tanársegéd",
        szervezetiEgyseg: "Borászati Tanszék",
        hely: "1118 Budapest, Ménesi út 45., D épület I. emelet",
        kozvetlenSzam:	"+36-(1)-305-7312", telefonMellek: "+36-(1)-305-7100 ext. 6312",
        email: "email2@gmail.com"
      }
    ]
  }




  textboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({textboxValue: event.target.value})
  };

  gombKereses = () => {
    this.setState({filter: this.state.textboxValue})
  }

  gombMegsem = () => {
    this.setState({filter: ""})
    this.setState({textboxValue: ""})
  }

  keresesEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.gombKereses()
    }
  }

  changeColor(){
    this.setState({black: !this.state.black})
  }

  

  render() {
    const { filter, emberek } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredEmberek = emberek.filter(item => {
      if (lowercasedFilter != ""){
        return (
          item.nev.toLowerCase().includes(lowercasedFilter) ||
          item.email.toLowerCase().includes(lowercasedFilter) ||
          item.hely.toLowerCase().includes(lowercasedFilter) ||
          item.kozvetlenSzam.toLowerCase().includes(lowercasedFilter) ||
          item.munkakor.toLowerCase().includes(lowercasedFilter) ||
          item.szervezetiEgyseg.toLowerCase().includes(lowercasedFilter)
        )
      }
    });

    let checkBox = this.state.black ? "checkBox checkedIn" : "checkBox checkedOut";

    return (
      <div className="keret">
        <div className="fejlec">
          <div className="fejlecElem">
            <img src={mate_logo_feher} style={{height: 120}}/>
            <div className="cim">Telefonkönyv</div>
          </div>
          <div>
            <div className="kereso">
              <div className="keresoFejlec">
                <div className="keresoTartalom">
                Keresés
                </div>
              </div>
              <div className="keresoTartalom">
                <div style={{display: 'flex'}}>
                  <div style={{marginTop: 4, marginRight: 5, fontWeight: "bold", fontSize: 16}}>Név:</div>
                  <InputGroup
                    value={this.state.textboxValue}
                    onChange={this.textboxChange}
                    placeholder="Keresés név alapján"
                    onKeyPress={this.keresesEnter}
                  />
                </div>
                <div className="reszletesKereses">
                  <button className={checkBox} style={{marginRight: 5, marginTop: 8, float: 'left'}} onClick={this.changeColor.bind(this)}>{<Icon icon="small-tick"/>}</button>
                  <div>A megadott szövegre a névjegy minden adatában keresünk (pl. név, telefonszám, szobaszám stb.).</div>
                </div>

                <Button
                  icon={<Icon icon="search" color="#fff"/>}
                  text="Keresés"
                  style={{marginRight: 10, background: "#007548", color: '#fff'}}
                  onClick={this.gombKereses}
                  color={Colors.WHITE}
                />
                <Button
                  icon={<Icon icon="settings" color="#fff"/>}
                  text="Részletes Keresés"
                  style={{marginRight: 10, background: "#007548", color: '#fff'}}
                  onClick={this.gombKereses}
                  color={Colors.WHITE}
                />
              </div>
            </div>
          </div>
          <div className="fejlecElem">
              <img src={hu_flag} className="zaszlo"/>
              <img src={us_uk_flag} className="zaszlo"/>
            </div>
        </div>
          <div className="tartalom">
            <div className="kartyak">
              {filteredEmberek.map(item => (
                <div className="kartya">
                  <div className="kartyaNev">{item.nev}</div>
                  <div className="kartyaTartalom">
                    <table>
                      <tr>
                        <td className="kartyaBal">Munkakör:</td>
                        <td className="kartyaJobb">{item.munkakor}</td>
                      </tr>
                      <tr>
                        <td className="kartyaBal">Szervezeti Egység:</td>
                        <td className="kartyaJobb">{item.szervezetiEgyseg}</td>
                      </tr>
                      <tr>
                        <td className="kartyaBal">Hely:</td>
                        <td className="kartyaJobb">{item.hely}</td>
                      </tr>
                      <tr>
                        <td className="kartyaBal">Email:</td>
                        <td className="kartyaJobb">{item.email}</td>
                      </tr>
                      <tr>
                        <td className="kartyaBal">Telefonszám:</td>
                        <td className="kartyaJobb">{item.kozvetlenSzam}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lablec">
              Hibabejelentés: helpdesk@uni-mate.hu
          </div>
      </div>
    )
  }
} 
    