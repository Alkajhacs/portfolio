import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import {Fade } from "react-reveal";

class Contact extends Component {
  render() {
    return (
      <Fade Right duration={1700}>
      
      <div className="contact-body">
        <Grid className="contact-grid">
         
          <Cell col={6}>
            <h2>Alka Jha</h2>
            <img style={{height: '250px'}} src="images/image.jpg" alt="avatar" />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              My interest in programming started since I was in 12th standard.
              I dream to be an expert full-stack web developer so
              that I can build professional and useful websites that will
              increase my knowledge and skills.I want to enhance my knowledge by working
              on different technologies.
            </p>
          </Cell>
          <Cell col={6}>
            <br></br>
            <br></br>
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list">
                  
              <List>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}><i className="fa fa-phone-square" aria-hidden='true'></i><a href= "tel:+918920374455" style={{ color:"blue" }}>+91 8920374455</a></ListItemContent>
                  </ListItem>
                  <ListItem>
                      <ListItemContent className="contact-mail"><i className="fa fa-envelope" aria-hidden='true'></i><a href="mailto:alkajha25092000@gmail.com" style={{ color:"blue" }}>alkajha25092000@gmail.com</a></ListItemContent>
                  </ListItem>
              </List>
              </div>
          </Cell>
        </Grid>
      </div>
      </Fade>
    );
  }
}

export default Contact;
