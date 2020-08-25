import React, {useState} from "react";
import Profile from "./profile";
import ProfileEdit from "./profileEdit";
import PickupList from "./pickupList";
import PickupEdit from "./pickupEdit";
import { Switch, Route, useHistory } from "react-router-dom";
import Nav from "./nav";

// donor page [state: pickups, donor profile]
//   view pickups (default view; "create new" button)
//     single pickup
//   view/edit profile
//   create/edit pickup

const Donor = () => {
    const [profile, setProfile] = useState({name: "jdoe", displayName: "John Doe", phone: "1234567890", address: "1 Main St."});
    const [userID, setUserID] = useState(1);

    let history = useHistory();

    const saveProfile = (newProfile) => {
        // send data to API and amend profile on reply
        setProfile(newProfile);
        
        history.push("../profile/");
    };

    // useEffect to send a GET for data

    return(
        <div>
            <Nav role="donor" />
            <Switch>
                <Route path="/donor/profile/edit">
                    <h2>Edit profile</h2>
                    <ProfileEdit profile={profile} saveProfile={saveProfile} />
                </Route>
                <Route path="/donor/profile">
                    <h2>Your profile</h2>
                    <Profile profile={profile} />
                </Route>
                <Route path="/donor/new">
                    <h2>Request pickup</h2>
                    <PickupEdit />
                </Route>
                <Route path="/donor/edit/:id">
                    <h2>Edit pickup</h2>
                    <PickupEdit />
                </Route>
                <Route path="/donor/active">
                    <h2>Active pickups</h2>
                    <PickupList donorID={userID} />
                </Route>
            </Switch>
        </div>
    );
}

export default Donor;