const fs = require('fs/promises'); 
const path = require('path'); 


const tournamentIdApi = 'https://api.sportsdata.io/golf/v2/json/CurrentSeason';
const tournamentApiKey = '74708e84c6d243bc832af07d61be8d8d';

//error handler?

//middleware fetching tournament id based on date; 
    //pass in tournament id based on date

const tournamentController = {}; 

const createErr = (errInfo) => {
    const { method, type, err } = errInfo; 
    return {
        log: `tournamentController.${getTournament}: ${type} ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`, 
        message: { err: `tournamentController.${getTournament}. ERROR: check console log for more details`}
    }
}



tournamentController.getTournament = (req, res, next) => {
//    const tournamentData = req.params.tournamentData;
   fetch(tournamentIdApi)
   .then((data) => data.json())
   .then((data) => {
    //  if(data.date === new Date.now()){
    //     res.locals.tournaments = data.date; 
    //  }
       res.locals.tournaments = data; 
       return next(); 
   })
   .catch(err => next(createErr({
       method: 'getTournament', 
       type: 'when reading file', 
       err: err, 
   })));
}

//potential add player file controller here

module.exports = tournamentController; 