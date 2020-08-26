import styled from "styled-components";

const StyledMain = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: ${props => props.theme.margin.large};

    @media (max-width: 500px){
        width: 100%;
    }
`;

export default StyledMain;