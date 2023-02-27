import {
  Facebook,
  Instagram,
  MailOutlined,
  MapOutlined,
  PhoneOutlined,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.h1`
  text-decoration: none;
  text-decoration-color: none;
  color: #000000;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 65%;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  /* paint the background color of each icon with the color props */
  background-color: #${(props) => props.color};
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Link
          style={{ textDecoration: "none", textDecorationLine: "none" }}
          to="/"
        >
          <Logo><img src="https://i.imgur.com/l1xefId.png" alt="" height={"70px"} /></Logo>{" "}
        </Link>
        <Desc>
          {" "}
          © 2023 Euphoria Clay Earrings{" "}
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <a href="https://www.instagram.com/euphoria_clayearrings/">
          <SocialIcon color="E4405F">
            <Instagram a />
          </SocialIcon>
          </a>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Корисни информации:</Title>
        <List>
          <ListItem>Следи ја својата пратка</ListItem>
          <ListItem>Одржување на обетките</ListItem>
          <ListItem>Замена на производ</ListItem>
          <ListItem>Достава и начин на плаќање</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Контакт</Title>
          <ContactItem>
          {" "}
          <PhoneOutlined style={{ marginRight: "10px" }} />
          +389 75 000 000
        </ContactItem>
        <ContactItem>
          {" "}
          <MailOutlined style={{ marginRight: "10px" }} />{" "}
          euphoria@euphoria.com
        </ContactItem>
        <Payment src="https://i.imgur.com/O4hEobT.png" />
      </Right>
    </Container>
  );
};

export default Footer;
