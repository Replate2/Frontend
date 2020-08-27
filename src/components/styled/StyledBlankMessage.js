import styled from "styled-components";

const StyledBlankMessage = styled.div`
    a{
        color: ${props => props.theme.color.section};
        /*text-decoration: none;*/

        cursor: pointer;
    }
`;

export default StyledBlankMessage;