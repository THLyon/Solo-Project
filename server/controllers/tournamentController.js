const fs = require('fs/promises'); 
const path = require('path'); 

const api = 'https://api.sportsdata.io/golf/v2/json/Leaderboard/{tournamentid}'; 
const apiKey = '74708e84c6d243bc832af07d61be8d8d'; 

//error handler?

const fileController = {}; 


fileController.getTournament = (req, res, next) => {
   const newData = req.params.id;
   fetch(`https://api.sportsdata.io/golf/v2/json/Leaderboard/${tournamentid}`)
   .then((data) => data.json())
   .then((data) => {
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

