import React from "react";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Glaven from "../components/Glaven";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Announcements />,
      <Navbar />
      <Glaven />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
