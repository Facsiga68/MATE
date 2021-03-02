import React, { ChangeEvent } from 'react';
import ReactDOM from "react-dom";
import { ButtonGroup, Button, Colors, InputGroup, Icon} from "@blueprintjs/core";
import "./index.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import mate_logo_feher from "./kepek/mate-logo-feher.png"

export default class RicsiVagyok extends React.Component {

  state = {
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
        nev: "Nagy Barnabás Ádám",
        munkakor: "Egyetemi tanársegéd",
        szervezetiEgyseg: "Borászati Tanszék",
        hely: "1118 Budapest, Ménesi út 45., D épület I. emelet",
        kozvetlenSzam:	"+36-(1)-305-7312", telefonMellek: "+36-(1)-305-7100 ext. 6312",
        email: "Nagy.Balazs@szie.hu"
      }
    ]
  }

  //textboxba való írás: textboxValue egyenlő lesz a textboxba írt szöveg értékével
  textboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({textboxValue: event.target.value})
  };

  //Keresés gomb megnyomása: filter egyenlő lesz a textBoxValue értékével
  gombKereses = () => {
    this.setState({filter: this.state.textboxValue})
  }

  //Mégsem gomb megnyomása: filter és textboxValue értékét kitörli
  gombMegsem = () => {
    this.setState({filter: ""})
    this.setState({textboxValue: ""})
  }

  render() {
    const { filter, emberek } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredEmberek = emberek.filter(item => {
      if (filter != ""){
        return (item.nev.toLowerCase().includes(lowercasedFilter))
      }
    });

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
                  />
                </div>
                <div style={{paddingTop: 5, paddingBottom: 5}}>A megadott szövegre a névjegy minden adatában keresünk (pl. név, telefonszám, szobaszám stb.).</div>
                <Button
                  icon={<Icon icon="search" color="#fff"/>}
                  text="Keresés"
                  style={{marginRight: 10, background: "#007548", color: '#fff'}}
                  onClick={this.gombKereses}
                  color={Colors.WHITE}
                />
              </div>
            </div>
          </div>
          <div className="fejlecElem">Nyelv</div>
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
    