import React, { ChangeEvent } from 'react';
import ReactDOM from "react-dom";
import {  Button, Card, Colors, InputGroup, Icon} from "@blueprintjs/core";

import "./index.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import mate_logo_feher from "./kepek/mate-logo-feher.png";
import hu_flag from "./kepek/hu_flag.png";
import us_uk_flag from "./kepek/us_uk_flag.png"



let checkboxClasses = "checkBox checkedOut";
var egyszeruNevValue = "";
var isChecked = false;
var talalatok = 0;

export default class App extends React.Component {
  state = {
    isAdvanced: false,
    isCheckedState: false,
    egyszeruFilter: "",
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

  egyszeruTextboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    egyszeruNevValue = event.target.value
  };

  egyszeruKeresesGomb = () => {
    this.setState({egyszeruFilter: egyszeruNevValue})
    isChecked = this.state.isCheckedState
    talalatok = 0
  }

  egyszeruKeresesEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.egyszeruKeresesGomb()
    }
  }

  checkboxChange(){
    this.setState({isCheckedState: !this.state.isCheckedState})
    console.log(isChecked)
  }

  chooseKeresesPanel() {
    if (this.state.isAdvanced == false){
      return(
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
                onChange={this.egyszeruTextboxChange}
                onKeyPress={this.egyszeruKeresesEnter}
              />
            </div>
            <div className="reszletesKereses">
              <button className={checkboxClasses} style={{marginRight: 5, marginTop: 8, float: 'left'}} onClick={this.checkboxChange.bind(this)}>{<Icon icon="small-tick"/>}</button>
              <div>A megadott szövegre a névjegy minden adatában keresünk (pl. név, telefonszám, szobaszám stb.).</div>
            </div>
          

            <Button
              icon={<Icon icon="search" color="#fff"/>}
              text="Keresés"
              style={{marginRight: 10, background: "#007548", color: '#fff'}}
              onClick={this.egyszeruKeresesGomb}
              color={Colors.WHITE}
            />
            <Button
              icon={<Icon icon="settings" color="#fff"/>}
              text="Részletes Keresés"
              style={{marginRight: 10, background: "#007548", color: '#fff'}}
              onClick={()=> this.setState({isAdvanced: true})}
              color={Colors.WHITE}
            />
            </div>
          </div>
        )}
    else {
      return(
        <div className="reszletesKerso">
          <div className="keresoFejlec">
            <div className="keresoTartalom">
              Részletes Keresés
            </div>
          </div>
          <div className="keresoTartalom">
            <div style={{paddingBottom: 5}}>
              <table>
                <tr>
                  <td className="kartyaBal"><div className="reszletesBal">Név:</div></td>
                  <td className="kartyaJobb"> 
                    <InputGroup
                    value={egyszeruNevValue}
                    onChange={this.egyszeruTextboxChange}
                    onKeyPress={this.egyszeruKeresesEnter}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="kartyaBal"><div className="reszletesBal">  Szervezeti egység:</div></td>
                  <td className="kartyaJobb">
                    <InputGroup
                    value={egyszeruNevValue}
                    onChange={this.egyszeruTextboxChange}
                    onKeyPress={this.egyszeruKeresesEnter}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="kartyaBal"><div className="reszletesBal">Munkakör:</div></td>
                  <td className="kartyaJobb">
                    <InputGroup
                    value={egyszeruNevValue}
                    onChange={this.egyszeruTextboxChange}
                    onKeyPress={this.egyszeruKeresesEnter}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="kartyaBal"><div className="reszletesBal">Hely:</div></td>
                  <td className="kartyaJobb">
                    <InputGroup
                    value={egyszeruNevValue}
                    onChange={this.egyszeruTextboxChange}
                    onKeyPress={this.egyszeruKeresesEnter}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="kartyaBal"><div className="reszletesBal">Email:</div></td>
                  <td className="kartyaJobb">
                    <InputGroup
                    value={egyszeruNevValue}
                    onChange={this.egyszeruTextboxChange}
                    onKeyPress={this.egyszeruKeresesEnter}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="kartyaBal"><div className="reszletesBal">Telefon:</div></td>
                  <td className="kartyaJobb">
                    <InputGroup
                    value={egyszeruNevValue}
                    onChange={this.egyszeruTextboxChange}
                    onKeyPress={this.egyszeruKeresesEnter}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="kartyaBal"><div className="reszletesBal">Telefon Mellék:</div></td>
                  <td className="kartyaJobb">
                    <InputGroup
                    value={egyszeruNevValue}
                    onChange={this.egyszeruTextboxChange}
                    onKeyPress={this.egyszeruKeresesEnter}
                    />
                  </td>
                </tr>
              </table>
            </div>
              <Button
              icon={<Icon icon="search" color="#fff"/>}
              text="Keresés"
              style={{marginRight: 10, background: "#007548", color: '#fff'}}
              onClick={this.egyszeruKeresesGomb}
              color={Colors.WHITE}
            />
            <Button
              icon={<Icon icon="undo" color="#fff"/>}
              text="Vissza"
              style={{marginRight: 10, background: "#007548", color: '#fff'}}
              onClick={()=> this.setState({isAdvanced: false})}
              color={Colors.WHITE}
            />
            </div>
          </div>
    )}
  }

  render() {
    const { egyszeruFilter, emberek } = this.state;
    const lowercasedFilter = egyszeruFilter.toLowerCase();
    const filteredEmberek = emberek.filter(item => {
      if (lowercasedFilter != ""){
        if (isChecked == true){
          return (
            item.nev.toLowerCase().includes(lowercasedFilter) ||
            item.email.toLowerCase().includes(lowercasedFilter) ||
            item.hely.toLowerCase().includes(lowercasedFilter) ||
            item.kozvetlenSzam.toLowerCase().includes(lowercasedFilter) ||
            item.munkakor.toLowerCase().includes(lowercasedFilter) ||
            item.szervezetiEgyseg.toLowerCase().includes(lowercasedFilter)
          )
        }
        else{
          return (item.nev.toLowerCase().includes(lowercasedFilter))
        }
      }
    });

    checkboxClasses = this.state.isCheckedState ? "checkBox checkedOut" : "checkBox checkedIn";

    return (
      <div className="keret">
        <div className="fejlec">
          <div className="fejlecElem">
            <img src={mate_logo_feher} style={{height: 120}}/>
            <div className="cim">Telefonkönyv</div>
          </div>
          <div>
            {this.chooseKeresesPanel()}
            
          </div>
          <div className="fejlecElem">
            <Card style={{float: 'right', padding: 5}}>
              <div style={{height: 40}}>
                <img src={hu_flag} className="zaszlo hu"/>
                <img src={us_uk_flag} className="zaszlo eng"/>
              </div>
            </Card>
          </div>
        </div>
          <div className="tartalom">
            <div>Találatok száma: {talalatok}</div>
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
    