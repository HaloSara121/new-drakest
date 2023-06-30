import type { GetServerSideProps, NextPage } from "next";

import { Flex } from "@chakra-ui/react";

import { Banner } from "../components/home/Banner";
import { Actions } from "../components/home/Actions";

const Home: NextPage = () => {
  return (
    <Flex h="100vh" align="center" justify="center">
      <Banner />

      <Actions />
    </Flex>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const session = true;

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
