import React,{useContext, useRef} from 'react';


import { ReflexContainer, ReflexElement } from 'react-reflex';
import html2pdf from 'html2pdf.js';

import { Link } from 'react-router-dom';
// import TopP from "Paper/TopP"
import { Contexts } from "../../contexts/Contexts"
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import "./page.css";


import Avatar from "@material-ui/core/Avatar";
import ClearIcon from "@material-ui/icons/Clear";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Tooltip from "@material-ui/core/Tooltip";

import { makeStyles } from "@material-ui/core/styles";
import { green, pink } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    "& > *": {
      margin: 0,
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    margin: 10,
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
    margin: 10,
  },
}));


function Page() {
    const { name, setName, email, setEmail, phone, setPhone ,address, setAddress, linkedIn, setLinkedIn, github, setGitHub,
      portfolio, setPortfolio, skills, setSkills, projects, setProjects,  education, setEducation, interests, setInterests} = useContext( Contexts);

    const classes = useStyles();

    const contentRef = useRef(null);

    const handleDownload = () => {
      const content = contentRef.current;
  
      const options = {
        margin: 0, // Set margin to half inch on all sides
        filename: name,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: {
          unit: "in",
          format: [8.27, 11.69], // Set the PDF format to A4 size
          orientation: "portrait",
        },
      };
      
      html2pdf().set(options).from(content).save();
    };



    const handleDelete = () => {
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setLinkedIn("");
      setGitHub("");
      setPortfolio("");
      setProjects([]);
      setSkills([]);
      setEducation([]);
      setEducation([]);
      setInterests([]);

    }

  return (

    
  
    <div className='full'>
       {/* <PrintProvider> */}
     



 

       <div className=" mainPage"  ref={contentRef} id="pdf-content">



      <div size="A4" className="page" >

      <div style={{textAlign:"center"}}>
          <h2> {name}</h2>
          <div className="details">
              <p> {email} </p>
              <p><b>{phone} </b> </p>
              <p style={{color:"gray"}}> {address } </p>
          </div>

          <div className="profile">
              <a  href={github}> Github</a>
              <a  href={linkedIn}> LinkedIn</a>  
              <a  href={portfolio}> Portfolio</a>  
          </div>

          {/* <p> {valueTwo}</p> */}
      </div>

      <hr />


      <div className="skills" style={{textAlign:"center"}}>
        <h5 style={{textAlign:"center" , marginTop:"7px"}}>SKILLS</h5>
        {skills.map((subItems, sIndex) => {
          return <p key={sIndex}> {subItems}</p>;
        })}
      </div>

      <hr />

      <div  >
        <h5 style={{textAlign:"center" , marginTop:"7px"}}>PROJECTS</h5>
        

        <div className="projects">
        {projects.map((item, index) => (
        

          <div className="project" key={index}>
            <h5>{item.name} </h5>
            <hr className='b'/>

            <div className="profile">
              <a  href={item.live}>Live URL </a>
              <p>  |</p>
              <a  href={item.github}>Github</a>  
            </div>

            <p>{item.explanation}</p>
            <ul>
              <li>{item.technologies}</li>
              <li>{item.features}</li>
            </ul>

          </div>
        

        ))}
      </div>
      </div>  



      <hr width="5px"/>



      <div >
        <h5 style={{textAlign:"center" , marginTop:"7px"}}>EDUCATION</h5>
        <div className="edu projects" >
        {education.map((item, index) => (
        

          <div key={index} className="project">
            <div className='tops'>
              <h5>{item.course} </h5>

              <div className='inline rightd' >
                <p>{item.start +" - " + item.end  } </p>
                {/* <p>{item.end }</p> */}
            </div>

            </div>
            
            <div className='inline'>
              <p>{item.institution + ", "+item.city}</p>
             
            </div>
            <ul>
              <li>{item.details}</li>
            </ul>

          </div>
        ))}
      </div>
      </div>

      <hr width="5px"/>

      <div className="skills" style={{textAlign:"center"}}>
        <h5 style={{textAlign:"center" , marginTop:"7px"}}>INTERESTS</h5>
        {interests.map((subItems, sIndex) => {
          return <p key={sIndex}> {subItems}</p>;
        })}
      </div>




      </div>

      </div>

      <div className="icon">
        <Tooltip  title="Save to PDF" placement="right">
          <Avatar onClick={handleDownload} className={classes.green}>
            <PictureAsPdfIcon />
          </Avatar>
        </Tooltip>

        <Tooltip title="Delete All Data" placement="right">
            <Avatar onClick={handleDelete} className={classes.pink}>
              <ClearIcon />
            </Avatar>
          </Tooltip>

     </div>

    </div>
     
   
  );
}

export default Page;