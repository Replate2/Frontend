import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import * as Yup from "yup";
import pickupSchema from "../data/pickupSchema";
import StyledProfile from "./styled/StyledProfile";

// view single pickup {props: pickup data, commit action}

const PickupEdit = ({allPickups, save, donorID}) => {
    const [pickup, setPickup] = useState({date: "", type: "", qty: "", donorID: donorID});
    const [errors, setErrors] = useState({});
    const [buttonEnabled, setButtonEnabled] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        //console.log(`load ID:${id}`);
        if(id !== undefined && allPickups !== undefined)
        {
            //console.log(allPickups);
            for(let i = 0; i < allPickups.length; i++)
            {
                if(Number(id) === allPickups[i].pickupID) // note to self: Params ARE PASSED AS STRINGS, even when you don't want them to be. >:(
                {
                    //console.log(`load pickup #${allPickups[i]}`);
                    setPickup(allPickups[i]);
                }
            }
        }
    }, [id, allPickups]);

    const update = (name, value) => {
        setPickup({...pickup, [name]: value})

        Yup.reach(pickupSchema, name)
        .validate(value)
        .then(() => setErrors({...errors, [name]: ""}))
        .catch(error => setErrors({...errors, [name]: error.errors[0]}))
    }

    const wrappedUpdate = event => {
        update(event.target.name, event.target.value)
    }

    const wrappedSave = event => {
        event.preventDefault();
        //console.log(`Save pickup#${pickup.pickupID}`)
        save(pickup, "../active/");
    }

    useEffect(() => {
        pickupSchema.isValid(pickup).then(valid => setButtonEnabled(valid));
    }, [pickup]);

    return(
        <form onSubmit={wrappedSave}>
            <StyledProfile>
                <label>
                    Date and Time
                    <input type="date" min="2020-01-01" name="date" value={pickup.date} onChange={wrappedUpdate} />
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
                <div>
                    <button onClick={wrappedSave} disabled={!buttonEnabled}>Save</button>
                    <Link to="../active/">Cancel</Link>
                </div>
            </StyledProfile>
        </form>
    );
}

export default PickupEdit;