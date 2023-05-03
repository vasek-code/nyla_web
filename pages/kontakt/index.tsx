import {
  Divider,
  Heading,
  VStack,
  Image,
  Flex,
  Text,
  HStack,
  Grid,
  Link,
} from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { ContactGridItem } from "../../components/ContactGridItem";

export default function Kontakt2Page() {
  return (
    <>
      <style jsx global>
        {`
          .contact-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          @media screen and (max-width: 1150px) {
            .contact-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .last-one {
              grid-column-start: 1;
              grid-column-end: 3;
              grid-row-start: 2;
              justify-self: center;
              width: 350px;
            }
          }

          @media screen and (max-width: 800px) {
            .contact-grid {
              grid-template-columns: repeat(1, 1fr);
            }

            .last-one {
              grid-column-start: 1;
              grid-column-end: 2;
              grid-row-start: 3;
              width: 100%;
            }
          }
        `}
      </style>
      <Flex
        w="100%"
        minH="100vh"
        pt={["80px", "80px", "100px", "100px"]}
        position="absolute"
        zIndex="2"
        overflow="hidden"
        flexDir="column"
        pb="20px"
        px="10px"
        align="center"
      >
        <Heading
          color="white"
          w="100%"
          textAlign="center"
          fontWeight="800"
          fontSize={["2.5rem", "3rem", "6xl", "6xl"]}
          letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
          mt="20px"
        >
          Kontakt
        </Heading>
        <Flex w="100%" justify="center" py="30px">
          {/* <Flex
            justify="center"
            maxW="620px"
            background="whiteAlpha.100"
            p="10px"
            borderRadius="10px"
            border="1px solid gray"
          > */}
          <Text
            textAlign="center"
            fontSize={["1rem", "1.1rem", "1.2rem", "1.2rem"]}
            fontWeight="600"
          >
            Jste připraveni dělat další projekt s námi? <br /> Zavolejte nebo
            nám napište a my se vám co nejdříve ozveme!
          </Text>
          {/* </Flex> */}
        </Flex>
        <Flex justify="center" w="100%" h="100%">
          <Grid
            gridTemplateColumns="repeat(3, 1fr)"
            columnGap="25px"
            rowGap="25px"
            className="contact-grid"
          >
            <ContactGridItem
              src="/images/lukas.png"
              heading="Lukáš Mráček"
              text="Executive producer"
              phone="+420 775 322 101"
              email="lukas.mracek@nyla.cz"
            />
            <ContactGridItem
              src="/images/marek.jpg"
              heading="Marek Procházka"
              text="Creative director"
              phone="+420 721 363 195"
              email="marek.prochazka@nyla.cz"
            />
            <ContactGridItem
              src="/images/ondrej.png"
              heading="Ondřej Belica"
              text="Director of photography"
              phone="+420 777 119 845"
              email="ondrej.belica@nyla.cz"
              last
            />
          </Grid>
        </Flex>
        <Flex minW="308px" w="50%" justify="space-around" pt="40px">
          <Flex align="center" flexDir="column" gap="5px">
            <AiFillMail size="60px" />
            <a style={{ fontSize: "20px" }} href="mailto:info@nyla.cz">
              info@nyla.cz
            </a>
          </Flex>
          <Flex align="center" flexDir="column" gap="5px">
            <AiFillPhone size="60px" />
            <a style={{ fontSize: "20px" }} href="tel:+420-775-322-101">
              +420 775 322 101
            </a>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
