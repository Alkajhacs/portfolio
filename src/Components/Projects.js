import React, { Component } from "react";
import {Slide} from "react-reveal";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

   
    this.toggleCategories = () => {
      if (this.state.activeTab === 0) {
        return (
          <Slide left duration={1000}>
          <div className="projects-grid">
            {/* Chat-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "250px",
                  background: "url(images/portfolio.png) center / cover",
                }}
              >
                Portfolio template
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a sample portfolio template using html,css, Animations.
              </CardText>
            </Card>
            {/* Employee */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "250px",
                  background: "url(images/employee.png) center / cover",
                }}
              >
                Employee management
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
               This is a employee management system that includes,
               searching, sorting, crud operations using javascript, html.
              </CardText>
              
            </Card>
            {/* Course */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "250px",
                  background: "url(images/course.jpg) center / cover",
                }}
              >
                Course management
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
              This is a course management system based on Microservice-Gateway approach,
              used RabbitMQ as message broker, NestJs in backend and for storing data
              postgres database is used with angular Frontend.
              </CardText>
              
            </Card>
          </div>
          </Slide>
        );
      } 
    };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Projects</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
