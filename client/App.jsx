import React, { Component } from 'react'; 
import app from '../server/server.js';
import Leaderboard from './Leaderboard.jsx'; 

class App extends Component {
    constructor(props){
        super(props); 
        
        this.state = {
            tournament: { 
                name: [],
                venue: [],
                Location: [], 
                par: [], 
                yardage: [],
                players: []  
            }
        }
        // this.state = {
        //     //tournaments[players[0]]
        //     //tournaments[players[1]]
        //     //tournaments[players[2]]
        //     //tournaments[players[3]]
        //     //tournaments[players[4]]
        //     //tournaments[players[5]]
        //     //tournaments[players[6]]
        //     //tournaments[players[7]]
        //     //tournaments[players[8]]
        //     //tournaments[players[9]]
        //     //tournaments[players[10]], 
        // }
    }

    componentDidMount(){
        fetch('/api/')
            .then(res => res.json())
            .then((data) => {

            })//callback func to deal with data for me
    }

    render(){
        return (
            <div>
            <h1> Gimme </h1>
            {/* <LeaderBoard/> */}
            </div>
        );
    }
}

export default App; 