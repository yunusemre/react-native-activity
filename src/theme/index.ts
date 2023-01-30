import {StyleSheet} from 'react-native';

interface spacingType {
  borderRadius: number;
  layoutPaddingH: number;
  containerPaddingV: number;
  cardMarginB: number;
}

interface typeSizesType {
  FONT_SIZE_SMALL: number;
  FONT_SIZE_MEDIUM: number;
  FONT_SIZE_LARGE: number;
  FONT_WEIGHT_LIGHT: number;
  FONT_WEIGHT_MEDIUM: number;
  FONT_WEIGHT_HEAVY: number;
}

export interface themeType {
  name: string;
  color: string;
  primary: string;
  layoutBg: string;
  cardBg: string;
  accent: string;
  error: string;
}

interface themesType {
  light: themeType;
  dark: themeType;
}

const spacing: spacingType = {
  borderRadius: 8,
  layoutPaddingH: 16,
  containerPaddingV: 10,
  cardMarginB: 16,
};

const typeSizes: typeSizesType = {
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 18,
  FONT_WEIGHT_LIGHT: 200,
  FONT_WEIGHT_MEDIUM: 600,
  FONT_WEIGHT_HEAVY: 800,
};

const themes: themesType = {
  light: {
    name: 'light',
    color: '#3D5A76',
    primary: '#2BBCA2',
    layoutBg: '#e0eeec',
    cardBg: '#ffffff',
    accent: '#0071ff',
    error: '#B00020',
  },
  dark: {
    name: 'dark',
    color: '#ffffff',
    primary: '#2BBCA2',
    layoutBg: '#121212',
    cardBg: '#1e1e1e',
    accent: '#0071ff',
    error: '#B00020',
  },
};

const themeShadow = ({color, height}: {color: string; height: number}) => {
  return StyleSheet.create({
    shadow: {
      shadowColor: color,
      shadowOffset: {
        width: 0,
        height: height,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
    },
  });
};
export {spacing, typeSizes, themes, themeShadow};