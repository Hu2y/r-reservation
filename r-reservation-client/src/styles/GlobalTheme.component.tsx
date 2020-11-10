import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

interface IGlobalTheme {
  children: ReactNode;
}

const GlobalTheme = ({ children }: IGlobalTheme) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default GlobalTheme;
