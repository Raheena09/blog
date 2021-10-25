import * as React from "react";
import "./App";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import firebase from "firebase/compat";
import { useState, useEffect } from "react";
import fire from "./fire";
import Nav from "./Components/Nav";
import { Comment } from '@babel/types';

function Hero(props) {
  const { handleLogout, username } = props;

  const [displayData, setDisplayData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comment, setComment] = useState("");


  console.log(username);

  useEffect(() => {
    setTimeout(function () {
      getData();
    }, 500);
  }, [true]);

  function getData() {
    const firestore = firebase.firestore();
    return firestore.collection("blog").onSnapshot((snapshot) => {
      console.log(snapshot);

      snapshot.forEach(function (value) {
        // console.log(value.data());
        displayData.push(value.data());
      });
      setDisplayData(displayData);
      setIsLoading(false);
    });
  }

  function handleComment(){
    localStorage.setItem("comment",JSON.stringify(comment));
      const getcmt= JSON.parse(localStorage.getItem("comment"));
      setComment(getcmt);
console.log("bjhbjhb");
  }

  return (
    <>
      <section className="hero">
        <Nav handleLogout={handleLogout} />

        <section className="dashboard-body" style={{ padding: "50px 100px" }}>
          <div className="status-area" style={{ padding: "0px 100px" }}>
            <div className="button-area">
              <Link to="/createBlog">
                <Button variant="outlined" color="primary">CREATE A BLOG</Button>
              </Link>
            </div>
          </div>

          <div className="blog-area" style={{ padding: "50px 100px" }}>
            {displayData.map((data, index) => (
              <Card
                sx={{ minWidth: 275 }}
                style={{ backgroundColor: "#636060", margin: "20px" }}
              >
                <CardContent key={index}>
                  <Typography variant="h5" component="div">
                    {data.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Blog by:{data.username}
                  </Typography>
                  <Typography variant="body2">{data.body}</Typography>
                </CardContent>
                <CardActions>
                  <div className="comment-area" style={{ display:"flex"}}>
                    <div className="comment-box">
                    <Box
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                      }}
                    >
                      
                      <TextField onChange={handleComment}fullWidth label="Comment" id="fullWidth" />
                    </Box>
                    </div>
                    <div className="comment-button">
                    <Button variant="text"  >Post Comment</Button>
                    </div>
                  </div>
                </CardActions>
              </Card>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default Hero;
