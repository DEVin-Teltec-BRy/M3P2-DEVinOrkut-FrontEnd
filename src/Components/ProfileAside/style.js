import styled from 'styled-components';

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  border-radius: 0.5rem;
  padding: 1rem;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 14rem;
  & h1 {
    font-size: 1rem;
  }

  & ul {
    padding: 0;
  }

  & img {
    width: 160px;
    height: 160px;
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
  cursor: pointer;
  outline: none;
  text-decoration: none;
`;
