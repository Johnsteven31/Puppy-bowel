import {createRoot} from 'react-dom/client'
import react, {useState, useEffect} from "react" 
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Homepage from "./Components/Homepage";
import Settings from "./Components/Settings"
import Puppies from "./Components/Puppies"
import About from "./Components/About"

const router = createBrowserRouter ([
    {
        path: "/", 
        element: <Homepage />,

        children: [ 
            {
                path: "./Settings", 
                element: <Settings /> 
            },
            {
                path: "./About", 
                element: <About/>
            }, 
            {
                path:"./Puppies",
                element:<Puppies/>
            }
        ]
    }
])


const appElement = document.getElementById("app")

const root = createRoot(appElement) 

const Component = () => {
    //step 1: setting up our puppy state
    const [puppyPlayers, setPuppyPlayer]= useState ([]); 

    //step 2: fetching our data using a useeffect hook 
    useEffect (() => {
        async function fetchPuppyData (){
            try{
                // step 2a) fetching the data and recieving a promise
                const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players"); 
                
                //step 2b: translating the promise data 
                const puppydata = await response.json();
                
                //step 2c: save our data to the state 
                setPuppyPlayer(puppydata.data.players)
            } catch (error) {
                console.log (error); 
            }
        }
        fetchPuppyData () 
    }, [])
    
    //Step 3: rendering the state data for our users to see 
    return (
    <div>
        <h1>Puppy Bowel</h1>
        <div>
            {
                puppyPlayers.map ((puppy, idx) =>{
                    return <div key = {idx}>
                        <p>Name of player: {puppy.name}</p>
                        <p>Player Breed: {puppy.breed}</p>
                        <img src = {puppy.imageUrl}></img>
                    </div>
                })
            }
        </div>
    </div>
    )
};

root.render(<Component/>)
ReactDom.render(<RouterProvider router = {router}/>, document,getElementById("app")); 