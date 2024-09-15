import React from "react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Homepage from "../HomePage.jsx"
import Layout from "../layouts/Layout.jsx"
import NewEntry from "./NewEntry.jsx"
import ErrorPage from "../ErrorPage.jsx"
import PostPage, { dataLoader } from "../PostPage.jsx"

function App() {

  const addPost = async (newMemory) => {
    const res = await fetch("/api/memories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMemory)
    })
    return
  }

  const deletePost = async (id) => {
    const res = await fetch(`/api/memories/${id}`, {
      method: "DELETE"
    })
    return
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage deletePost={deletePost}/>} />
      <Route path="/addpost" element={<NewEntry addPost={addPost} />} />
      <Route path="/posts/:id" element={<PostPage />} loader={dataLoader} />

      <Route path="*" element={<ErrorPage />} />
    </Route>

  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
