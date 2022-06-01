const token = process.env.REACT_APP_TOKEN_AUTH;
const baseUrl = process.env.REACT_APP_URI_EXPRESS;

export const url = {
  uploadImageUser: `${baseUrl}/upload/user`,
  uploadImageCommunity: `${baseUrl}/upload/community`,
};

export const setHeaders = () => {
  const headers = {
    headers: {
      authorization: token,
    },
  };

  return headers;
};
