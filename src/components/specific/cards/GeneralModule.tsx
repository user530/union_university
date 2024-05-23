import type { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { UnorderedList, remy } from '../../styles';

interface IGeneralModuleProps extends PropsWithChildren {
    title: string;
    isAccented?: boolean;
}

interface IGeneralModuleTextProps extends IGeneralModuleProps {
    data: string;
}

interface IGeneralModuleListProps extends IGeneralModuleProps {
    data: string[];
}

const StyledCard = styled.div<{ $accented?: string }>`
    padding: ${remy(52)} ${remy(57)};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ $accented, theme }) => $accented === 'true' ? theme.colors.primary : theme.colors.secondary};
    position: relative;

    font-size: ${remy(20)};
    font-weight: 300;
    line-height: 1.3;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: ${remy(43)};
        height: ${remy(43)};
        
        ${({ $accented, theme }) => $accented === 'true'
        && `background: linear-gradient(-135deg, ${theme.colors.white} 50%, ${theme.colors.primaryAlt} 50%)`}
    }

    @media(max-width: 767px) {
        padding: ${remy(31)} ${remy(17)};
        padding-bottom: ${remy(40)};

        &::before {
            width: ${remy(26)};
            height: ${remy(26)};
        }
    }
`;

const StyledCartTitle = styled.h3`
    font-size: ${remy(36)};
    font-weight: 700;
    margin-bottom: ${remy(25)};
    
    @media(max-width: 767px) {
        font-size: ${remy(25)};
        margin-bottom: 1em;
    }
`;

const StyledCardContent = styled.div`
    text-wrap: balance;

    & > * {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
    }
`;

const StyledCardText = styled.p``;
const StyledCardList = styled(UnorderedList)`
    font-size: ${remy(20)};
`;

const GeneralModule: FC<IGeneralModuleProps> = ({ title, isAccented, children }) => {
    return (
        <StyledCard $accented={`${isAccented}`}>
            <StyledCartTitle>
                {title}
            </StyledCartTitle>

            <StyledCardContent>
                {children}
            </StyledCardContent>
        </StyledCard>
    );
}

export const GeneralModuleText: FC<IGeneralModuleTextProps> = ({ title, data, isAccented }) => {
    return (
        <GeneralModule title={title} isAccented={isAccented}>
            <StyledCardText>{data}</StyledCardText>
        </GeneralModule>
    );
}

export const GeneralModuleList: FC<IGeneralModuleListProps> = ({ title, data, isAccented }) => {
    return (
        <GeneralModule title={title} isAccented={isAccented}>
            <StyledCardList>
                {
                    data.map(
                        (item, index) => <li key={index}>{item}</li>
                    )
                }
            </StyledCardList>
        </GeneralModule>
    );
}