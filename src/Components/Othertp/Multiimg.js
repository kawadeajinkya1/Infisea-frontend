import React, { useState } from 'react';

import { Link, useNavigate,s } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Nav from '../Nav/Nav';
import Ftr from '../Footer/Ftr';
axios.defaults.withCredentials=true;

const Multiimg = () => {
/*
    const [images, setImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
  
    const handleImageChange = (e) => {
      const files = (e.target.files);
      setSelectedImages(files);
    };
  
    const handleUpload = async () => {
      console.log(selectedImages)
      const formData = new FormData();
      //selectedImages.forEach((image) => {
        formData.append('selectedImages', selectedImages);
     // });
  
      try {
        await axios.post('http://localhost:8000/upload', formData);
        alert('Images uploaded successfully');
      //  setImages([...images, ...selectedImages]);
      } catch (error) {
        console.error('Error uploading images: ', error.message);
      }
    };
  */
  

    
    const [selectedFiles, setselectedFiles] = useState([]);

    const handleFileChange = (e) => {
      setselectedFiles([...e.target.files]);
    };
  
    const handleUpload = async () => {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append('images', file);
      });
  
      try {
        const response = await axios.post('http://localhost:8000/upload', formData);
        alert('Images uploaded successfully');
        console.log(response.data);
      } catch (error) {
        console.error('Error uploading files: ', error);
      }
    };


  return (
    <div>
{/*}
<h1>Multer imgs</h1>
      <input type="file" multiple onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Images</button>
      {images.map((image, index) => (
        <img key={index} src={`http://localhost:8000/uploads/${image.filename}`} alt={`Uploaded ${index}`} />
      ))}
      */}

         <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>




    </div>
  )
}

export default Multiimg