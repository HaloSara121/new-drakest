import { api } from "@/services/api";
import { Flex } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { GetServerSideProps, NextPage } from "next";
import { Aside } from "../components/profile/Aside";
import { Main } from "../components/profile/Main";

const Profile: NextPage = () => {
  return (
    <Flex
      maxW="1420px"
      w="100%"
      h="100vh"
      flexDir={["column", "column", "column", "row"]}
      align={["center", "center", "center", "flex-start"]}
      justify="space-between"
      gap="2rem"
      mx="auto"
      py="5rem"
      bg="gray.700"
      px="4"
    >
      <Aside />

      <Main />
    </Flex>
  );
};

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

export default Profile;
