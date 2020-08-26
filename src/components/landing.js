import React from "react";
import { Link } from "react-router-dom";
import StyledLanding from "./styled/StyledLanding";

// landing page (fake login buttons for donors and volunteers)

const Landing = () => {
    return(
        <StyledLanding>
            <h1>Welcome to Replate!</h1>
            <Link to="donor/active/"><button>Log in as donor</button></Link>
            <Link to="volunteer/active/"><button>Log in as volunteer</button></Link>
        </StyledLanding>
    );
}

export default Landing;