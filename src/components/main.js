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
    if(role === "donor") return 1;
    else return 0;
}

const dummyProfiles = [
    {
        userID: 0,
        name: "volunteer",
        displayName: "J. Random Volunteer",
        phone: "(555) 098-7654",
    },
    {
        userID: 1,
        name: "jdoe",
        displayName: "John Doe",
        phone: "(123) 456-7890",
        address: "1 Main St."
    },
    {
        userID: 2,
        name: "jdoe2",
        displayName: "Jane Doe",
        phone: "(555) 123-4567",
        address: "2 Second St."
    },
]

const dummyPickups = [
    {
        pickupID: 0,
        donorID: 1,
        volunteerID: -1,
        date: "Tuesday",
        type: "tacos",
        qty: "100 lbs",
    },
    {
        pickupID: 1,
        donorID: 2,
        volunteerID: -1,
        date: "Saturday",
        type: "salad",
        qty: "50 lbs",
    },
    {
        pickupID: 2,
        donorID: 1,
        volunteerID: 0,
        date: "Friday",
        type: "fried chicken",
        qty: "150 lbs",
    },
];

const Main = ({role}) => {
    const [profile, setProfile] = useState({});
    const [allProfiles, setAllProfiles] = useState([]);
    const [allPickups, setAllPickups] = useState([]);

    let history = useHistory();

    useEffect(() => {
        setAllProfiles(dummyProfiles);
        setAllPickups(dummyPickups);
        // if APIs become suitable in the future then fetch initial data from them
    }, []);

    useEffect(() => {
        setProfile(allProfiles[defaultProfile(role)])
        // example get from API (not currently complete)
        /*Axios.get(`https://blue-replate.herokuapp.com/users/${defaultProfile(role)}`)
        .then(response => setProfile(response.data))
        .catch(error => console.log(error));*/
    }, [role, allProfiles]);

    const saveProfile = (newProfile) => {
        // send data to API and amend profile on reply
        Axios.post("https://reqres.in/api/users", newProfile)
        .then(response => {
            setProfile(response.data);
            history.push("../profile/");
        })
        .catch(error => console.log(error));
    };

    const saveOrAddPickup = (newPickup, targetUrl) => {
        Axios.post("https://reqres.in/api/users", newPickup)
        .then(response => {
            const result = [...allPickups];
            //console.log(result);

            const toAdd = response.data;
            if(toAdd.pickupID === undefined){
                toAdd.pickupID = response.data.id;
            }

            //console.log(toAdd);

            for(let i = 0; i < result.length; i++)
            {
                if(result[i].pickupID === toAdd.pickupID)
                {
                    //console.log("replacing item");
                    result[i] = toAdd;
                    setAllPickups(result);
                    if(targetUrl)
                    {
                        history.push(targetUrl);
                    }
                    return;
                }
            }
            result.push(toAdd);
            setAllPickups(result);
            if(targetUrl)
            {
                history.push(targetUrl);
            }
        })
        .catch(error => console.log(error));
    }

    const updatePickupVolunteer = (pickupID, volunteerID) => {
        console.log(`update pickup #${pickupID} with volunter #${volunteerID}`);
        for(let i = 0; i < allPickups.length; i++){
            if(allPickups[i].pickupID === pickupID){
                const modifiedPickup = {...allPickups[i], volunteerID: volunteerID};
                //console.log(modifiedPickup);
                saveOrAddPickup(modifiedPickup, "");
            }
        }
    }

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