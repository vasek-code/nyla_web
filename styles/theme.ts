import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
