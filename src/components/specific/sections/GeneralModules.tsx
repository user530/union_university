import type { FC } from 'react';
import type { IGeneralModuleCards } from '../../../types';
import { GeneralModuleList, GeneralModuleText } from '../cards';
import styled from 'styled-components';
import { StyledContainer, remy } from '../../styles';

interface IGeneralModulesProps {
    cardsData: IGeneralModuleCards;
}

const StyledSection = styled.section`
    margin-top: ${remy(131)};

    @media(max-width: 767px) {
        margin-top: ${remy(44)};
    }
`;

const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${remy(30)};

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
        row-gap: ${remy(23)};
    }
`;

export const GeneralModules: FC<IGeneralModulesProps> = ({ cardsData }) => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledGridContainer>
                    {
                        cardsData.map(
                            (card) => (
                                card.type === 'list'
                                    ? <GeneralModuleList key={card.id} {...card} />
                                    : <GeneralModuleText key={card.id} {...card} />
                            )
                        )
                    }
                </StyledGridContainer>
            </StyledContainer>
        </StyledSection>
    );
}