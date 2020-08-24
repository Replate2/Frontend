import React from "react";
import {Link} from "react-router-dom";

// edit profile {props: profile data, profile type (donor or volunteer), update state method, commit edit method}

const ProfileEdit = ({profile, errors, updateProfile, saveProfile}) => {
    const wrappedUpdate = event => {
        updateProfile(event.target.name, event.target.value);
    }

    const wrappedSave = event => {
        event.preventDefault();
        saveProfile();
    }

    return(
        <form onSubmit={wrappedSave}>
            <p>{profile.name /* can't be edited */}</p>
            <label>
                Display Name
                <input name="displayName" value={profile.displayName} onChange={wrappedUpdate} />
            </label>
            <label>
                Phone Number
                <input name="phone" value={profile.phone} onChange={wrappedUpdate} />
            </label>
            {profile.address && <label>
                Address (donors only)
                <input name="address" value={profile.address} onChange={wrappedUpdate} />
            </label>}
            <div className="errorList">
                <p>{errors.name}</p>
                <p>{errors.displayName}</p>
                <p>{errors.phone}</p>
                <p>{errors.address}</p>
            </div>            
            <button onClick={wrappedSave}>Save</button>
            <Link to="."><button>Cancel</button></Link>
        </form>
    );
}

export default ProfileEdit;