import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledSpinnerContainer = styled.div`
    width: 100%;
    height: 200px;
    border: 2px dashed #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-block: 25px;
`;

const spinAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const StyledSpinner = styled.div`
    border: 4px solid rgba(0,0,0,0.1);
    border-top: 4px solid #333;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spinAnimation} 2s linear infinite;
`;

export const Spinner: React.FC = () => {
    return (
        <StyledSpinnerContainer>
            <StyledSpinner />
        </StyledSpinnerContainer>
    );
};