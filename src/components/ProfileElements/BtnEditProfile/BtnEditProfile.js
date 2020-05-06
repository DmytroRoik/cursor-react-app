import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


export default function BtnEditProfile() {
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
      <IconButton aria-label="edit" color="primary" name="file" onClick={uploadImage}>
        <EditIcon fontSize="large" />
      </IconButton>
      {loading ? (
        <h3>Loading....</h3>
      ) : (
        <img
          src={image}
          style={{ width: '300px' }}
        />
      )}

    </div>
  );
}
