import React, { ChangeEvent } from 'react';
import ReactDOM from "react-dom";
import { ButtonGroup, Button, Colors, InputGroup, Icon} from "@blueprintjs/core";
import "./index.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import mate_logo_feher from "./kepek/mate-logo-feher.png"

var mateblue = "#005f92";

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
      <div className="keret" style={{background: "#007548"}}>
        <div className="fejlec">
          <img src={mate_logo_feher} style={{height: 120}}/>
          <div className="cim">Telefonkönyv</div>
        </div>
        <div className="tartalomKartyak">
          <div className="kartyak">
          <div className="kartya kartyaKereses">
            <div className="kartyaNev kartyaNevKereses"><h2>Keresés</h2></div>
            <div className="kartyaTartalom kartyaTartalomKereses">
              <div>
                <div style={{float: 'left', marginTop: 5, marginRight: 5}}>Név:</div>
                <InputGroup
                  value={this.state.textboxValue}
                  onChange={this.textboxChange}
                  style={{width: 250}}
                  placeholder="Keresés név alapján"
                />
                <div style={{paddingTop: 10, paddingBottom: 10}}>A megadott szövegre a névjegy minden adatában keresünk (pl. név, telefonszám, szobaszám stb.).</div>
              </div>
              <div>
              <Button
                icon={<Icon icon="search" color="#fff"/>}
                text="Keresés"
                style={{marginRight: 10, background: mateblue, color: '#fff'}}
                onClick={this.gombKereses}
                color={Colors.WHITE}
              />
              <Button
                icon={<Icon icon="delete" color="#fff"/>}
                text="Mégsem"
                style={{background: '#bd2b30',
                color: '#fff',
                marginRight: 5}}
                onClick={this.gombMegsem}
              />
              </div>
            </div>
          </div>
            {filteredEmberek.map(item => (
              <div className="kartya">
                <div className="kartyaNev"><h2>{item.nev}</h2></div>
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
          <div className="lablecszoveg">
            Hibabejelentés: helpdesk@uni-mate.hu
          </div>
        </div>
      </div>
    )
  }
} 
    