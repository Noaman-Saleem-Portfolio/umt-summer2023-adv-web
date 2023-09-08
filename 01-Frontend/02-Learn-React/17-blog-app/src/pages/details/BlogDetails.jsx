import React, { useEffect, useState } from 'react'
import styles from "./BlogDetails.module.css"
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const [blog,setBlog]=useState(null)
    const [error,setError] = useState(false)
    const params = useParams()
    // console.log(params);

    useEffect(() => {
        const getBlogDetails = async () => {
            try {
                const response = await axios(`http://localhost:8000/api/v1/blog/${params.id}`)
                console.log(response.data.blog);
                setBlog(response.data.blog)

            } catch (error) {
                console.log(error);
                setError(error.message)
            }
        }
        getBlogDetails()
    },[])
  return (
    <Container>
        <div className={styles.blog}>
          <div className={styles.blogImgDiv}>
            <img className={styles.blogImage} src={blog?.imageUrl} alt="image of blog" />
          </div>
            <h4>{blog?.title}</h4>
            <p>{blog?.description}</p>
            {error && <p style={{color:"red"}}>{error}</p>}
        </div>
    </Container>
  )
}

export default BlogDetails