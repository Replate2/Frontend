import React from "react";
import { Link } from "react-router-dom";

// view profile {props: profile data, profile type (donor or volunteer)}

const Profile = ({profile}) => {
    return(
        <div>
            <p>{profile.name}</p>
            <p>{profile.displayName}</p>
            <p>{profile.phone}</p>
            <p>{profile.address}</p>
            <Link to="edit">Edit</Link>
        </div>
    );
}

export default Profile;