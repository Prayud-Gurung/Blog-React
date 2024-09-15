import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewEntry(props){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    const submitForm = (event) => {
        event.preventDefault()

        const newMemory = {
            title,
            description
        }
    
        props.addPost(newMemory)
        return navigate("/")

    }

    return(
        <form id="post-form" action="/create-post" method="post" onSubmit={submitForm}>
        <h1>Add a Memory</h1>

        <div className="form-group">
            <label htmlFor="post-title">Title:</label>
            <input type="text" name="title" value={title} onChange={(event) => setTitle(event.target.value)}/>
        </div>

        <div className="form-group">
            <label htmlFor="post-description">Description:</label>
            <textarea name="description" id="" cols="30" rows="10" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
        </div>

        <button type="submit"><h1>Add To Diary</h1></button>
    </form>
    )
}

export default NewEntry