import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
// TO GET YOUR ROUTER WORKING, DON'T FORGET TO IMPORT THE OUTLET COMPONENT FROM THE REACT-ROUTER-DOM DEPENDENCY
import { Outlet } from "react-router-dom";

const Homepage = () => {
    const [puppies, setPuppies] = useState(["Snoopy", "Beethoven", "Kasha"])

    return (
        <div>
            <h1> Welcome to our React Router Demo</h1>
            <Navbar />

            {/* This section should show the content of each of the paths of our website */}
            <p>Our content will be shown below: </p>
            <Outlet context={[puppies, setPuppies]} />
                {/* The Outlet component can shapeshift into 3 different components: About, Settings, or AllPuppies. */}

            {/* Note: The Outlet component is going to render the content of each path relative to the component that is connected to it.  */}
                {/* For example:
                    If the path name is ellesWebsite.com/puppies, then the puppies component will render where the Outlet component is.
                    Or if the path name is ellesWebsite.com/settings, then the settings component will replace the puppies component where the Outlet component is. 
                */}
        </div>
    )
};

export default Homepage;
