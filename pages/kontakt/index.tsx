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
      >
        <Heading
          color="white"
          w="100%"
          textAlign="center"
          fontWeight="800"
          fontSize={["2.5rem", "3rem", "6xl", "6xl"]}
          letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
          my="20px"
        >
          Kontakt
        </Heading>
        <Flex justify="center" w="100%" h="100%" mt="20px">
          <Grid
            gridTemplateColumns="repeat(3, 1fr)"
            columnGap="25px"
            rowGap="25px"
            className="contact-grid"
            px="10px"
          >
            <ContactGridItem
              src="https://www.nyla.cz/assets/img/lukas.png"
              heading="Lukáš Mráček"
              text="Producer Executive Producer"
            />
            <ContactGridItem
              src="	https://www.nyla.cz/assets/img/tomas.png"
              heading="Tomáš Hruška"
              text="Scriptwriter Director Dramaturge"
            />
            <ContactGridItem
              src="	https://www.nyla.cz/assets/img/ondrej.png"
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
