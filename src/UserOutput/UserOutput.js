import React from "react";
import classes from './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>My name is {props.username}.</p>
      <p>Second paragraph</p>
    </div>
  )
};

export default userOutput;