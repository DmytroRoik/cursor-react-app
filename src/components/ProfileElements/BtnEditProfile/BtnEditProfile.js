import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  button:{
    borderRadius:'50px',
    width:'70px',
    height:'70px',
  },
  edit:{
    color:'blue',
    paddingLeft:'10px',
    paddingTop:'10px',
  }
 
}));

export default function BtnEditProfile() {
  const classes = useStyles();
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const uploadImage = async (e) => {
    const files = e.target;
    const data = new FormData();
    data.append('file', files[1]);
    setLoading(true);
    const res = await fetch(
      'http://ec2-35-181-53-65.eu-west-3.compute.amazonaws.com:3000/users/uploadImage',
      {
        method: 'POST',
        body: data,
      },
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
  };
  return (
    <div className="btnEditProfile">
        <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
       <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="gray"
          className={classes.button}
          startIcon={ <div className={classes.edit}><EditIcon /></div> }
            onClick={uploadImage}
            >
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      {loading ? (
        <h3>Loading....</h3>
      ) : (
        <img
          src={image}
          style={{ width: '300px' }}
        />
      )}

    </div>
    </div>
  );
}
