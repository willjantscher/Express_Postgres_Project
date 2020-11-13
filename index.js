// PROJECT CHALLENGE    // Will Jantscher and Dameon Adolphin
// GET student - returns a list of all students
// GET students/:studentId - returns details of a specific student by student id
// GET student?search= - returns a list of students filtered on name matching the given query
// GET grades/:studentId - returns all grades for a given student by student id
// POST grade - records a new grade, returns success status in JSON response and stores the new grade in the database
// POST register - creates a new user, returns success status in JSON response and stores the new user in the database

// SETUP/load dependencies
// npm init
// npm install
// npm i express pg     //install express for the server and node-postgress to connect with PostgreSQL


//npm run start     to run application

// created api database and connected
// 


const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
