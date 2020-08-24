import React from "react";
import Profile from "./profile";
import ProfileEdit from "./profileEdit";
import PickupList from "./pickupList";
import PickupEdit from "./pickupEdit";

// donor page [state: pickups, donor profile]
//   view pickups (default view; "create new" button)
//     single pickup
//   view/edit profile
//   create/edit pickup

const Donor = () => {
    return(
        <div>
            Main page for logged-in donors.
            <Profile />
            <ProfileEdit />
            <PickupList />
            <PickupEdit />
        </div>
    );
}

export default Donor;