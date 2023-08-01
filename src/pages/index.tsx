import type { GetServerSideProps, NextPage } from "next";

import { Flex } from "@chakra-ui/react";

import { api } from "@/services/api";
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = req.cookies["auth-token"];

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const response = await api.get("/auth/validate", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
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
