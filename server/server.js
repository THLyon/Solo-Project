const express = require('express')
const path = require('path');

const app = express();
const PORT = 3000; 


const api = 'https://api.sportsdata.io/golf/v2/json/Leaderboard/{tournamentid}'; 
const apiKey = '74708e84c6d243bc832af07d61be8d8d'; 

//require routers

const apiRouter = require('.routes/api'); 
const playerRouter = require('.routes/player'); 
const tournamentRouter = require('.routes/tournament'); 



app.use(express.json()); 

app.get("/", (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.get("/", (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../'))
})

// app.get("/", (req, res) => {
//     return res.send('golf test'); 
// })


//global error handler; 



app.listen(PORT, () => {console.log(`listening on port ${PORT}`)}); 


module.exports = app; 