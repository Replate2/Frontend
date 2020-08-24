import React from "react";
import {Switch, Route} from "react-router-dom";
import Landing from "./components/landing";
import Donor from "./components/donor";
import Volunteer from "./components/volunteer";


// APP STRUCTURE:

// App [state - user ID?]
//   landing page (fake login buttons for donors and volunteers)
//   donor page [state: pickups, donor profile]
//     view pickups (default view; "create new" button)
//       single pickup
//     view/edit profile
//     create/edit pickup
//   volunteer page [state: pickups?, profile]
//     view open pickups
//       single pickup ("take this pickup" button)
//     view assigned pickups
//       single pickup ("you know what nevermind" button)
//     view/edit profile


function App() {
  return (
    <div>
      <Switch>
        <Route path="/donate">
          <Donor />
        </Route>
        <Route path="/volunteer">
          <Volunteer />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
