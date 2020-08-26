import styled from "styled-components";

const StyledApp = styled.div`
    width: 100%; min-height: 100vh;

    background-color: ${props => props.theme.background.main};
    color: ${props => props.theme.color.main};

    ${props => props.theme.font.main};

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default StyledApp;