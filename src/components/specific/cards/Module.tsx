import type { FC } from 'react';
import type { IProgrammeModule } from '../../../types';
import styled from 'styled-components';
import { remy, UnorderedList } from '../../styles';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface IModuleProps extends IProgrammeModule { }

const StyledSingleModule = styled.div`
    display: flex;
    column-gap: ${remy(82)};
    padding-top: ${remy(29)};
    position: relative;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        content: '';
        width: ${remy(141)};
        height: ${remy(2)};
        background-color: ${({ theme }) => theme.colors.primary};
    }

    @media(max-width: 767px) {
        flex-direction: column;
        padding-top: 0;

        &::before {
            display: none;
        }
    }
`;

interface IExpandable {
    $expanded?: string
}

const StyledModuleTitle = styled.div<IExpandable>`
    flex-shrink: 0;

    @media(max-width: 767px) {
        width: 100%;
        height: ${remy(51)};
        display: flex;
        align-items: center;
        padding-left: ${remy(24)};
        column-gap: ${remy(27)};
        transition: 0.3s;

        ${({ $expanded, theme }) => $expanded === 'true'
        ? `
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        `
        : `
        background-color: ${theme.colors.extraGrey};
        color: ${theme.colors.textBlack};
        `}

        &::before {
            display: none;
        }
    }
`;

interface IStyledIcon extends IExpandable {
    visible?: string;
    size?: string;
}

const StyledIcon = styled.div<IStyledIcon>`
    display: ${({ visible }) => visible === 'true' ? 'block' : 'none'};
    color: ${({ $expanded, theme }) => $expanded === 'false' && (theme.colors.extraIcons || 'black')};
    ${({ size }) => size
        ? `
    width: ${size};
    height: ${size};
    `
        : `
    width: 1.15rem;
    height: 1.15rem;
    `};
`;

const StyledH4 = styled.h4`
    font-size: ${remy(32)};

    @media(max-width: 767px) {
        font-size: ${remy(18)};
    }
`;

const StyledModuleContent = styled.div<IExpandable>`
    flex-grow: 1;
    padding-top: ${remy(7)};

    @media(max-width: 767px) {
        display: ${({ $expanded }) => $expanded === 'true' ? 'block' : 'none'};
        
        color: ${({ theme }) => theme.colors.textBlack};
        padding-block: ${remy(17)} ${remy(7)};
    }
`;

const StyledModuleList = styled(UnorderedList)`
    @media(max-width: 767px) {
        font-size: ${remy(15)};
        line-height: 1.3;
    }
`;

export const Module: FC<IModuleProps> = ({ title, disciplines }) => {
    // Mobile query - move to hook
    const isMobile = useMediaQuery({
        query: '(max-width: 767px)'
    });

    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

    const moduleClickHandler = () => {
        if (!isMobile) return;

        setIsExpanded((prev) => !prev);
    };
    // 

    return (
        <StyledSingleModule>
            <StyledModuleTitle
                $expanded={`${isExpanded}`}
                onClick={moduleClickHandler}
            >
                <StyledIcon
                    as={isExpanded ? AiOutlineMinus : AiOutlinePlus}
                    visible={`${isMobile}`}
                    $expanded={`${isExpanded}`}
                />

                <StyledH4>{title}</StyledH4>
            </StyledModuleTitle>

            <StyledModuleContent $expanded={`${isExpanded}`}>
                <StyledModuleList>
                    {
                        disciplines.map(
                            ({ id, title }) => <li key={id}>{title}</li>
                        )
                    }
                </StyledModuleList>
            </StyledModuleContent>
        </StyledSingleModule>
    );
}