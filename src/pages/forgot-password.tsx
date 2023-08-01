import { NextPage } from "next";

import { Flex } from "@chakra-ui/react";

import { ForgotPasswordBanner } from "@/components/forgot-password/ForgotPasswordBanner";
import { ForgotPasswordSection } from "@/components/forgot-password/ForgotPasswordSection";

const ForgotPassword: NextPage = () => {
  return (
    <Flex h="100vh" align="center" justify="center">
      <ForgotPasswordBanner />

      <ForgotPasswordSection />
    </Flex>
  );
};

export default ForgotPassword;
