const baseUrl = process.env.REACT_APP_URI_EXPRESS || 'http://localhost:4000';

export const url = {
  uploadImageUser: `${baseUrl}/api/upload/profile`,
  uploadImageCommunity: `${baseUrl}/api/upload/community`,
};

export const setHeaders = () => {
  const headers = {
    headers: {
      authorization: localStorage.getItem('Token'),
    },
  };

  return headers;
};
