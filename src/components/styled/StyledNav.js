import styled from "styled-components";

const StyledNav = styled.nav`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: ${props => props.theme.margin.large};

    a{
        width: 100%;
        flex-shrink: 1;

        color: ${props => props.theme.color.section};
        background-color: ${props => props.theme.background.section};

        text-decoration: none;

        border-style: solid;
        border-color: currentColor;
        border-width: 1px 1px 1px 0px;
        text-align: center;

        cursor: pointer;
    }

    a:first-child{
        border-width: 1px;
    }

    @media (max-width: 500px){
        width: 100%;
        flex-direction: column;

        a{
            border-width: 0px 1px 1px 1px;
        }
    }
`;

export default StyledNav;