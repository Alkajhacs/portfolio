import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import {Slide} from "react-reveal";

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto"}}>

        <Grid className="homepage-grid">
          <Cell col={12}>
            <Slide left duration={1000}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="images/image.jpg"
                alt="Alka"
              />
            </div>
            </Slide>
            <Slide up duration={1000}>
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr/>
              <p>
                HTML | CSS | JAVASCRIPT | POSTGRES | MYSQL | TYPESCRIPT | JAVA | C++ 
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://facebook.com/alka.jha.98478"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-facebook-official"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://github.com/Alkajhacs"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/alka-jha-718052216"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
            </Slide>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
