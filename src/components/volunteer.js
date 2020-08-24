import React from "react";
import Profile from "./profile";
import ProfileEdit from "./profileEdit";
import PickupList from "./pickupList";

// volunteer page [state: pickups?, profile]
//   view open pickups
//     single pickup ("take this pickup" button)
//   view assigned pickups
//     single pickup ("you know what nevermind" button)
//   view/edit profile

const Volunteer = () => {
    return(
        <div>
            Main page for logged-in volunteers.
            <Profile />
            <ProfileEdit />
            <PickupList />
            <PickupList />
        </div>
    );
}

export default Volunteer;