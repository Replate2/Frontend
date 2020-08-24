import React, { useState } from "react";
import {Switch, Route} from "react-router-dom";
import Profile from "./profile";
import ProfileEdit from "./profileEdit";
import PickupList from "./pickupList";
import Nav from "./nav";

// volunteer page [state: pickups?, profile]
//   view open pickups
//     single pickup ("take this pickup" button)
//   view assigned pickups
//     single pickup ("you know what nevermind" button)
//   view/edit profile

const Volunteer = () => {
    const [profile, setProfile] = useState({name: "jdoe", displayName: "John Doe", phone: "1234567890"});
    const [profileErrors, setProfileErrors] = useState({name: "", displayName: "", phone: ""});
    const [userID, setUserID] = useState(0);

    const updateProfile = (name, value) => {
        setProfile({...profile, [name]: value});
        // validation here
    }

    const saveProfile = () => {}; // send data to API and then return to the previous page (volunteer/profile/)

    // useEffect to send a GET for data

    return(
        <div>
            <Nav role="volunteer" />
            <Switch>
                <Route path="/volunteer/profile/edit">
                    <h2>Edit profile</h2>
                    <ProfileEdit profile={profile} errors={profileErrors} updateProfile={updateProfile} saveProfile={saveProfile} />
                </Route>
                <Route path="/volunteer/profile">
                    <h2>Your profile</h2>
                    <Profile profile={profile} />
                </Route>
                <Route path="/volunteer/browse">
                    <h2>Browse open pickups</h2>
                    <PickupList userID={-1} buttonType="accept" />
                </Route>
                <Route path="/volunteer/active">
                    <h2>Your assigned pickups</h2>
                    <PickupList userID={userID} buttonType="cancel" />
                </Route>
            </Switch>
        </div>
    );
}

export default Volunteer;