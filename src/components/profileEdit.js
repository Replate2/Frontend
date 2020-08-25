import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import profileSchema from "../data/profileSchema";

// edit profile {props: profile data, profile type (donor or volunteer), update state method, commit edit method}

const ProfileEdit = ({profile, saveProfile}) => {
    const [profileForm, setProfileForm] = useState(profile)
    const [profileErrors, setProfileErrors] = useState({name: "", displayName: "", phone: ""});
    const [buttonEnabled, setButtonEnabled] = useState(false);

    const updateProfile = (name, value) => {
        setProfileForm({...profileForm, [name]: value});

        Yup.reach(profileSchema, name)
        .validate(value)
        .then(() => setProfileErrors({...profileErrors, [name]: ""}))
        .catch(error => setProfileErrors({...profileErrors, [name]: error.errors[0]}))
    }

    const wrappedUpdate = event => {
        updateProfile(event.target.name, event.target.value);
    }

    const wrappedSave = event => {
        event.preventDefault();
        saveProfile(profileForm);
    }

    useEffect(() => {
        profileSchema.isValid(profileForm).then(valid => setButtonEnabled(valid));
    }, [profileForm]);



    return(
        <form onSubmit={wrappedSave}>
            <p>{profile.name /* can't be edited */}</p>
            <label>
                Display Name
                <input name="displayName" value={profileForm.displayName} onChange={wrappedUpdate} />
            </label>
            <label>
                Phone Number
                <input name="phone" value={profileForm.phone} onChange={wrappedUpdate} />
            </label>
            {profile.address && <label>
                Address (donors only)
                <input name="address" value={profileForm.address} onChange={wrappedUpdate} />
            </label>}
            <div className="errorList">
                <p>{profileErrors.displayName}</p>
                <p>{profileErrors.phone}</p>
                <p>{profileErrors.address}</p>
            </div>
            <button onClick={wrappedSave} disabled={!buttonEnabled}>Save</button>
            <Link to="."><button>Cancel</button></Link>
        </form>
    );
}

export default ProfileEdit;