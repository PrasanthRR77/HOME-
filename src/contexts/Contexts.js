import React, { useState } from "react";
import { createContext } from "react";

export const Contexts = createContext({});

function ContextProvider(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGitHub] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [interests, setInterests] = useState([]);

  const contextValue = { name, setName, email, setEmail, phone, setPhone ,address, setAddress, linkedIn, setLinkedIn, github, setGitHub,
    portfolio, setPortfolio, skills, setSkills, projects, setProjects,  education, setEducation, interests, setInterests};

  return (
    <Contexts.Provider value={contextValue}>
      {props.children}
    </Contexts.Provider>
  );
}

export default ContextProvider;

