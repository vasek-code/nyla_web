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
        position: "fixed",
        bottom: 0,
        right: 0,
        cursor: "pointer",
        zIndex: 100000,
      }}
      padding="13px"
    >
      <IconButton
        aria-label="scroll to top"
        className="scroll-to-top"
        onClick={scrollToTop}
        icon={<BiArrowToTop size="25px" color="black" />}
        background="whiteAlpha.800"
        _hover={{
          background: "whiteAlpha.600",
        }}
        w="50px"
        h="50px"
      >
        Scroll to Top
      </IconButton>
    </Flex>
  );
}

export default ScrollToTopButton;
