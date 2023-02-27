import React from "react";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding-bottom: 100px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  margin: 10px;
  border: black 1px solid;
  background-color: white;
  color: black;
`;
const TopButton1 = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  margin: 10px;
  border: none;
  background-color: black;
  color: white;
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Image = styled.img`
  height: 150px
`;
const ProductName = styled.span`
  color: black;
  font-weight: 600;
`;
const ProductId = styled.span``;

const ProductAmountBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: lightgray;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => (props.type === "total" ? "600" : "300")};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Kosnica = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <Title>
          Кошничка<br />
        </Title>
        <Top>
          <TopButton>Врати се назад</TopButton>
          <TopTexts>
            {" "}
            <TopText> Во кошничка (2)</TopText>{" "}
          </TopTexts>
          <TopButton1> НАРАЧАЈ </TopButton1>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.imgur.com/aWmVIBB.png" />
                <Details>
                  <ProductName>
                     Pink Драгана
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 32
                  </ProductId>
                    </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountBox>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountBox>{" "}
                <ProductPrice> 300 МКД </ProductPrice>{" "}
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.imgur.com/VZPxSZS.png"/>
                <Details>
                  <ProductName>
                    Марина
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 34
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountBox>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountBox>
                <ProductPrice> 300 МКД</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>КОШНИЧКА</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Вкупно</SummaryItemText>
              <SummaryItemPrice>600 МКД</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Достава</SummaryItemText>
              <SummaryItemPrice><del>150 МКД</del> Бесплатна</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>За Наплата</SummaryItemText>
              <SummaryItemPrice>600 МКД</SummaryItemPrice>
            </SummaryItem>
            <Button>НАРАЧАЈ</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Kosnica;
