const express = require('express'); 
const fileController = require('../controllers/tournamentController');
const router = express.Router(); 

//access leaderboard data here; 

router.get('/', fileController.getTournament, (res, req) => {
    res.statusCode(200).json(res.locals); 
});

module.exports = router; 