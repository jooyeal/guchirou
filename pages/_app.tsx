import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import FbConfig from "../service/firebase";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {}, []);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
