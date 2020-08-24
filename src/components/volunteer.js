import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import Profile from "./profile";
import ProfileEdit from "./profileEdit";
import PickupList from "./pickupList";
import VolunteerNav from "./volunteerNav";

// volunteer page [state: pickups?, profile]
//   view open pickups
//     single pickup ("take this pickup" button)
//   view assigned pickups
//     single pickup ("you know what nevermind" button)
//   view/edit profile

const Volunteer = () => {
    return(
        <div>
            <VolunteerNav />
            Main page for logged-in volunteers.
            <Switch>
                <Route path="/volunteer/profile/edit">
                    <h2>Edit profile</h2>
                    <ProfileEdit />
                </Route>
                <Route path="/volunteer/profile">
                    <h2>Your profile</h2>
                    <Profile />
                    <Link to="browse">Browse pickups</Link>
                    <Link to=".">View assigned pickups</Link>
                </Route>
                <Route path="/volunteer/browse">
                    <h2>Browse open pickups</h2>
                    <PickupList />
                    <Link to="profile">View profile</Link>
                    <Link to=".">View assigned pickups</Link>
                </Route>
                <Route path="/volunteer">
                    <h2>Your assigned pickups</h2>
                    <PickupList />
                    <Link to="profile">View profile</Link>
                    <Link to="browse">Browse pickups</Link>
                    <Link to="/">Log out</Link>
                </Route>
            </Switch>
        </div>
    );
}

export default Volunteer;