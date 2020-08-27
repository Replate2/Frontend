import React from "react";
import {Link} from "react-router-dom";
import StyledBlankMessage from "../components/styled/StyledBlankMessage"

const data = {
    api: {
        getProfile: "https://blue-replate.herokuapp.com/users",
        getPickup: "https://blue-replate.herokuapp.com/leftovers", // not yet fully implemented, use test APIs
        postProfile: "https://reqres.in/api/users",
        postPickup: "https://reqres.in/api/users",
    },
    dummy: {
        profiles: [
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
        ],        
        pickups: [
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
        ],        
    },
    errors: {
        noName: "Please enter a name to show other users.",
        noPhone: "Please enter a phone number or other contact information.",
        noDate: "Please enter a date.",
        noQty: "Please enter the quantity of food available.",
        noType: "Please enter the type of food available.",
    },
    blankMessages: { // JSX to display if a pickupList is blank, by role:
        donor: <StyledBlankMessage>You don't have any pickups scheduled. Would you like to <Link to="../new/">create one?</Link></StyledBlankMessage>,
        volunteer: <StyledBlankMessage>You don't have any pickups scheduled. Would you like to <Link to="../browse/">sign up for one?</Link></StyledBlankMessage>,
        browse: <StyledBlankMessage>There are no active pickups in need of volunteers.</StyledBlankMessage>,
    },
};

export default data;