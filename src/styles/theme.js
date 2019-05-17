import { DefaultTheme } from 'react-native-paper';

const THEME = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E07926',
    accent: '#212A59',
    error: '#DB4437',
    text: '#444545',
    placeholder: '#949494',
    disabled: '#212A59',
  },
  fonts: {
    regular: 'lato-regular',
    medium: 'lato-bold',
  },
};

export default THEME;