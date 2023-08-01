import { NextPage } from "next";

import { Flex } from "@chakra-ui/react";

import { ResetPasswordBanner } from "@/components/reset-password/ResetPasswordBanner";
import { ResetPasswordSection } from "@/components/reset-password/ResetPasswordSection";

const ResetPassword: NextPage = () => {
  return (
    <Flex h="100vh" align="center" justify="center">
      <ResetPasswordBanner />

      <ResetPasswordSection />
    </Flex>
  );
};

export default ResetPassword;
