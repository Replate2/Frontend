import React, {useState, useEffect} from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Axios from "axios";
import Profile from "./profile";
import ProfileEdit from "./profileEdit";
import PickupList from "./pickupList";
import PickupEdit from "./pickupEdit";
import Nav from "./nav";
import StyledMain from "./styled/StyledMain";
import data from "../data/data";

// main page [state: pickup list, user profile; props: user role]

const defaultProfile = role => {
    if(role === "donor") return 1;
    else return 0;
}

const Main = ({role}) => {
    const [profile, setProfile] = useState({});
    const [allProfiles, setAllProfiles] = useState([]);
    const [allPickups, setAllPickups] = useState([]);

    let history = useHistory();

    useEffect(() => {
        setAllProfiles(data.dummy.profiles);
        setAllPickups(data.dummy.pickups);
        // if APIs become suitable in the future then fetch initial data from them
    }, []);

    useEffect(() => {
        setProfile(allProfiles[defaultProfile(role)])
        // example get from API (not currently complete)
        /*Axios.get(`${data.api.getProfile}/${defaultProfile(role)}`)
        .then(response => setProfile(response.data))
        .catch(error => console.log(error));*/
    }, [role, allProfiles]);

    const saveProfile = (newProfile) => {
        // send data to API and amend profile on reply
        Axios.post(data.api.postProfile, newProfile)
        .then(response => {
            setProfile(response.data);
            history.push("../profile/");
        })
        .catch(error => console.log(error));
    };

    const saveOrAddPickup = (newPickup, targetUrl) => {
        // send data to API and amend pickup list on reply
        Axios.post(data.api.postPickup, newPickup)
        .then(response => {
            const result = [...allPickups];
            //console.log(result);

            const toAdd = response.data;
            if(toAdd.pickupID === undefined){
                toAdd.pickupID = response.data.id;
            } // assumes the API adds an ID, but not necessarily the same ID each time, so only harvest it once

            //console.log(toAdd);

            for(let i = 0; i < result.length; i++)
            {
                if(result[i].pickupID === toAdd.pickupID) // if this is an existing pickup, replace it, then exit
                {
                    //console.log("replacing item");
                    result[i] = toAdd;
                    setAllPickups(result);
                    if(targetUrl) // leave targetUrl blank for no redirect
                    {
                        history.push(targetUrl);
                    }
                    return;
                }
            }
            result.push(toAdd); // the result's pickupID didn't match any existing ones, so it must be new; add it
            setAllPickups(result);
            if(targetUrl)
            {
                history.push(targetUrl);
            }
        })
        .catch(error => console.log(error));
    }

    const updatePickupVolunteer = (pickupID, volunteerID) => {
        // wrapper for saveOrAddPickup that changes volunteerID without needing the rest of the pickup to be passed down so far in props

        //console.log(`update pickup #${pickupID} with volunter #${volunteerID}`);
        for(let i = 0; i < allPickups.length; i++){
            if(allPickups[i].pickupID === pickupID){
                const modifiedPickup = {...allPickups[i], volunteerID: volunteerID};
                //console.log(modifiedPickup);
                saveOrAddPickup(modifiedPickup, "");
            }
        }
    }

// main page [state: pickup list, user profile; props: user role]
//   navigation [props: user role]
//   default - view pickups [state: filtered pickup list, props: full pickup list, user role, user ID, button action]
//     single pickup [props: pickup, button action, button label]
//   volunteer only - browse open pickups [state: filtered pickup list, props: full pickup list, user role, user ID, button action]
//     single pickup [props: pickup, button action, button label]
//   donor only - create/edit pickup [state: form values, form errors; props: save action, donor ID (if creating), pickup list (if editing); params: pickup ID (if editing)]
//   view profile [props: user profile]
//   edit profile [state: form values, form errors; props: user profile, save action]

return(
        <StyledMain>
            <Nav role={role} />
            {profile ? 
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
                    <PickupEdit save={saveOrAddPickup} donorID={profile.userID} />
                </Route>}
                {role === "donor" &&
                <Route path={`/${role}/edit/:id`}>
                    <h2>Edit pickup</h2>
                    <PickupEdit allPickups={allPickups} save={saveOrAddPickup} />
                </Route>}
                {role === "volunteer" && 
                <Route path={`/${role}/browse`}>
                    <h2>Browse open pickups</h2>
                    <PickupList allPickups={allPickups} role="browse" userID={profile.userID} update={updatePickupVolunteer} />
                </Route>
                }
                <Route path={`/${role}/active`}>
                    <h2>Active pickups</h2>
                    <PickupList allPickups={allPickups} role={role} userID={profile.userID} update={updatePickupVolunteer} />
                </Route>
            </Switch>
            :
                <p>Loading, please wait.</p>
            }
        </StyledMain>
    );
}

export default Main;