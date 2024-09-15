import React, { useEffect, useState } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
function PostPage(){
    const post = useLoaderData()
    // const [post, setPost] = useState(null)
    // const {id} = useParams()

    // useEffect(()=>{
    //     const fetchPost = async function(){
    //         try{
    //             let result = await fetch(`/api/memories/${id}`)
    //             let data = await result.json()
    //             setPost(data)
    //         }catch(err){
    //             console.log("Error fetching files", err);
    //         }
    //     }
    //     fetchPost()
    // }, [])

    function MyPost(){
        return(
            <div>
                <h1>{post.title}</h1> <h2>{post.description}</h2>
            </div>
        )
}
  return (
    <div>
        {post && <MyPost />}
    </div>
  )
}

const dataLoader = async({ params })=>{
    const res = await fetch(`/api/memories/${params.id}`)
    const data = await res.json()
    return data
}
export default PostPage
export {dataLoader}