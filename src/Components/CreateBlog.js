import React from "react";
import "../App.css";
import { useState } from "react";
import fire from "../fire";
import { useHistory } from "react-router-dom";
import firebase from "firebase/compat";
import Nav from "./Nav";


function CreateBlog() {

  const firestore = fire.firestore();

  const history = useHistory();

  const [blog, setBlog] = useState({
    body: "",
    title: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setBlog((obj) => {
      return {
        ...obj,
        [name]: value,
      };
    });
  };


  const postBlog = (e) => {
    e.preventDefault();
    firestore.collection("blog").add({
      title: blog.title,
      body: blog.body,
      username:localStorage.getItem("username")
    });

    history.push("/");
    // console.log("jbfd");
  };

 
  



  return (
    <div>
      <section className="hero">
        <Nav/>
        <section className="login">
          <div className="loginContainer" style={{ paddingTop: "0px" }}>
            <label>Title</label>
            <input
              type="text"
              autoFocus
              required
              id="title"
              name="title"
              label="title"
              fullWidth
              variant="outlined"
              value={blog.title}
              onChange={inputEvent}
              margin="dense"
            />
           

            <label>Body</label>
            <input
              type="text"
              required
              id="body"
              name="body"
              label="body"
              fullWidth
              variant="outlined"
              value={blog.body}
              onChange={inputEvent}
              margin="dense"
            />

            <div className="btnContainer">
              <button onClick={postBlog} >Post Blog</button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default CreateBlog;
