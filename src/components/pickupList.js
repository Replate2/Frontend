import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Pickup from "./pickup";
import data from "../data/data";

// view pickups {props: filtered list of pickups; type of button to display, can edit}
//   single pickup ("you know what nevermind" button)

const PickupList = ({allPickups, role, userID, update}) => {
    const [pickups, setPickups] = useState([]);
    
    let history = useHistory();

    useEffect(() => {
        //console.log(allPickups);
        if(role === "donor"){
            //console.log(allPickups.filter(item => item.donorID === userID));
            setPickups(allPickups.filter(item => item.donorID === userID));
        }
        else if(role === "volunteer"){
            //console.log(allPickups.filter(item => item.volunteerID === userID));
            setPickups(allPickups.filter(item => item.volunteerID === userID));
        }
        else if(role === "browse"){
            //console.log(allPickups.filter(item => item.volunteerID === -1));
            setPickups(allPickups.filter(item => item.volunteerID === -1));
        }
    }, [userID, role, allPickups]);

    const applyVolunteerID = (pickupID) => {
        //todo: API call
        if(role === "browse"){
            update(pickupID, userID);
        }
        else{
            update(pickupID, -1);
        }
    }

    const startEdit = (pickupID) => {
        //console.log(`Start editing #${pickupID}`)
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
            {pickups && pickups.length > 0 ?
            pickups.map(item =>
                <Pickup key={item.pickupID} pickup={item} buttonAction={buttonAction()} buttonText={buttonText()} />
            )
            :
            data.blankMessages[role]
            }
        </div>
    );
}

export default PickupList;