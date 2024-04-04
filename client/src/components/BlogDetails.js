import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Box, InputLabel, TextField, Typography, Button } from "@mui/material";

const labelStyle = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

function BlogDetails() {
  const [blog, setBlog] = useState();
  const id = useParams().id;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prevSate) => ({
      ...prevSate,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:8000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data?.blog);
      setInputs({
        title: data.blog.title,
        description: data.blog.description,
      });
    });
  }, []);
  // console.log(blog);

  const sendRequest = async () => {
    const res = await axios
      .put(`http://localhost:8000/api/blog/update/${id}`, {
        title: inputs.title,
        description: inputs.description,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myblogs"));
  };

  return (
    <>
      <div>
        BLOGDETAIL
        {inputs && (
          <form onSubmit={handleSubmit}>
            <Box
              border={3}
              borderColor="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(105,9,121,1) 35%, rgba(255,0,168,1) 100%)"
              borderRadius={10}
              boxShadow="10px 10px 20px #ccc"
              padding={3}
              margin={"auto"}
              marginTop={3}
              marginBottom={3}
              display={"flex"}
              flexDirection={"column"}
              width={"80%"}
            >
              <Typography
                fontWeight={"bold"}
                padding={3}
                variant="h5"
                color={"blueviolet"}
                textAlign={"center"}
              >
                Edit / Update Your Blog
              </Typography>
              <InputLabel sx={labelStyle}>Title</InputLabel>
              <TextField
                name="title"
                onChange={handleChange}
                value={inputs.title}
                margin="normal"
                variant="outlined"
              />
              <InputLabel sx={labelStyle}>Description</InputLabel>
              <TextField
                name="description"
                onChange={handleChange}
                value={inputs.description}
                margin="normal"
                variant="outlined"
              />

              <Button
                sx={{ mt: 2, borderRadius: 4 }}
                variant="contained"
                color="warning"
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </form>
        )}
      </div>
    </>
  );
}

export default BlogDetails;
