import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';


import styles from "./Blog.module.css"

const Blogs = ({title,imageUrl,description,numberOfLikes, blogId}) => {



  return (
    <Container>
        <div className={styles.blog}>
          <div className={styles.blogImgDiv}>
            <img className={styles.blogImage} src={imageUrl} alt="" />
          </div>
            <h4>{title}</h4>
            <p>{description}</p>
            <Button as={NavLink} to={`/blog/${blogId}`} variant="success">Details</Button>{' '}
            {/* <NavLink className="btn btn-success" to={`/blog/${blogId}`}>Details</NavLink> */}
        </div>
    </Container>
  )
}

export default Blogs