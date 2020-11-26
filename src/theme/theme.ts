import color from 'scss/colors.module.scss';
import font from 'scss/font.module.scss';

const light = {
    bg: {
      primary: '#eff0f5'
    },
    text: {
      primary: '#050505'
    }
}
  
const dark = {
    bg: {
      primary: color.dt_bg_primary,
    },
    text: {
      primary: color.dt_text_primary,
    }
}

const defaultTheme = {
    font: {
        style: {
            heading: font.heading,
            paragraph: font.paragraph
        },
        weight: {
            light: font.light,
            regular: font.regular,
            medium: font.medium,
            bold: font.bold,
            black: font.black
        },
        h1: {
            fontSize: '2rem',
            fontWeight: font.bold,
            lineHeight: 1.5,
            fontFamily: font.heading
        },
        h2: {
            fontSize: '2rem',
            fontWeight: font.bold,
            lineHeight: 1.5,
            fontFamily: font.heading
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: font.medium,
            lineHeight: 1.5,
            fontFamily: font.heading
        },
        h4: {
            fontSize: '1.25rem',
            fontWeight: font.medium,
            lineHeight: 1.5,
            fontFamily: font.heading
        },
        h5: {
            fontSize: '1.2rem',
            fontWeight: font.medium,
            lineHeight: 1.5,
            fontFamily: font.heading
        },
        paragraph: {
            fontSize: '1rem',
            fontWeight: font.regular,
            lineHeight: 1.75,
            marginbottom: '.5rem',
            fontFamily: font.paragraph
        }
    },
    color: {
        primary: color.primary
    }
}

export const lightTheme = {...defaultTheme, ...light}
export const darkTheme = {...defaultTheme, ...dark}