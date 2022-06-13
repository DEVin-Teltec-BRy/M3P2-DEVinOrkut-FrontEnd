import React, {useState} from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import { setHeaders, url } from '../../api';

import camera from '../../Assets/camera.svg';
import './styles.css';
import {useParams} from "react-router";


export const UploadImageCommunity = () =>{
  const [imageUpload, setImageUpload] = useState(null);
  const [isSuccess, setSuccess] = useState(false);
    const [ setError] = useState(false);
    const { communityid } = useParams();

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        TransformFileData(file);

        setError(false);
        setSuccess(false);
    };

    const TransformFileData = (file) => {
        const reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImageUpload(reader.result);
            };
        } else {
            setImageUpload('');
        }
    };

    async function handleSubmit(event){
        event.preventDefault();
        setSuccess(false);

      const result = await axios.post(
        `${url.uploadImageCommunity}/${communityid}`,
           { image: imageUpload },
           setHeaders()
      );

       return result.data;

    }

  return(
    <>
    {!isSuccess &&(
    <form onSubmit={handleSubmit}>
        <label id="imageUpload" 
        className={imageUpload ? 'has-imageUpload': ''}>
            <input type="file" onChange={handleImageUpload}></input>
            <img src={camera} alt="Select img"></img>
        </label>
        <label id="mensage">Adicionar uma Foto</label>

<div><button id="botao" type="submit" className="btn">Publicar</button>
</div>

</form>)}
{isSuccess && (
  <Alert variant="success" className="m-3">
    Upload feito com sucesso
  </Alert>
)}

</>
);
};
