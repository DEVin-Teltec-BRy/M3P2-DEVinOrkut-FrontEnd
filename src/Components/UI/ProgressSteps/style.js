import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
`;

export const Circle = styled.div`
  background-color: ${(props) => (props.active ? '#C8157A' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#999')};
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${(props) => (props.active ? '#C8157A' : '#fff')};
  transition: 0.4s ease;
  z-index: 1;
`;

export const Line = styled.div`
  content: '';
  background-color: ${(props) => (props.active ? '#C8157A' : '#fff')};
  height: 3px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: 0.4s ease;
`;
