import React from 'react';
import styled from 'styled-components';
import { TextProps } from './text';

const Text: React.FC<TextProps> = ({ 
    children,
    variant,
    color
}) => {

    return (
        <Div variant={variant}>
            { children }
        </Div>
    )
}

export default Text;

const Div = styled.div<TextProps>`
    font-family: ${props => props.variant}
`
