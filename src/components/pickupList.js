import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Pickup from "./pickup";
import data from "../data/data";

// view pickups [state: filtered pickup list, props: full pickup list, user role, user ID, button action]
//   single pickup [props: pickup, button action, button label]

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
        // for volunteers: in the browse view, attach our ID to the targeted pickup; in the active view, remove our ID from it
        if(role === "browse"){
            update(pickupID, userID);
        }
        else{
            update(pickupID, -1);
        }
    }

    const startEdit = (pickupID) => {
        // for donors: switch to the editing view with a param that fills in details of the pickup
        //console.log(`Start editing #${pickupID}`)
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