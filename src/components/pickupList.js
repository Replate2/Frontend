import React from "react";
import Pickup from "./pickup";
import PickupEdit from "./pickupEdit";

// view pickups {props: filtered list of pickups; type of button to display, can edit}
//   single pickup ("you know what nevermind" button)

const PickupList = () => {
    return(
        <div>
            List of pickups for another component.
            <Pickup />
            <PickupEdit />
        </div>
    );
}

export default PickupList;