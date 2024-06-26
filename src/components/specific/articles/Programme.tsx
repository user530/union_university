import type { FC } from 'react';
import type { IProgramme } from '../../../types';
import { Module } from '../cards/Module';
import styled from 'styled-components';
import { remy } from '../../styles';
import React from 'react';
import { Spinner } from '../../common/Spinner';

interface IProgrammeProps {
    programme: null | IProgramme;
}

const StyledArticle = styled.article`
    & + & {
        margin-top: ${remy(68)};

        @media(max-width: 767px) {
            margin-top: ${remy(26)};
        }
    }
`;

const StyledH3 = styled.h3`
    font-size: ${remy(26)};
    font-weight: 700;

    @media(max-width: 767px) {
        font-size: ${remy(22)};
    }
`;

const StyledArticleContent = styled.div`
    margin-top: ${remy(54)};
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: ${remy(46)};

    @media (max-width: 767px) {
        margin-top: ${remy(27)};
        grid-template-columns: 1fr;
        row-gap: ${remy(10)};
    }
`;

export const Programme: FC<IProgrammeProps> = React.memo(({ programme }) => {
    console.log('Rendered Programme ', programme?.id);

    if (!programme)
        return <Spinner />;

    const { title, modules } = programme;

    return (
        <StyledArticle>
            <StyledH3>{title}</StyledH3>
            <StyledArticleContent>
                {
                    modules.map(
                        (module) => (<Module key={module.id} {...module} />)
                    )
                }
            </StyledArticleContent>
        </StyledArticle>
    );
});