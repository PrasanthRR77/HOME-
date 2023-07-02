import React, { useContext } from "react";
import Header from "./Header";
import Professional from "./Professional";
import Education from "./Education";
import AdditionalSkills from "./AdditionalSkills";

import Top from "./Top";
import Skills from "./Skills";
import Projects from "./Projects";
import Edu from "./Edu";
import Interests from "./Interests";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import myClasses from "./Left.module.css";
import logo from "../../assets/logo.png";
import { ResumeContext } from "../../contexts/ResumeContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  rootAdd: {
    background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #F2F3F4",
    color: "white",
    height: 30,
    textAlign: "center",
    fontSize: 10,
    marginTop: 15,
    marginRight: 20,
    fontWeight: 700,
  },
  rootRemove: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 30,
    textAlign: "center",
    minWidth: 130,
    fontSize: 10,
    marginTop: 15,
    marginRight: 20,
    fontWeight: 700,
  },

  headerLink: {
    color: "#0298B8",
    marginLeft:"5px",
    border:"1px #0298B8 solid",
    fontSize:"12px"
  },
});

function Left() {
  const { control, addFakeData, removeFakeData } = useContext(ResumeContext);
  const classes = useStyles();



  return (
    <div className="left">

        <div className="logodiv" >
            <img className="logos" src={logo} alt="logo"  />
           
        </div>


     

      <div className="">
        <Router>
          <div className={myClasses.topLeft}>

            <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/top"
            >
              Header
            </Button>

            <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/skills"
            >
              Skills
            </Button>

            <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/projects"
            >
              Projects
            </Button>

            <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/edu"
            >
              Education
            </Button>

            <Button 
             className={classes.headerLink}
             component={Link}
             to="/basic/interests"
           >
             INTERESTS
           </Button>

          




            {/* <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/professional"
            >
              Experience
            </Button> */}


            {/* <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/education"
            >
              Education
            </Button> */}

          


            {/* <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/additional"
            >
              Skills
            </Button> */}
          </div>


          <div >

           </div>
          <div>
            <hr className={myClasses.hr} />
            <div className={myClasses.formsSection}>
             
              <Switch>

              <Route exact path="/">
                  <Top />
                </Route>

                <Route path="/basic/header">
                  <Top />
                </Route>
                <Route path="/basic/professional">
                  <Professional />
                </Route>
                <Route path="/basic/education">
                  <Education />
                </Route>
                <Route path="/basic/additional">
                  <AdditionalSkills />
                </Route>


                <Route path="/basic/top">
                  <Top />
                </Route>
                <Route path="/basic/skills">
                  <Skills />
                </Route>
                <Route path="/basic/projects">
                  <Projects />
                </Route>
                <Route path="/basic/edu">
                  <Edu />
                </Route>
                <Route path="/basic/interests">
                  <Interests />
                </Route>

                

              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Left;
