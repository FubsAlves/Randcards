import { extendTheme } from "@chakra-ui/react";

export const THEME = extendTheme({
    styles: {
        global: (props: { colorMode: string; }) => ({
          'html, body': {
            bg: "#eba417",
          },
        })
    },

    fonts: {
        body: `"Roboto", sans-serif`,
    },

    colors: {
        primary: {
            300: "#ebb13e",
            500: '#eba417',
            700: '#eda20c',
            900: '#f7a502'
        },

        secondary: {

        },

        white: "#FFFFFF",
        black: "000000"

    }

    
})