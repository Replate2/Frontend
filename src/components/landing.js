import React from "react";
import { Link } from "react-router-dom";

// landing page (fake login buttons for donors and volunteers)

// donor page [state: pickups, donor profile]

const Landing = () => {
    return(
        <div>
            Initial landing page
            <Link to="donor/active/"><button>Log in as donor</button></Link>
            <Link to="donor/volunteer/"><button>Log in as volunteer</button></Link>
        </div>
    );
}

export default Landing;