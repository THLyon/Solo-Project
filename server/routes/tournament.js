//add tournament data here; 

const express = require('express'); 
const router = express.Router()
 

const tournamentController = require('../controllers/tournamentController')


router.get('/tournament', tournamentController.getTournament, (req, res) => {
    return res.status(200).json(res.locals); 
})


module.exports = router; 