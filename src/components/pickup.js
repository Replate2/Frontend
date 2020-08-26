import React from "react";
import StyledPickup from "./styled/StyledPickup";

// view single pickup {props: pickup data, button type to show}

const Pickup = ({pickup, buttonAction, buttonText}) => {
    // todo: fetch the vitals of the donor and volunteer from `donorID` and `volunteerID`

    const wrappedButtonAction = () => {
        //console.log(`WBA ID=${pickup.id}`);
        buttonAction(pickup.id);
    }

    return(
        <StyledPickup>
            <p>{pickup.date}</p>
            <p>{pickup.type}</p>
            <p>{pickup.qty}</p>
            <div>
                <p>donor no. {pickup.donorID}</p>
                {/*<p>donor's display name</p>
                <p>phone number</p>
                <p>address</p>*/}
            </div>
            <div>
                <p>
                {pickup.volunteerID > -1 ?
                `volunteer no. ${pickup.volunteerID}`
                :
                "No volunteer selected."
                }
                </p>
                {/*<p>volunteer's display name</p>
                <p>phone number</p>*/}
            </div>
            <button onClick={wrappedButtonAction}>{buttonText}</button>
        </StyledPickup>
    );
}

export default Pickup;