import React, { Component } from "react";
import {Fade, Slide} from "react-reveal";

class Aboutme extends Component {
  render() {
    return (
      <Slide left duration= {1000}>
      <div style={{ textAlign: "center", marginLeft: 'auto', color: '#000000', marginRight: 'auto', marginTop: '100px', width: '60%', background: '#87ceeb', padding: '20px'}}>
        <Fade bottom duration= {1000}>
        <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}> Alka Jha</h1>
        <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>
          This is Alka Jha.I have completed my graduation in B.SC. (hons.) Computer Science in 2021. I am very 
          hard working and enthusiast to learn new things. I dream to be an expert Web developer so that I
          can build professional Websites.I do all my work with dedication and concentration.
         </p>
         <p style={{textAlign:"left"}}>
         <h3> Hobbies</h3>
         <li>Playing Badminton</li>
         <li>Listening music</li>
         <li>Playing sudoku</li>
         <li>Teaching</li>
         </p>
         </Fade>
      </div>
      </Slide>
    );
  }
}

export default Aboutme;
