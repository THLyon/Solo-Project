import React, { Component } from 'react'; 
// import app from '../server/server.js';
import Leaderboard from './Components/Leaderboard.jsx'; 
import { Route }  from 'react-router-dom'
import {  render } from 'react'; 

class App extends Component {
   // constructor(props){
        // super(props); 
        
        // this.state = {
        //     tournament: { 
        //         tournamentName: [],
        //         venue: [],
        //         Location: [], 
        //         par: [], 
        //         yardage: [],
        //         players: []  
        //     }, 
        //     players: {
        //         name: [], 
        //         rank: [], 
        //         shots: []
        //     }
        // }
    //}

    // componentDidMount(){
    //     fetch('/api/')
    //         .then(res => res.json())
    //         .then((data) => {

    //         })
    // }

    render(){
        return (
            <div>
                <h1> test </h1>
                {/* <LeaderBoard/> */}
           </div>
        );
    }
}

export default App; 