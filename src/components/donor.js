import React from "react";
import Profile from "./profile";
import ProfileEdit from "./profileEdit";
import PickupList from "./pickupList";
import PickupEdit from "./pickupEdit";
import { Switch, Route } from "react-router-dom";
import Nav from "./nav";

// donor page [state: pickups, donor profile]
//   view pickups (default view; "create new" button)
//     single pickup
//   view/edit profile
//   create/edit pickup

const Donor = () => {
    return(
        <div>
            <Nav role="donor" />
            <Switch>
                <Route path="/donor/profile/edit">
                    <h2>Edit profile</h2>
                    <ProfileEdit />
                </Route>
                <Route path="/donor/profile">
                    <h2>Your profile</h2>
                    <Profile />
                </Route>
                <Route path="/donor/new">
                    <h2>Request pickup</h2>
                    <PickupEdit />
                </Route>
                <Route path="/donor/active">
                    <h2>Active pickups</h2>
                    <PickupList />
                </Route>
            </Switch>
        </div>
    );
}

export default Donor;