import { LoginBanner } from "@/components/login/LoginBanner";
import { LoginSection } from "@/components/login/LoginSection";
import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <Flex h="100vh" align="center" justify="center">
      <LoginBanner />

      <LoginSection />
    </Flex>
  );
};

export default Login;
