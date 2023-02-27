import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://i.imgur.com/PChhFKn.png");
    background-size: covered;
    display: flex;
    align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0px auto;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 0px 10px;
`;

const Agreement = styled.p`
  font-size: 12px;
  margin: 10px 0px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0px;
  background-color: #fff;
  color: #000;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  &:hover {
     transition: ease-in 0.5s;
    background-color: teal;
  }
`;

const Registracija = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Регистирај се</Title>
        <Form>
          <Input type="text" placeholder="Име" />
          <Input type="text" placeholder="Презиме" />
          <Input type="text" placeholder="E-mail адреса" />
          <Input type="password" placeholder="Лозинка" />
          <Input type="password" placeholder="Потврди лозинка" />
          <Agreement>
          Со создавање сметка, се согласувате со нашите{" "}
            <a href="#">Услови за користење</a> и <a href="#">Политика за приватност</a>.
          </Agreement>
          <Button>РЕГИСТИРАЈ СЕ</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Registracija;
