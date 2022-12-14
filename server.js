const bodyParser = require('body-parser');

// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app= express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors);
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=4000;

const server=app.listen(port,()=>{console.log(`Server running on Localhost: ${port}`)});

// Callback function to complete GET '/all'
app.get('/all', function(req,res){
    res.send(projectData);
});

// Post Route
app.post('/addWeather',addWeather);

function addWeather(req,res){
    newEntry={
        temp:req.body.temp,
        date:req.body.date,
        feelings:req.body.feelings

    }


    projectData.push(newEntry);
};
    