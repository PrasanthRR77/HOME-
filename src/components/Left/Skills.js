import React,{useContext,useState} from 'react';
import TextField  from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import CancelIcon from "@material-ui/icons/Cancel";

import { Contexts } from "../../contexts/Contexts"

function Skills() {

    const { skills, setSkills} = useContext(
        Contexts
    );

    const [input, setInput] = useState(""); 


    const addNewItem = (e) => {
      e.preventDefault();
      const copySkills = [...skills];
      copySkills.push(input);
      setSkills(copySkills);
      setInput("");
      console.log(skills)
    };
    
    const removeItem = (index) => {
      const updatedItems = [...skills]; 
      updatedItems.splice(index, 1);
      setSkills(updatedItems); 
    };


    return(
        <div className="">
        <h2>Skills</h2>

        <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={addNewItem}
    >

        <TextField
          id="outlined-basic"
          label="Skill"
          name="valueOne"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
          // onClick={addNewItem}
        >
          ADD SkILL
        </Button>
        </form>

        <ul type="none" className="list">
          {skills.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems} <CancelIcon style={{marginLeft:"5px"} } onClick={() => removeItem(sIndex)}/></li>;
          })}
        </ul>

            
            
        </div>
    )
}

export default Skills;