import React from "react";
import { Link } from "react-router-dom";

// view profile {props: profile data, profile type (donor or volunteer)}

const Profile = () => {
    return(
        <div>
            Display a profile.
            <p>username</p>
            <p>Display Name</p>
            <p>Phone Number</p>
            <p>Address (donors only)</p>
            <Link to="edit">Edit</Link>
        </div>
    );
}

export default Profile;