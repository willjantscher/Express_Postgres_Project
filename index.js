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

// TABLE SETUP
// CREATE TABLE students (
//     ID SERIAL PRIMARY KEY,
//     name VARCHAR(30),
//     studentId integer
//   );

// Insert Students
// INSERT INTO students (name, studentId) VALUES
// ('JOHN BROWN', 23),
// ('JOHN WICK', 33),
// ('ABRAHAM LINCOLN',66),
// ('DAMEON ADOLPHIN', 33),
// ('STEVE JOBS', 42);

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3003
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// CODE -------------------------------------------------------

// We’ll tell a route to look for a GET request on the root (/) URL, and return some JSON.
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
// Now set the app to listen on the port you set.
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})



app.get('/students', db.getStudents)
app.get('/students/:id', db.getStudentByStudentId)
app.post('/students', db.createStudent)
app.put('/students/:id', db.updateStudent)
app.delete('/students/:id', db.deleteStudent)


