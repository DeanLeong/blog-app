// we want to use React
import React from "react";
import Kevin from "./Kevin";

// our component is called Comment
function Comment(props) {
  // display a list item with the text being passed down
  // inside of the message prop
  return (
    <div>
      <li>{props.message}</li>
      <Kevin message={props.message} />
    </div>
  );
}

export default Comment;
