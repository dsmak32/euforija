import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const PopUp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const PopUpWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Button onClick={handleClick}>Open Pop-Up</Button>
      {isOpen && (
        <PopUp>
          <h2>Pop-Up Window</h2>
          <p>This is a medium-sized pop-up window.</p>
          <Button onClick={handleClick}>Close</Button>
        </PopUp>
      )}
    </Container>
  );
};

export default PopUpWindow;