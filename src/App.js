import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
