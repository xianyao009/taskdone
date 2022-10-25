import type { NextPage } from "next";
import Layout from "../components/containers/Layout";
import HomeContainer from "../components/containers/HomeContainer";
import NavigationBar from "../components/containers/NavigationBar";
import Footer from "../components/containers/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <NavigationBar />
        <HomeContainer />
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
