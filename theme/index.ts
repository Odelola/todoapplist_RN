import { createTheme } from '@shopify/restyle'

export const appPalette = {
    tabBarBackground: '#363636',
    appBackground: '#121212',
    whiteTextColor: '#FFFFFF',
    primaryColor: '#8687E7',
}

const theme = createTheme({
    colors: {
        tabBarBackground: appPalette.tabBarBackground,
        appBackground: appPalette.appBackground,
        whiteTextColor: appPalette.whiteTextColor,
        primaryColor: appPalette.primaryColor,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768
    },
    textVariants: {
        largeHeading: {
            fontFamily: 'LatoBold',
            fontSize: 32,
            color: "whiteTextColor"
        },
        regular: {
            fontFamily: 'LatoRegular',
            fontSize: 20,
            color: "whiteTextColor"
        },
        light: {
            fontFamily: 'LatoRegular',
            fontSize: 16,
            color: "whiteTextColor"
        }
    }
})

export type Theme = typeof theme;

export default theme