import { extendTheme } from "@chakra-ui/react";

export const THEME = extendTheme({
    styles: {
        global: () => ({
          'html, body': {
            bg: "ECF0F3",
            flex: {margin: 0, padding: 0}
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
            500: "#e2e8f0",
        },

        white: "#FFFFFF",
        black: "000000"

    }

    
})