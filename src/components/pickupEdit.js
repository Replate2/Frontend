import React from "react";
import {Link} from "react-router-dom";

// view single pickup {props: pickup data, commit action}

const PickupEdit = ({pickup, errors, updatePickup, savePickup}) => {
    const wrappedUpdate = event => {
        updatePickup(event.target.name, event.target.value);
    }

    const wrappedSave = event => {
        event.preventDefault();
        savePickup();
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