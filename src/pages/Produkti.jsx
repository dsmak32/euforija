import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Produkti = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Produkti;
