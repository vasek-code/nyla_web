import {
  Divider,
  Heading,
  VStack,
  Image,
  Flex,
  Text,
  HStack,
  Grid,
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
          <Flex
            justify="center"
            maxW="620px"
            background="whiteAlpha.100"
            p="10px"
            borderRadius="10px"
            border="1px solid gray"
          >
            <Text
              textAlign="center"
              fontSize={["1rem", "1.1rem", "1.2rem", "1.2rem"]}
              mb="8px"
              fontWeight="600"
            >
              Jste připraveni dělat další projekt s náma? <br /> Zavolejte anebo
              nám napište email a my se vám co nejdříve ozveme!
            </Text>
          </Flex>
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
              text="Producer Executive Producer"
            />
            <ContactGridItem
              src="/images/tomas.png"
              heading="Tomáš Hruška"
              text="Scriptwriter Director Dramaturge"
            />
            <ContactGridItem
              src="/images/ondrej.png"
              heading="Ondřej Belica"
              text="DOP Postproduction supervisor"
              last
            />
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}
