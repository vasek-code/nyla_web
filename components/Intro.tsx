import { Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Intro() {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setClosing(true);
    }, 1000);
  });

  return (
    <>
      <Flex
        w="100%"
        h="100vh"
        position="absolute"
        zIndex="200"
        background="#202124"
        className={closing && "fadeOut"}
        justify="center"
        align="center"
      >
        <Image
          marginTop={["0px", "0px", "100px", "170px"]}
          src="/images/logoHDweb.png"
          __css={{ aspectRatio: "16/9" }}
          data-aos="fade-down"
          position="absolute"
        />
      </Flex>
    </>
  );
}
