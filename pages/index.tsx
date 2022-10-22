import type { NextPage } from "next";
import Layout from "../components/containers/Layout";
import HomeContainer from "../components/containers/HomeContainer";

const Home: NextPage = () => {
  return (
    <>
      <Layout>{<HomeContainer />}</Layout>
    </>
  );
};

export default Home;
