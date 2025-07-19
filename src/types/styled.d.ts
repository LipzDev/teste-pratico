import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
      light: string;
      dark: string;
      white: string;
      background: string;
      backgroundAlt: string;
      text: string;
      textLight: string;
      textDark: string;
      border: string;
      borderLight: string;
      accent: string;
      overlay: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      full: string;
    };
    shadows: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      inner: string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
    typography: {
      fontFamily: {
        sans: string;
        mono: string;
      };
      fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
      };
      fontWeight: {
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
      };
      lineHeight: {
        tight: string;
        normal: string;
        relaxed: string;
      };
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}