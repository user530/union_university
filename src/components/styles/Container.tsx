import styled from 'styled-components';
import { remy } from './Utils';

export const StyledContainer = styled.div`
    padding-inline: ${remy(15)};
    width: min(${remy(1256 + 30)}, 100%);
    margin-inline: auto;
`;