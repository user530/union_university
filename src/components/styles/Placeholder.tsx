import styled from 'styled-components';
import { remy } from './Utils';

export const Placeholder = styled.div<{ height?: string }>`
    height: ${({ height }) => height && !isNaN(+height) ? remy(+height) : remy(110)};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};

    @media(max-width: 767px) {
        height: ${({ height }) => height && !isNaN(+height) ? remy(+height / 2) : remy(50)};
        font-size: 1.5rem;
    }
`;