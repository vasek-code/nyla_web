import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export const NavbarMenu: React.FC<{
  opened: boolean;
}> = ({ opened }) => {
  return (
    <>
      <Flex
        w="100%"
        position="absolute"
        background="#202124"
        animation={opened ? "slidedown 0.3s 1" : "slideup 0.3s 1"}
        style={{
          animationFillMode: "forwards",
        }}
        zIndex="20"
        boxShadow="0px 0.5px 17px 3px #000000"
        display={["flex", "flex", "none", "none"]}
        justify="flex-start"
      >
        <Flex
          flexDir="column"
          w="100%"
          h="100%"
          justify="flex-start"
          gap="15px"
          p="15px"
        >
          <Button fontSize="1.2rem" fontWeight="600">
            Portfolio
          </Button>
          <Button fontSize="1.2rem" fontWeight="600">
            Služby
          </Button>
          <Button fontSize="1.2rem" fontWeight="600">
            Postprodukce
          </Button>
          <Button fontSize="1.2rem" fontWeight="600">
            Kontakt
          </Button>
          <Flex gap="20px" w="100%" justify="flex-start">
            <a
              href="https://www.instagram.com/nylacreativeagency"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                icon={<BsInstagram size="22px" />}
                aria-label="instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/nylacreativeagency"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                icon={<BsFacebook size="22px" />}
                aria-label="facebook"
              />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
