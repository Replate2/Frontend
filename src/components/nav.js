import React from "react";
import { NavLink } from "react-router-dom";

// view profile {props: profile data, profile type (donor or volunteer)}

const Nav = ({role}) => {
    return(
        <nav>
            <NavLink to="../active/">Active</NavLink>
            {role === "volunteer" && <NavLink to="../browse/">Browse</NavLink>}
            {role === "donor" && <NavLink to="../new/">Create</NavLink>}
            <NavLink to="../profile/">Profile</NavLink>
            <NavLink to="/">Log out</NavLink>
        </nav>
    );
}

export default Nav;