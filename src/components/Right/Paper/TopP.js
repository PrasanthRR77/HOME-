import React,{useContext} from 'react';
import { Contexts } from "../../contexts/Contexts"

function TopP() {
    const { valueOne, valueTwo} = useContext( Contexts);
  
    return (

      <div>
        <p>Value One: {valueOne}</p>
        <p>Value Two: {valueTwo}</p>
      </div>

    );
}

export default TopP;
