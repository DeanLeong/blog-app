// allowing us to use React
import React from "react";
// we're acquiring our Comment component so we can use it in this component
import Comment from "./Comment";

// we're defining the name of our component
// and passing the props parameter to use props
function Post(props) {
  // render the contents of this return statement
  return (
    <div>
      <h4>{props.info.title}</h4>
      <h5>{props.info.author}</h5>
      <h6>{props.info.body}</h6>
      {/* arrayName.methodName((element) => cb) */}
      {props.info.comments.map((comment) => (
        // implicit return allows us to use parens and forego the return
        // this means we return whatever is inside the parentheses
        // this also means that we can't do any additional computation
        // or console.logs
        <Comment message={comment} />
      ))}
    </div>
  );
}

// we're using this Post somewhere else
export default Post;
