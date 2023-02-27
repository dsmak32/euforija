import { Link } from "react-router-dom";
import styled from "styled-components";
import { MainPage } from "../data";

const Container = styled.div`
  color: #ff2572;
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;


const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 70%;
  flex: 1;
  padding-top: 50px;
  padding-left: 75px;
  padding-right: 0px;
`;

const InfoContainer = styled.div`
  padding-right: 100px;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Glaven = () => {
 

  return (
    <Container>
           {MainPage.map((item) => (
          <Content bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title> {item.title} </Title>
              <Desc> {item.desc} </Desc>
            </InfoContainer>
          </Content>
        ))}
      </Container>
  );
};

export default Glaven;
