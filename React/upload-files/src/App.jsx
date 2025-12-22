import axios from 'axios';
import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('');
  const [photos, setPhotos] = useState([].fill(null, 0, 2));

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleFileChange = (idx, e) => {
    const updatedFiles = [...photos];
    updatedFiles[idx] = e.target.files[0];
    setPhotos(updatedFiles);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    photos.forEach((photo) => {
      formData.append("photos", photo);
    });

    const { data } = await axios.post(
      'http://localhost:3000/upload-file',
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(data.data);
    setName('');
    setPhotos([]);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChangeName} />
      <br />
      <br />
      <input
        type="file"
        onChange={(e) => handleFileChange(0, e)}
      />
      <br />
      <br />
      <input
        type="file"
        onChange={(e) => handleFileChange(1, e)}
      />
      <br />
      <br />
      <input
        type="file"
        onChange={(e) => handleFileChange(2, e)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App;