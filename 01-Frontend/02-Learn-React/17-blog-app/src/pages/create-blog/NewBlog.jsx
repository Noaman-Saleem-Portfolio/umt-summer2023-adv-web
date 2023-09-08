import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./NewBlog.module.css";
import axios from "axios";

const NewBlog = () => {
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [imageUrl,setImageUrl]=useState("")
    const [error,setError]=useState(false)

    const navigate = useNavigate()

    // console.log(title);

    const handleClick =async (e) => {
        e.preventDefault()
        // console.log(title);
        // console.log(imageUrl);
        // console.log(description);

        try {
            await axios.post("http://localhost:8000/api/v1/blog/new",{title,imageUrl,description})
            navigate("/blogs")
        } catch (error) {
            // console.log(error)

            if(error.code === "ERR_NETWORK"){
                setError(error.message)
            } else {

                setError(error.response.data.message)
            }
        }
    }
  return (
    <div className={styles.formDiv}>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="image url">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" placeholder="Image URL" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description}/>
        </Form.Group>

        
        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Form>
      {error && <h5 style={{color:"red"}}>{error}</h5>}
    </div>
  );
};

export default NewBlog;
