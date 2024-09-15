import React, { useState, useEffect } from "react";
import Post from "./Post.jsx"
// import memories from "../memories.json"


function Posts(props) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasPost, setHasPost] = useState(false)

  useEffect(()=>{
    const fetchMemories = async function () {
      try {
        const res = await fetch("/api/memories")
        const data = await res.json()
        setPosts(data)
        setHasPost(true)
      } catch (err) {
        console.log("Erro fetching data", err);
      }finally{
        setLoading(false)
      }
    }
    fetchMemories()
  }, [])

  function EmptyMemory() {
    return (
      <div>
        <h1 id="my-memories-text">Add Memories</h1>
        <button id="add-memory-btn">Add Entry</button>
      </div>
    )
  }

  function FillMemory(item, index) {
    return (
      <Post key={index} id={item.id} title={item.title} description={item.description} deletePost={props.deletePost}/>
    )
  }

  return (
    <div id="posts">
      <h1 id="my-memories-text">My Memories</h1>
      {loading && <h1>Loading...</h1>}
      {hasPost ? posts.map(FillMemory) : <EmptyMemory />}
    </div>
  )
}

export default Posts