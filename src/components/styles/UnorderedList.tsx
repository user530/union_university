import styled from 'styled-components';
import { remy } from './Utils';

export const UnorderedList = styled.ul`    
    & li {
        font-weight: 300;
        position: relative;
        padding-left: ${remy(5 + 15)};
        
        &::before {
            content: '';
            display: block;
            position: absolute;
            top: ${remy(7)};
            left: 0;
            width: ${remy(5)};
            height: ${remy(5)};
            border-radius: 50%;
            background-color: ${({ theme }) => theme.colors.primary};
        }
    }

    & > li + li {
            margin-top: ${remy(10)};
        }
`;