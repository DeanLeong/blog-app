// import React to work with JSX
import React from "react";
// i want to use Greetings and Post in this component
import Greetings from "./Greetings";
import Post from "./Post";
// use the css from this file (sort of like a link tag)
import "./App.css";

// we're declaring the name of our component
// we add the props parameter if we are passing props to this component
function App() {
  // creating a post object to pass a prop to the Post component
  const post = {
    title: "Help, my connection is dying!",
    author: "The Poor Soul(eil)",
    body: "I'm a sad poltergeist :(",
    comments: ["It sounds robotic", "He can explain!"],
  };

  // React please render the contents of the return statement
  return (
    <div>
      <Greetings name={"Dani"} favoriteColor={"Black"} />
      <Post info={post} />
    </div>
  );
}

// i want to use this component somewhere else
export default App;

/* 
const props = {name: "Dani", favoriteColor: "Black"};
Greetings(props)
*/
