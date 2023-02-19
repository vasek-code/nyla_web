import { Button, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { BiArrowToTop } from "react-icons/bi";

function ScrollToTopButton() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Flex
      style={{
        zIndex: 100000,
      }}
      w="100%"
      justify="center"
      padding="20px"
    >
      <IconButton
        aria-label="scroll to top"
        className="scroll-to-top"
        onClick={scrollToTop}
        icon={<BiArrowToTop size="30px" color="black" />}
        background="whiteAlpha.800"
        _hover={{
          background: "whiteAlpha.600",
        }}
        w="65px"
        h="65px"
        size="lg"
      >
        Scroll to Top
      </IconButton>
    </Flex>
  );
}

export default ScrollToTopButton;
