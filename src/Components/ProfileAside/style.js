import styled from 'styled-components';

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  border-radius: 0.5rem;
  padding: 0.5rem;
  gap: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  width: 14rem;
  & h1 {
    font-size: 1rem;
  }

  & h2 {
    font-size: 1.75rem;
    padding-left: 15px;
  }

  & ul {
    padding: 0;
  }

  & img {
    width: 190px;
    height: 190px;
    border-radius: 50%;
    filter: drop-shadow(4px 4px 16px rgba(0, 0, 0, 0.25));
  }

  & .menu-links {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.5rem;
  }

  & .menu-links a:hover {
    background-color: none !important;
    border: 1px solid var(--border-button);
  }

  & .edit-profile {
    margin: 1rem 0;
    padding: 0.5rem;
  }

  & .edit-profile a {
    margin-top: 1rem;
    text-decoration: none;
  }
`;

export const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  > a {
    background: var(--card);
  }
`;

export const ProfileAsideButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  padding-top: 1.25rem;
  cursor: pointer;
  outline: none;
  text-decoration: none;
`;

export const ProfileAsideImage = styled.div`
  position: relative;
  padding-top: 1.25rem;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-size: 14px;
`;

export const Image = styled.img`
  &:hover {
    opacity: 0.2;
  }
`;

export const AddImageButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: ${(props) => (props.addButtonShow ? 'visible' : 'hidden')};
  color: var(--pink);
  font-weight: bold;
  background: none;
  border: none;
  padding: 5px;
  margin: 0;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-size: 14px;
`;

export const ContainerImage = styled.div`
  position: relative;
  text-align: center;
`;
