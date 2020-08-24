import React from "react";

// view single pickup {props: pickup data, button type to show}

const Pickup = ({pickup, buttonType}) => {
    // todo: fetch the vitals of the donor and volunteer from `donorID` and `volunteerID`

    return(
        <div>
            <p>{pickup.date}</p>
            <p>{pickup.type}</p>
            <p>{pickup.qty}</p>
            <div>
                donor no. {pickup.donorID}
                {/*<p>donor's display name</p>
                <p>phone number</p>
                <p>address</p>*/}
            </div>
            <div>
                volunteer no. {pickup.volunteerID}
                {/*<p>volunteer's display name</p>
                <p>phone number</p>*/}
            </div>
            <button>{buttonType}</button>
        </div>
    );
}

export default Pickup;