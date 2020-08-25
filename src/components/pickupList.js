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

const PickupList = ({volunteerID, donorID, userID}) => {
    const [pickups, setPickups] = useState([]);
    const [allPickups, setAllPickups] = useState(dummyData);
    
    let history = useHistory();

    useEffect(() => {
        if(donorID >= -1){
            //console.log("filtering by donor ID");
            //console.log(dummyData.filter(item => item.donorID === donorID));
            setPickups(allPickups.filter(item => item.donorID === donorID));
        }
        else if(volunteerID >= -1){
            //console.log("filtering by volunteer ID");
            //console.log(dummyData.filter(item => item.volunteerID === volunteerID));
            setPickups(allPickups.filter(item => item.volunteerID === volunteerID));
        }
    }, [volunteerID, donorID, allPickups]);

    const applyVolunteerID = (pickupID) => {
        //todo: API call

        setAllPickups(allPickups.map(item => {
            if(item.id === pickupID)
            {
                item.volunteerID = userID;
                console.log(`Setting pickup ${pickupID} to volunteer ${userID}`);
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
        if(volunteerID >= -1) return applyVolunteerID;
        else return startEdit;
    }

    const buttonText = () => {
        if(volunteerID === -1){
            return "Sign Up";
        }
        else if(volunteerID > -1){
            return "Cancel";
        }
        else return "Edit";
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