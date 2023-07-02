import React,{useContext,useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import CancelIcon from "@material-ui/icons/Cancel";

import { Contexts } from "../../contexts/Contexts"

function Projects() {

    const {projects, setProjects} = useContext(
        Contexts
    );


    const [newItem, setNewItem] = useState({ name: "", live: "" , github:"", explanation:"", technologies:"", features:""});

    const saveInput = (e) => {
      const { name, value } = e.target;
      setNewItem((prevItem) => ({
        ...prevItem,
        [name]: value
      }));
    };
  

    const addNewItem = (e) => {
      e.preventDefault();
      setProjects((prevItems) => [...prevItems, newItem]);
      setNewItem({  name: "", live: "" , github:"", explanation:"", technologies:"", features:""});
    };
    

    const removeItem = (index) => {
      const updatedItems = [...projects]; 
      updatedItems.splice(index, 1);
      setProjects(updatedItems); 
    };


    return(
        <div className="">
        <h2>Projects</h2>

    <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={addNewItem}
    >

        <TextField
          id="outlined-basic"
          label="Name"
          name="name"
          variant="outlined"
          value={newItem.name}
          onChange={saveInput}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Live Url"
          name="live"
          variant="outlined"
          value={newItem.live}
          onChange={saveInput}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Github Link"
          name="github"
          variant="outlined"
          value={newItem.github}
          onChange={saveInput}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        
        <TextField
          id="outlined-basic"
          label="Details"
          name="explanation"
          variant="outlined"
          value={newItem.explanation}
          onChange={saveInput}
          multiline
          rows={4}
          inputProps={{
            style: {resize: "both"}
          }}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Description 1"
          name="technologies"
          variant="outlined"
          value={newItem.technologies}
          onChange={saveInput}
          multiline
          rows={4}
          inputProps={{
            style: {resize: "both"}
          }}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        
        <TextField
          id="outlined-basic"
          label="Description 2"
          name="features"
          variant="outlined"
          value={newItem.features}
          onChange={saveInput}
          multiline
          rows={4}
          inputProps={{
            style: {resize: "both"}
          }}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />  

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          // onClick={addNewItem}
        >
          ADD 
        </Button> 
        </form>

        <ul type="none"  className="list">
            {projects.map((item, index) => (
            <li key={index} onClick={() => removeItem(index)} >  
                {item.name} 
                <CancelIcon style={{marginLeft:"5px"} } />
            </li>
            ))}
        </ul>     
            
        </div>
    )
}

export default Projects;