import React, { ChangeEvent } from 'react';
import ReactDOM from "react-dom";
import { Button, Card, Colors, InputGroup, Icon, MenuItem} from "@blueprintjs/core";
import { Popover2, IPopover2SharedProps, Classes} from '@blueprintjs/popover2';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import "./index.css";
import mate_logo_feher_hu from "./kepek/mate-logo-feher-hu.png";
import mate_logo_feher_en from "./kepek/mate-logo-feher-en.png";
import hu_flag from "./kepek/hu_flag.png";
import us_uk_flag from "./kepek/us_uk_flag.png"




let checkboxClasses = "checkBox checkedOut";
var egyszeruNevValue = "";
var isChecked = false;
var talalatok = 0;
const zaszlo = 'zaszlo';

const translations = {
  'hu': {
    'zaszlo_ikon' : hu_flag,
    'telefonkonyv_logo' : mate_logo_feher_hu,
    'kereses' : 'Keresés',
    'nev' : 'Név',
    'szervezeti_egyseg' : 'Szervezeti egység',
    'munkakor' : 'Munkakör',
    'hely' : 'Hely',
    'email' : 'Email',
    'telefon' : 'Telefon',
    'telefon_mellek' : 'Telefon Mellék',
    'megadott_szoveg' : 'A megadott szövegre a névjegy minden adatában keresünk (pl. Név, Telefonszám, Szobaszám stb.).',
    'reszletes_kereses' : 'Részletes Keresés',
    'vissza' : 'Vissza',
    'hibajelentes' : 'Hibajelentés',
    'nyelv' : 'Nyelv'
  },
  'en': {
    'zaszlo_ikon' : us_uk_flag,
    'telefonkonyv_logo' : mate_logo_feher_en,
    'kereses' : 'Search',
    'nev' : 'Name',
    'szervezeti_egyseg' : 'Organisational Unit',
    'munkakor' : 'Position',
    'hely' : 'Location',
    'email' : 'Email',
    'telefon' : 'Phone',
    'telefon_mellek' : 'Phone Extension',
    'megadott_szoveg' : 'We search the entire text of the contact for the given text (e.g. Name, Phone number, Room number etc.).',
    'reszletes_kereses' : 'Advanced Search',
    'vissza' : 'Back',
    'hibajelentes' : 'Error Report',
    'nyelv' : 'Language'
  }
};



export default class App extends React.Component {
  state = {
    isAdvanced: false,
    isCheckedState: false,
    egyszeruFilter: "",
    nyelv: translations.hu,
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
            {this.state.nyelv.kereses}
            </div>
          </div>
          <div className="keresoTartalom">
            <div style={{display: 'flex'}}>
              <div style={{marginTop: 4, marginRight: 5, fontWeight: "bold", fontSize: 16}}>{this.state.nyelv.nev}:</div>
              <InputGroup
                onChange={this.egyszeruTextboxChange}
                onKeyPress={this.egyszeruKeresesEnter}
              />
            </div>
            <div className="reszletesKereses">
              <button className={checkboxClasses} style={{marginRight: 5, marginTop: 8, float: 'left'}} onClick={this.checkboxChange.bind(this)}>{<Icon icon="small-tick"/>}</button>
              <div>{this.state.nyelv.megadott_szoveg}</div>
            </div>
          

            <Button
              icon={<Icon icon="search" color="#fff"/>}
              text={this.state.nyelv.kereses}
              style={{marginRight: 10, background: "#007548", color: '#fff'}}
              onClick={this.egyszeruKeresesGomb}
              color={Colors.WHITE}
            />
            <Button
              icon={<Icon icon="settings" color="#fff"/>}
              text={this.state.nyelv.reszletes_kereses}
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
                  <td className="kartyaBal"><div className="reszletesBal">{this.state.nyelv.nev}:</div></td>
                  <td className="kartyaJobb"> 
                    <InputGroup/>
                  </td>
                </tr>
                <tr>
                  <td className="kartyaBal"><div className="reszletesBal">{this.state.nyelv.szervezeti_egyseg}:</div></td>
                  <td className="kartyaJobb">
                    <InputGroup/>
                  </td>
                </tr>
                <tr>
                  <td className="kartyaBal"><div className="reszletesBal">{this.state.nyelv.munkakor}:</div></td>
                  <td className="kartyaJobb">
                    <InputGroup/>
                  </td>
                </tr>
                <tr>
                  <td className="kartyaBal"><div className="reszletesBal">{this.state.nyelv.hely}:</div></td>
                  <td className="kartyaJobb">
                    <InputGroup/>
                  </td>
                </tr>
                <tr>
                  <td className="kartyaBal"><div className="reszletesBal">{this.state.nyelv.email}:</div></td>
                  <td className="kartyaJobb">
                    <InputGroup/>
                  </td>
                </tr>
                <tr>
                  <td className="kartyaBal"><div className="reszletesBal">{this.state.nyelv.telefon}:</div></td>
                  <td className="kartyaJobb">
                    <InputGroup/>
                  </td>
                </tr>
                <tr>
                  <td className="kartyaBal"><div className="reszletesBal">{this.state.nyelv.telefon_mellek}:</div></td>
                  <td className="kartyaJobb">
                    <InputGroup/>
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
            <img src={this.state.nyelv.telefonkonyv_logo} style={{height: 120}}/>
          </div>
          <div>
            {this.chooseKeresesPanel()}
            
          </div>
          <div className="fejlecElem">
            <div style={{float: 'right'}}>
              <Popover2
                placement="bottom-end"
                minimal={true}
                interactionKind="click"
                content={
                  <div style={{height: 74}}>
                    <img src={hu_flag} style={{paddingTop: 5}} className={Classes.POPOVER2_DISMISS + " zaszlo"}  onClick={()=> this.setState({nyelv: translations.hu})}/><br/>
                    <img src={us_uk_flag} className={Classes.POPOVER2_DISMISS + " zaszlo"} onClick={()=> this.setState({nyelv: translations.en})}/>
                  </div>
                }
                >
                <Button rightIcon="caret-down" style={{padding: 5}}><img src={this.state.nyelv.zaszlo_ikon} style={{height: 20, marginBottom: -3}}/></Button>
              </Popover2>
              </div>
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
                      <td className="kartyaBal">{this.state.nyelv.munkakor}:</td>
                      <td className="kartyaJobb">{item.munkakor}</td>
                    </tr>
                    <tr>
                      <td className="kartyaBal">{this.state.nyelv.szervezeti_egyseg}:</td>
                      <td className="kartyaJobb">{item.szervezetiEgyseg}</td>
                    </tr>
                    <tr>
                      <td className="kartyaBal">{this.state.nyelv.hely}:</td>
                      <td className="kartyaJobb">{item.hely}</td>
                    </tr>
                    <tr>
                      <td className="kartyaBal">{this.state.nyelv.email}:</td>
                      <td className="kartyaJobb">{item.email}</td>
                    </tr>
                    <tr>
                      <td className="kartyaBal">{this.state.nyelv.telefon}:</td>
                      <td className="kartyaJobb">{item.kozvetlenSzam}</td>
                    </tr>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lablec">
          {this.state.nyelv.hibajelentes}: helpdesk@uni-mate.hu
        </div>
      </div>
    )
  }
} 
    