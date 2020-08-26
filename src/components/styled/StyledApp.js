import styled from "styled-components";

const StyledApp = styled.div`
    width: 100vw; height: 100vh;

    background-color: ${props => props.theme.background.main};
    color: ${props => props.theme.color.main};

    padding: ${props => props.theme.margin.large};

    ${props => props.theme.font.main};
`;

export default StyledApp;