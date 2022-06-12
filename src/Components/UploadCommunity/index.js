import React, {useState, useMemo} from 'react';
import {Alert, Button} from 'react-bootstrap';
import axios from 'axios';
import { setHeaders, url } from '../../api';

import camera from '../../Assets/camera.svg';
import './styles.css';
import {useParams} from "react-router";


export const UploadImageCommunity = ({history}) =>{
  const [imageUpload, setImageUpload] = useState(null);
  const [isSuccess, setSuccess] = useState(false);
    const { communityid } = useParams();

    const preview = useMemo(()=>{
        return imageUpload ? URL.createObjectURL(imageUpload):null;
    }, [imageUpload])

    async function handleSubmit(event){
        event.preventDefault();
        setSuccess(false);

        const data = new FormData();



        data.append('imageUpload', imageUpload);

      const result = await axios.post(
        url.uploadImageCommunity,
       data,
         communityid
      );
      history.push('/community');

       return result.data;

    }
  

  return(
    <>
    {!isSuccess &&(
    <form onSubmit={handleSubmit}>
        <label id="imageUpload" 
        style= {{backgroundImage: `url(${preview})`}}
        className={imageUpload ? 'has-imageUpload': ''}>
            <input type="file" onChange={event =>setImageUpload(event.target.files[0])}></input>
            <img src={camera} alt="Select img"></img>
        </label>


        <Button variant="primary" type="submit" className="mb-3 mt-2">
            Enviar
        </Button>

</form>)}
{isSuccess && (
  <Alert variant="success" className="m-3">
    Upload feito com sucesso
  </Alert>
)}

</>
);
};
