import React, { useState, useEffect } from "react";
import Pickup from "./pickup";
import PickupEdit from "./pickupEdit";

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

const PickupList = ({userID, buttonType}) => {
    const [pickups, setPickups] = useState([]);
    const [editID, setEditID] = useState(-1);
    
    useEffect(() => {
        setPickups(dummyData.filter(item => item.donorID === userID || item.volunteerID === userID));
    }, [userID]);

    return(
        <div>
            {pickups.map(item =>
                item.id === editID ?
                <PickupEdit key={item.id} pickup={item} setEditID = {setEditID} setPickups = {setPickups} />
                :
                <Pickup key={item.id} pickup={item} setEditID = {setEditID} buttonType={buttonType} />
            )}
        </div>
    );
}

export default PickupList;