import React from "react";
import {Link} from "react-router-dom";

// edit profile {props: profile data, profile type (donor or volunteer), update state method, commit edit method}

const ProfileEdit = () => {
    return(
        <form>
            Edit a profile.
            <p>username (can't be edited?)</p>
            <label>
                Display Name
                <input name="displayName" />
            </label>
            <label>
                Phone Number
                <input name="phone" />
            </label>
            <label>
                Address (donors only)
                <input name="address" />
            </label>
            <button>Save</button>
            <Link to=".">Cancel</Link>
        </form>
    );
}

export default ProfileEdit;