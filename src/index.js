import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const FileUploadButton = () => {
  const [file, setFile] = useState(null);

  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    axios
      .post('/upload', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <input type='file' onChange={handleFileSelect} />
      <button onClick={handleFormSubmit}>Upload</button>
    </div>
  );
};

ReactDOM.render(<FileUploadButton />, document.getElementById('root'));
