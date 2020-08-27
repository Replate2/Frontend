import React from "react";
import {Switch, Route} from "react-router-dom";
import Landing from "./components/landing";
import Main from "./components/main";
import StyledApp from "./components/styled/StyledApp";

// APP STRUCTURE:

// App
//   landing page (fake login buttons for donor and volunteer)
//   main page [state: pickup list, user profile; props: user role]
//     navigation [props: user role]
//     default - view pickups [state: filtered pickup list, props: full pickup list, user role, user ID, button action]
//       single pickup [props: pickup, button action, button label]
//     volunteer only - browse open pickups [state: filtered pickup list, props: full pickup list, user role, user ID, button action]
//       single pickup [props: pickup, button action, button label]
//     donor only - create/edit pickup [state: form values, form errors; props: save action, donor ID (if creating), pickup list (if editing); params: pickup ID (if editing)]
//     view profile [props: user profile]
//     edit profile [state: form values, form errors; props: user profile, save action]


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
