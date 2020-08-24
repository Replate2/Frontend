import React from "react";
import { NavLink } from "react-router-dom";

// view profile {props: profile data, profile type (donor or volunteer)}

const VolunteerNav = () => {
    return(
        <div>
            Nav bar for volunteers.
            <NavLink to=".">Signed up</NavLink>
            <NavLink to="profile">Profile</NavLink>
            <NavLink to="browse">Browse</NavLink>
            <NavLink to="/">Log out</NavLink>
        </div>
    );
}

export default VolunteerNav;