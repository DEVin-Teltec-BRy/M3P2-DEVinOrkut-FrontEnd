import React from 'react';

import { Circle, Container, Line, ProgressContainer } from './style';

const ProgressSteps = ({
  activeOne,
  activeTwo,
  activeThree,
  activeFour,
  style,
}) => {
  return (
    <>
      <Container>
        <ProgressContainer>
          <Line active={true} style={style} />
          <Circle active={activeOne}>1</Circle>
          <Circle active={activeTwo}>2</Circle>
          <Circle active={activeThree}>3</Circle>
          <Circle active={activeFour}>4</Circle>
        </ProgressContainer>
      </Container>
    </>
  );
};

export default ProgressSteps;
