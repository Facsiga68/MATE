import React from 'react';
import Axios from "axios";
import './App.css';
import { Button } from "@blueprintjs/core";


export default class App extends React.Component {
    private AxiosTeszt = async () => {
      const adat = new URLSearchParams();
      adat.append('id', "400");
        let result = await Axios({method: "POST", url: "http://localhost:8081/joker/tesztszemely", data: {id: 345}});
        console.log(result);
    }

  render() {

    return (
      <div className="page">
        <div className="header">
            <Button intent="success" text="Axios teszt" onClick={this.AxiosTeszt} />
        </div>
        <div className="content">

        </div>
        <div className="footer">
          
        </div>
      </div> 
    );
  
  }
}