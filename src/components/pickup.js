import React from "react";

// view single pickup {props: pickup data, button type to show}

const Pickup = () => {
    return(
        <div>
            Display a pickup.
            <p>date and time</p>
            <p>food type(s)</p>
            <p>quantity</p>
            <div>donor's display name
                <p>phone number</p>
                <p>address</p>
            </div>
            <div>volunteer's display name (if any)
                <p>phone number</p>
            </div>
            <button>do context action</button>
        </div>
    );
}

export default Pickup;