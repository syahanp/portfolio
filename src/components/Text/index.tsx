import React from 'react';
import styled from 'styled-components';
import { TextProps } from './text';

const Text: React.FC<TextProps> = ({ 
    children,
    variant,
    color
}) => {

    const fontVariant = `text-${variant}`

    return (
        <Div>
            { children }
        </Div>
    )
}

export default Text;

const Div = styled.div`
    
`
