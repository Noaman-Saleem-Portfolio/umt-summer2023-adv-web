import React, { useEffect, useState } from 'react'
import Blog from "../../components/Blog/Blog"
import { Container } from 'react-bootstrap'
import axios from 'axios'

const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    const [error,setError] = useState(false)

    useEffect(() => {
        const getAllBlogsApi = async () => {
            try {
                const response =await axios.get("http://localhost:8000/api/v1/blog/all")
                // console.log(response);
                setBlogs(response.data.blogs)
            } catch (error) {
                console.log(error);
                setError(error.message)
            }
           
        }
        getAllBlogsApi()
    },[])

    if(blogs.length === 0){
        return (
        <Container>
            <h1>Loading....</h1>
            {error && <p>Error occured {error}</p>}
        </Container>
        )
    }

  return <div>
    {blogs.map((blog) => <Blog title={blog.title} imageUrl={blog.imageUrl} description={blog.description} numberOfLikes={blog.numberOfLikes} blogId={blog._id} />)}
  </div>
    
  
}

export default Blogs