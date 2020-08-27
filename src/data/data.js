import React from "react";
import {Link} from "react-router-dom";
import StyledBlankMessage from "../components/styled/StyledBlankMessage"

const data = {

    errors: {},
    blankMessages: { // JSX to display if a pickupList is blank, by role:
        donor: <StyledBlankMessage>You don't have any pickups scheduled. Would you like to <Link to="../new/">create one?</Link></StyledBlankMessage>,
        volunteer: <StyledBlankMessage>You don't have any pickups scheduled. Would you like to <Link to="../browse/">sign up for one?</Link></StyledBlankMessage>,
        browse: <StyledBlankMessage>There are no active pickups in need of volunteers.</StyledBlankMessage>,
    },
};

export default data;