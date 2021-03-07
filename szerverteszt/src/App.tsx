import React from 'react';
import Axios from "axios";
import './App.css';
import { Button } from "@blueprintjs/core";


export default class App extends React.Component {
  private AxiosTeszt = async () => {
    //let result = await Axios({method: "POST", url: process.env.REACT_APP_SERVER_URL+"joker/tesztszemely", data: {id: 345}});
    let result = await Axios({
      method: "POST", 
      url: " http://localhost/8081/joker/tesztszemely",
      data: {id: 250}
    });

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