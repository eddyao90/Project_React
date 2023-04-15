import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import * as api from '../../services/PostService';
import useStyles from './styles';

const Form = ({ currentUser }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', selectedFile: '' });
  const post = useSelector((state) => (currentUser ? state.posts.find((message) => message._id === currentUser) : null));
  const classes = useStyles();
  

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    api.createPost(postData);
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentUser ? `Editing "${post.title}"` : 'Leave a message'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline minRows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      </form>
    </Paper>
  );
};

export default Form;