import React, { Component } from 'react'; 
import app from '../server/server.js';
import Leaderboard from './Components/Leaderboard.jsx'; 

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