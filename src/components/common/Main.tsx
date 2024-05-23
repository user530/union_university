import type { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { remy } from '../styles';

const StyledMain = styled.main`
    padding-bottom: ${remy(171)};
    
    @media(max-width: 767px) {
        padding-bottom: ${remy(47)};
    }
`;

export const Main: FC<PropsWithChildren> = ({ children }) => {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    );
}