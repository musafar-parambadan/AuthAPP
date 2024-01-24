import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  // isLoggedIn is a boolean state variable True when user logged in
  const [isLoggedIn, setIsLoggedIn] = useState();

  return (
    <>
      {/* checks whether the user is authenticated.if displays the dashboard page else, will take user to login page */}
      {isLoggedIn ? <Dashboard /> : <Login onLogin={setIsLoggedIn} />}
    </>
  );
}
export default App;
