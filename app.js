
//npm run start     to run application

const express = require('express')
const app = express()
const port = 3003
const bodyParser = require('body-parser')   //allows you to parse through requests

app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))





