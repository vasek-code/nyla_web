import { Box } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Box position="fixed" bottom="0" width="100%" textAlign="center">
        &copy; {new Date().getFullYear()} NYLA. Všechna práva vyhrazena.
      </Box>
    </>
  );
};
