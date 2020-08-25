import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";

// view single pickup {props: pickup data, commit action}

const PickupEdit = () => {
    const [pickup, setPickup] = useState({date: "", type: "", qty: ""});
    const [errors, setErrors] = useState({});

    const {id} = useParams();

    useEffect(() => {
        if(id !== undefined)
        {
            setPickupToExisting(id);
        }
    }, [id]);

    const setPickupToExisting = id => {
        // get API call for pickup #"id"
        setPickup({id: id, date: "", type: `editing existing pickup ${id}`, qty: ""});
    }

    const wrappedUpdate = event => {
        setPickup({...pickup, [event.target.name]: event.target.value})
        // validation here
    }

    const wrappedSave = event => {
        event.preventDefault();
        // do API call
    }

    return(
        <form onSubmit={wrappedSave}>
            <label>
                Date and Time
                <input name="date" value={pickup.date} onChange={wrappedUpdate} />
            </label>
            <label>
                Description
                <input name="type" value={pickup.type} onChange={wrappedUpdate} />
            </label>
            <label>
                Quantity
                <input name="qty" value={pickup.qty} onChange={wrappedUpdate} />
            </label>
            <div className="errorList">
                <p>{errors.date}</p>
                <p>{errors.type}</p>
                <p>{errors.qty}</p>
            </div>
            <button onClick={wrappedSave}>Save</button>
            <Link to="."><button>Cancel</button></Link>
        </form>
    );
}

export default PickupEdit;