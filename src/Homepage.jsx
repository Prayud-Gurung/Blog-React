import React from "react";
import Posts from "./components/Posts.jsx"

function Homepage(props){
    return(
        <>
        <Posts deletePost={props.deletePost}/>
        </>
    )
}

export default Homepage