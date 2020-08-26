import React, {useState, useEffect} from "react";
import Profile from "./profile";
import ProfileEdit from "./profileEdit";
import PickupList from "./pickupList";
import PickupEdit from "./pickupEdit";
import { Switch, Route, useHistory } from "react-router-dom";
import Nav from "./nav";
import StyledMain from "./styled/StyledMain";
import Axios from "axios";

// donor page [state: pickups, donor profile]
//   view pickups (default view; "create new" button)
//     single pickup
//   view/edit profile
//   create/edit pickup

const defaultProfile = role => {
    if(role === "donor") return {name: "jdoe", displayName: "John Doe", phone: "1234567890", address: "1 Main St.", id: 1};
    else return {name: "jdoe", displayName: "John Doe", phone: "1234567890", id: 0};
}

const Main = ({role}) => {
    const [profile, setProfile] = useState({});

    let history = useHistory();

    useEffect(() => {
        setProfile(defaultProfile(role));

        // if APIs become suitable in the future then fetch initial data from them
        /*Axios.get(`https://blue-replate.herokuapp.com/users/${role === donor ? 1 : 0}`)
        .then(response => setProfile(response.data))
        .catch(error => console.log(error));*/
    }, [role]);

    const saveProfile = (newProfile) => {
        // send data to API and amend profile on reply
        Axios.post("https://reqres.in/api/users", newProfile)
        .then(response => {
          setProfile(response.data);
          history.push("../profile/");
        })
        .catch(error => console.log(error));
    };

    return(
        <StyledMain>
            <Nav role={role} />
            <Switch>
                <Route path={`/${role}/profile/edit`}>
                    <h2>Edit profile</h2>
                    <ProfileEdit profile={profile} saveProfile={saveProfile} />
                </Route>
                <Route path={`/${role}/profile`}>
                    <h2>Your profile</h2>
                    <Profile profile={profile} />
                </Route>
                {role === "donor" &&
                <Route path={`/${role}/new`}>
                    <h2>Request pickup</h2>
                    <PickupEdit />
                </Route>}
                {role === "donor" &&
                <Route path={`/${role}/edit/:id`}>
                    <h2>Edit pickup</h2>
                    <PickupEdit />
                </Route>}
                {role === "volunteer" && 
                <Route path={`/${role}/browse`}>
                    <h2>Browse open pickups</h2>
                    <PickupList role="browse" userID={profile.id} />
                </Route>
                }
                <Route path={`/${role}/active`}>
                    <h2>Active pickups</h2>
                    <PickupList role={role} userID={profile.id} />
                </Route>
            </Switch>
        </StyledMain>
    );
}

export default Main;