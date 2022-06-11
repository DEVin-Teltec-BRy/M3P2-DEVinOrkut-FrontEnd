import React, {useState, useMemo} from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import { setHeaders, url } from '../../api';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { closeModal, submitted } from '../../Store/rootSlice';
import { useParams } from 'react-router'
import camera from '../../Assets/camera.svg';
import './styles.css';


export default function UploadImageCommunity({history}) {
    // const [thumbnail,setThumbnail]= useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const { communityid } = useParams()

    const preview = useMemo(()=>{
        return imageUpload ? URL.createObjectURL(imageUpload):null;
    }, [imageUpload])

    async function handleSubmit(event){
        event.preventDefault();

        const data = new FormData();



        data.append('imageUpload', imageUpload);

       await axios.post(
        url.uploadImageCommunity,
       data,
        setHeaders()
      );
      history.push('/community');
       return

    }
  

  return(
    <form onSubmit={handleSubmit}>
        <label id="imageUpload" 
        style= {{backgroundImage: `url(${preview})`}}
        className={imageUpload ? 'has-imageUpload': ''}>
            <input type="file" onChange={event =>setImageUpload(event.target.files[0])}></input>
            <img src={camera} alt="Select img"></img>
        </label>


<button type="submit" className="btn">Publicar</button>

</form>)}


