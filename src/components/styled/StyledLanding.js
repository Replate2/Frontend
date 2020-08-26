import styled from "styled-components";

const StyledLanding = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${props => props.theme.color.section};
    background-color: ${props => props.theme.background.section};

    padding: ${props => props.theme.margin.large};

    h1{
        ${props => props.theme.font.header};
        margin-bottom: 0.75em;
    }

    button{
        ${props => props.theme.font.main};
        color: ${props => props.theme.color.highlight};
        background-color: ${props => props.theme.background.highlight};
        text-decoration: none;

        border: 2px solid currentColor;

        padding: 0 ${props => props.theme.margin.medium};
        margin: ${props => props.theme.margin.small};

        cursor: pointer;
    }
`;

export default StyledLanding;