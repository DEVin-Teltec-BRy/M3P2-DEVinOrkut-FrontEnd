const token = localStorage.getItem('Token');
const baseUrl = process.env.REACT_APP_URI_EXPRESS || 'http://localhost:4000';

export const url = {
  uploadImageUser: `${baseUrl}/api/upload/profile`,
  uploadImageCommunity: `${baseUrl}/api/upload/community/:communityId'`,
};

export const setHeaders = () => {
  const headers = {
    headers: {
      authorization: token,
    },
  };

  return headers;
};
