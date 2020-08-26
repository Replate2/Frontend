import styled from "styled-components";

const StyledPickup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${props => props.theme.color.section};
    background-color: ${props => props.theme.background.section};

    padding: ${props => props.theme.margin.small} ${props => props.theme.margin.medium};
    margin-bottom: ${props => props.theme.margin.medium};

    p, input{
        margin-bottom: ${props => props.theme.margin.small};
    }

    a, button{
        ${props => props.theme.font.main};
        color: ${props => props.theme.color.highlight};
        background-color: ${props => props.theme.background.highlight};
        text-decoration: none;

        border: 2px solid currentColor;

        padding: 0 ${props => props.theme.margin.medium};
        margin: 0 ${props => props.theme.margin.medium};
        
    }

    @media (max-width: 500px){
        width: 100%;
    }
`;

export default StyledPickup;