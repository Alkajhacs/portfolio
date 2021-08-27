import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import {Fade} from "react-reveal"

class Resume extends Component {
  render() {
    return (
      <Fade Right duration={1700}>
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/image.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Alka Jha</h2>
            <h4 style={{ color: "grey" }}>Full stack developer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              This is Alka Jha.I have completed my Bachelor's Degree from Delhi University.
              Currently working as an intern in TrakInvest as a Full Stack developer.
              I have also done some internships related to content enhancement.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>A-54/B, Kh.No. 6/14,Rajeev Nagar, Begumpur, New Delhi- 110086 (India)</p>
            <h5>Phone</h5>
            <p><a href= "tel:+918920374455" style={{ color:"blue" }}>+91 8920374455</a></p>
            <h5>Email</h5>
            <a href="mailto:alkajha25092000@gmail.com" style={{ color:"blue" }}><p>alkajha25092000@gmail.com</p></a>
            <h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1EnO5Gu3zIBBpnpLb_B8lQkWEzooyOomi/view?usp=drivesdk"
            >
              Click to download CV
            </a>
            </h5>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2018}
              endYear={2021}
              schoolName={"Shyama Prasad Mukherji College for Womens(Delhi University)"}
              degreeName={"B.Sc. hons. Computer Science "}
              percentage={"81.1395%"}
            />
            <Education
              startYear={2017}
              endYear={2018}
              schoolName={"Indra Prastha Convent Senior Secondary School"}
              degreeName={"Higher Secondary Education"}
              percentage={"84.83%"}
            />
             <Education
              startYear={2015}
              endYear={2016}
              schoolName={"Indra Prastha Convent Senior Secondary School"}
              degreeName={"Secondary Education"}
              percentage={"87.4%"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Internships</h2>
            <Experience
              startYear={"June 2021"}
              endYear={"Present"}
              jobName={"Full stack developer (TrakInvest)"}
              jobDesc={"Done projects like Employee management, Course management using microservices and API gateway"}
            />

            <Experience
              startYear={"May 2021"}
              endYear={"Present"}
              jobName={"Content enhancement(Jruma App)"}
              jobDesc={
                "Content writting on data mining."
              }
            />

            <Experience
              startYear={"September 2019"}
              endYear={"November 2019"}
              jobName={"Content Writer(Final Revise)"}
              jobDesc={
                "Content writting about operating system."
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={75} />
            <Skills skill={"ReactJS"} progress={50} />
            <Skills skill={"Angular"} progress={50} />
            <Skills skill={"C++"} progress={70} />
            <Skills skill={"Java"} progress={70} />
            <Skills skill={"My SQL"} progress={70} />
            <Skills skill={"Postgres"} progress={60} />
            <Skills skill={"Javascript"} progress={60} />
            <Skills skill={"NestJs"} progress={60} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Campus Activities</h2>
            <h6>Worked as a teacher and mentor in Bharat Uday NGO as a NSS Volunteer.</h6>
            <h6>Coordinated in Creative Team of Annual Technical Festival, SANGTARAASH 2019.</h6>
            <h6>Volunteered in the event “Fandom Quiz” of Annual Technical Festival, SANGTARAASH 2019.</h6>
          </Cell>
        </Grid>
      </div>
      </Fade>
    );
  }
}

export default Resume;
