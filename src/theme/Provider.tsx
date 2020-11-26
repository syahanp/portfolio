import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

const Provider: React.FC = ({ children }) => {

    const currentTheme = darkTheme

    return (
        <StyledProvider theme={currentTheme}>
            { children }
        </StyledProvider>
    )
}

export default Provider
