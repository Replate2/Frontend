import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Pickup from "./pickup";

// view pickups {props: filtered list of pickups; type of button to display, can edit}
//   single pickup ("you know what nevermind" button)

const dummyData = [
    {
        id: 0,
        donorID: 1,
        volunteerID: -1,
        date: "Tuesday",
        type: "tacos",
        qty: "100 lbs",
    },
    {
        id: 1,
        donorID: 2,
        volunteerID: -1,
        date: "Saturday",
        type: "salad",
        qty: "50 lbs",
    },
    {
        id: 2,
        donorID: 1,
        volunteerID: 0,
        date: "Friday",
        type: "fried chicken",
        qty: "150 lbs",
    },
];

const PickupList = ({role, userID}) => {
    const [pickups, setPickups] = useState([]);
    const [allPickups, setAllPickups] = useState(dummyData);
    
    let history = useHistory();

    useEffect(() => {
        if(role === "donor"){
            setPickups(allPickups.filter(item => item.donorID === userID));
        }
        else if(role === "volunteer"){
            setPickups(allPickups.filter(item => item.volunteerID === userID));
        }
        else if(role === "browse"){
            setPickups(allPickups.filter(item => item.volunteerID === -1));
        }
    }, [userID, role, allPickups]);

    const applyVolunteerID = (pickupID) => {
        //todo: API call

        setAllPickups(allPickups.map(item => {
            if(item.id === pickupID)
            {
                if(role === "browse")
                {
                    item.volunteerID = userID;
                }
                else
                {
                    item.volunteerID = -1;
                }
                //console.log(`Setting pickup ${pickupID} to volunteer ${userID}`);
            }
            return item;
        }));
    }

    const startEdit = (pickupID) => {
        console.log(`Start editing #${pickupID}`)
        // fill in the editing view state with the details of pickup #"pickupID"
        // switch to the editing view
        history.push(`../edit/${pickupID}`);
    }

    const buttonAction = () => {
        if(role === "donor"){
            return startEdit;
        }
        else {
            return applyVolunteerID;
        }
    }

    const buttonText = () => {
        if(role === "donor"){
            return "Edit";
        }
        else if(role === "volunteer"){
            return "Cancel";
        }
        else if(role === "browse"){
            return "Sign Up";
        }
    }

    return(
        <div>
            {/*volunteerID}
            {`${donorID}`*/}
            {pickups.map(item =>
                <Pickup key={item.id} pickup={item} buttonAction={buttonAction()} buttonText={buttonText()} />
            )}
        </div>
    );
}

export default PickupList;