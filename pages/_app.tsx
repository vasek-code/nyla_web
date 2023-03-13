import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/roboto/400.css";
import "@fontsource/montserrat/400.css";
import "../styles/font.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import { Flex } from "@chakra-ui/react";
import Background from "../components/Background";
import "@fontsource/inter";
import { Footer } from "../components/Footer";
import { Wrapper } from "../components/Wrapper";
import ScrollToTopButton from "../components/ScrollToTop";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [start, setStart] = useState(true);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setStart(false);
    }, 1500);
  });

  return (
    <>
      <Head>
        <title>NYLA - KREATIVNÍ AGENTURA</title>
      </Head>
      <ChakraProvider theme={theme}>
        {/* {start && <Intro />} */}
        <Background />
        <Navbar />
        {/* <Wrapper> */}
        <Component {...pageProps} />
        {/* </Wrapper> */}
      </ChakraProvider>
    </>
  );
}

export default MyApp;
