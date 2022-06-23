
const express = require('express')
//const tournamentController = require('../controllers/tournamentController');
//const leaderboardController = require('../controllers/leaderboardController');
// import leaderboardController from '../controllers/leaderboardController.js';
const leaderboardController = require('../controllers/leaderboardController.js')
const router = express.Router(); 

//access leaderboard data here; 

router.get('/', leaderboardController.getLeaderboard, (req, res) => {
    console.log(res.locals)
    res.statusCode(200).json(res.locals);  //.tournamentData
});


module.exports= router; 