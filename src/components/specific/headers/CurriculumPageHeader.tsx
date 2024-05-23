import type { FC } from 'react';
import styled from 'styled-components';
import { remy } from '../../styles';

const StyledHeader = styled.header`
    padding-block: ${remy(71)} ${remy(89)} ;
    padding-inline: ${remy(15)};
    width: min(${remy(1256 + 30)}, 100%);
    margin-inline: auto;
    /* From container to heading */
    padding-left: ${remy(223)};

    @media(max-width: 1919px) {
        padding-left: ${remy(15)};
        text-align: center;
    }

    @media(max-width: 767px) {
        padding-block: ${remy(28)} ${remy(34)};
        text-align: left;
    }
`;

const StyledH2 = styled.h2`
    font-size: ${remy(36)};
    font-weight: 700;

    @media(max-width: 767px) {
        font-size: ${remy(28)};
        font-weight: 500;
        color: #262626;
    }
`;

export const CurriculumPageHeader: FC = () => {
    return (
        <StyledHeader>
            <StyledH2>Специализированные дисциплины</StyledH2>
        </StyledHeader>
    );
}