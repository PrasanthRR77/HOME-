import React,{useContext,useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import CancelIcon from "@material-ui/icons/Cancel";

import { Contexts } from "../../contexts/Contexts"

function Top() {

    const {education, setEducation} = useContext(
        Contexts
    );


    const [newItem, setNewItem] = useState({ course: "", institution: "" , city:"", details:"", start:"", end : ""});

    const saveInput = (e) => {
      const { name, value } = e.target;
      setNewItem((prevItem) => ({
        ...prevItem,
        [name]: value
      }));
    };
  

    const addNewItem = (e) => {
      e.preventDefault();
      setEducation((prevItems) => [...prevItems, newItem]);
      setNewItem({ course: "", institution: "" , city:"", details:"", start:"", end : ""});
    };


    const removeItem = (index) => {
      const updatedItems = [...education]; 
      updatedItems.splice(index, 1);
      setEducation(updatedItems); 
    };
    


    return(
        <div className="">
        <h2>Education</h2>

    <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={addNewItem}
    >
         <TextField
          id="outlined-basic"
          label="Course"
          name="course"
          variant="outlined"
          value={newItem.course}
          onChange={saveInput}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Institution"
          name="institution"
          variant="outlined"
          value={newItem.institution}
          onChange={saveInput}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City"
          name="city"
          variant="outlined"
          value={newItem.city}
          onChange={saveInput}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Start Date"
          name="start"
          variant="outlined"
          value={newItem.start}
          onChange={saveInput}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="End Date"
          name="end"
          variant="outlined"
          value={newItem.end}
          onChange={saveInput}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        
        <TextField
          id="outlined-basic"
          label="Details"
          name="details"
          variant="outlined"
          multiline
          rows={4}
          inputProps={{
            style: {resize: "both"}
          }}
          value={newItem.details}
          onChange={saveInput}
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


        <ul type="none"  className="list">
            {education.map((item, index) => (
            <li key={index} onClick={() => removeItem(index)} >  
                {item.course} 
                <CancelIcon style={{marginLeft:"5px"} } />
            </li>
            ))}
        </ul>     
            
        </div>
    )
}

export default Top;