// i want to use React in this file
import React from "react";

// declaring the name of our React component
// and passing the props parameter so we can pass information
function Greetings(props) {
  // we're seeing the contents of the props object
  console.log(props);
  // render the contents of this return statement
  // if you want to use JS (such as props.name) within your return statement
  // you need to add curlies around said variable / value
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <h3>My fave color is {props.favoriteColor}!</h3>
    </div>
  );
}

// exporting the component to use somewhere else
export default Greetings;
