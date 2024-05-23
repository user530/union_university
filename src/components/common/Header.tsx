import type { FC } from 'react';
import styled from 'styled-components';
import { Placeholder } from '../styles';

const StyledHeading = styled.h2`
    text-transform: uppercase;
`;

export const Header: FC = () => {
    return (
        <Placeholder as={"header"}>
            <StyledHeading>Common header</StyledHeading>
        </Placeholder>
    );
}