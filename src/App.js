import React from "react";
import {Switch, Route} from "react-router-dom";
import Landing from "./components/landing";
import Main from "./components/main";
import StyledApp from "./components/styled/StyledApp";

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
    <StyledApp>
      <Switch>
        <Route path="/donor">
          <Main role="donor" />
        </Route>
        <Route path="/volunteer">
          <Main role="volunteer" />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </StyledApp>
  );
}

export default App;
