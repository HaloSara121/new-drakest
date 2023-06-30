import { RegisterBanner } from "@/components/register/RegisterBanner";
import { RegisterSection } from "@/components/register/RegisterSection";
import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <Flex h="100vh" align="center" justify="center">
      <RegisterBanner />

      <RegisterSection />
    </Flex>
  );
};

export default Login;
