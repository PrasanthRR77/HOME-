import React,{useContext,useState} from 'react';
import TextField  from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
// import CancelIcon from '@mui/icons-material/Cancel';
import CancelIcon from "@material-ui/icons/Cancel";

import { Contexts } from "../../contexts/Contexts"

function Interests() {

    const { interests, setInterests} = useContext(
        Contexts
    );

    const [input, setInput] = useState(""); 


    const addNewItem = (e) => {
      e.preventDefault();
      const copySkills = [...interests];
      copySkills.push(input);
      setInterests(copySkills);
      setInput("");
      console.log(interests)
    };

    const removeItem = (index) => {
        const updatedItems = [...interests]; 
        updatedItems.splice(index, 1);
        setInterests(updatedItems); 
    };
    


    return(
        <div className="">
        <h2>Interests</h2>

        <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={addNewItem}
       >
            <TextField
            id="outlined-basic"
            label="Interests"
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
            //   onClick={addNewItem}
            >
            ADD
            </Button>

        </form>

        <ul type="none" className="list">
          {interests.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems} <CancelIcon style={{marginLeft:"5px"} } onClick={() => removeItem(sIndex)}/></li>;
          })}
        </ul>

            
            
        </div>
    )
}

export default Interests;