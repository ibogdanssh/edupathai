import "./App.css";
import NavBar from "../components/navbarChat";
import { useState } from "react";



function App() {
  const [profilePicture, setProfilePicture] = useState("");
  
  return (
    <>
      <NavBar/>
      {/* <div>
        <h1 className="text-3xl font-bold underline">Demo H1</h1>
        <h2>Demo H2</h2>
      </div> */}

    </>
  );
}

export default App;
