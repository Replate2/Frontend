import React from "react";
import { Link } from "react-router-dom";
import StyledProfile from "./styled/StyledProfile";

// view profile {props: profile data, profile type (donor or volunteer)}

const Profile = ({profile}) => {
    return(
        <StyledProfile>
            {/*<p>{profile.name}</p>*/}
            <p>{profile.displayName}</p>
            <p>{profile.phone}</p>
            <p>{profile.address}</p>
            <Link to="edit">Edit</Link>
        </StyledProfile>
    );
}

export default Profile;