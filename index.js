var express = require('express');
const db = require("./helper/db")();
const student_routes = require('./routes/student.js');

const app = express()
const port = 3000;

app.use(express.json());
app.use('/api/student', student_routes)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

