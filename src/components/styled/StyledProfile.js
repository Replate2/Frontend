import styled from "styled-components";

const StyledProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${props => props.theme.color.section};
    background-color: ${props => props.theme.background.section};

    padding: ${props => props.theme.margin.medium} ${props => props.theme.margin.large};

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
        
        cursor: pointer;
    }

    @media (max-width: 500px){
        width: 100%;
    }
`;

export default StyledProfile;