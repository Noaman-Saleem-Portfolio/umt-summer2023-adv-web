import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "./Blog.module.css"

const Blogs = () => {



  return (
    <Container>
        <div className={styles.blog}>
          <div className={styles.blogImgDiv}>
            <img className={styles.blogImage} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
            <h4>Title of blog</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur accusamus id porro, voluptates tempore maiores ad error explicabo obcaecati dolorem animi suscipit iusto est esse mollitia ab vitae sed! Accusantium.
            Nulla autem aliquid recusandae corrupti minima minus expedita culpa in libero nobis voluptas adipisci quam ullam quos, neque cumque voluptatibus delectus ipsa modi qui nostrum voluptates. Deserunt illo autem porro!</p>
        </div>
    </Container>
  )
}

export default Blogs