import React,{useContext} from 'react';
import TextField from "@material-ui/core/TextField";

import { Contexts } from "../../contexts/Contexts"

function Top() {

    const {name, setName, email, setEmail, phone, setPhone ,address, setAddress, linkedIn, setLinkedIn, github, setGitHub, portfolio, setPortfolio} = useContext(
        Contexts
    );
    


    return(
        <div className="">
        <h2>Header</h2>

        <TextField
          id="outlined-basic"
          label="Name"
          name="valueOne"
          variant="outlined"
          value={name}
          inputProps={{
            style: {textTransform: "uppercase"}
          }}
          onChange={(e) => setName(e.target.value.toUpperCase())}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          type="email"
          label="Email"
          name="valueTwo"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          type="number"
          label="Phone No"
          name="valueOne"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Address"
          name="valueTwo"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        
      <TextField
          id="outlined-basic"
          label="Github"
          name="valueTwo"
          variant="outlined"
          value={github}
          onChange={(e) => setGitHub(e.target.value)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />


        <TextField
          id="outlined-basic"
          label="LinkedIn"
          name="valueOne"
          variant="outlined"
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />



        <TextField
          id="outlined-basic"
          label="Portfolio"
          name="valueTwo"
          variant="outlined"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
            
            
        </div>
    )
}

export default Top;