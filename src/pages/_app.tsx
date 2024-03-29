import type { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import "../styles/customScroll.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
