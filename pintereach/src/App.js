import "./App.css";
import React, { createContext } from "react";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';



const articles = 
  {
      "userid": 4,
      "username": "admin",
      "primaryemail": "admin@lambdaschool.local",
      "userarticles": [
          {
              "userarticleid": 5,
              "articletitle": "Gaming the World: How Sports Are Reshaping Global Politics and Culture",
              "category": "sports"
          },
          {
              "userarticleid": 6,
              "articletitle": "Robert is great",
              "category": "misc"
          }
      ]
  }




function App() {

  const UserContext = createContext(null);

  return (
   
    <UserContext.Provider>
      <div >
        <header> 
          <NavBar />
        </header>
        
        <footer>
        <Footer/>
        </footer>
 


      </div>
    </UserContext.Provider>
  );
}

export default App;

