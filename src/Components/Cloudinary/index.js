import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import { setHeaders } from '../../api';

const Upload = ({ url, label }) => {
  const [imageUpload, setImageUpload] = useState('');
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        url,
        { image: imageUpload },
        setHeaders()
      );

      if (response.status === 201) {
        setSuccess(true);
      }
      return response.data;
    } catch (error) {
      if (error.request.statusText === 'Payload Too Large') {
        setErrorMessage(
          'Image is too large. Please upload an image less than 5MB'
        );
      } else {
        setErrorMessage(error.message);
      }

      setError(true);
    }
  };

  return (
    <>
      {!isSuccess && (
        <Form onSubmit={handleSubmit} className="m-3">
          <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
              id="upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Form.Group>
          {isError && (
            <Alert variant="danger" className="mb-3 mt-2">
              {errorMessage}
            </Alert>
          )}

          <Button variant="primary" type="submit" className="mb-3 mt-2">
            Enviar
          </Button>
        </Form>
      )}
      {isSuccess && (
        <Alert variant="success" className="m-3">
          Upload feito com sucesso
        </Alert>
      )}
    </>
  );
};

export default Upload;
