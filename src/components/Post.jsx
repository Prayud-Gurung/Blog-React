import React, {useState} from "react";
import { Link } from 'react-router-dom'

function Post(props){
    const [showFullDesc, setShowFullDesc] = useState(false)
    let description = props.description

    function clickDescription(){
        setShowFullDesc(!showFullDesc)
    }
    if(!showFullDesc){
        description = description.substring(0, 150) + "..."
    }
    function deletePost(){
        props.deletePost(props.id)
    }

    return(
        <div className="post">
        <div className="post-icons">
            <button className="edit-btn">
              <img src="/images/icons/edit.svg"/>
              </button>
            <button className="delete-btn" onClick={deletePost}>
              <img src="/images/icons/delete.svg"/>
            </button>
        </div>
        <Link to={`/posts/${props.id}`}>
        <h2>{props.title}</h2>
        </Link>
        <p>{description}</p>

        <button onClick={clickDescription}>{!showFullDesc ? "Show More" : "Show Less"}</button>
    </div>
    )
}

export default Post