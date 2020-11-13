const Pool = require('pg').Pool
const pool = new Pool({
//   user: 'me',
  host: 'localhost',
  database: 'api',
//   password: 'password',
  port: 5432,
})




const getStudents = (request, response) => {
    pool.query('SELECT * FROM students ORDER BY studentId', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getStudentByStudentId = (request, response) => {
    const id = parseInt(request.params.studentId)
    // $1 is a numbered
    pool.query('SELECT * FROM students WHERE studentId = $1', [id], (error, results) => {
        console.log(`The id being passed in is ${id}`)
        console.log(typeof(id))
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const createStudent = (request, response) => {
    const { name, studentId } = request.body
    pool.query('INSERT INTO students (name, studentId ) VALUES ($1, $2)', [name, studentId], (error, results) => {
        if (error) {
        throw error
        }
        response.status(201).send(`Student added with ID: ${results.insertId}`)
    })
}

const updateStudent = (request, response) => {
    const id = parseInt(request.params.studentId)
    const { name, studentId } = request.body
    pool.query(
      'UPDATE students SET name = $1, studentId = $2 WHERE id = $3',
      [name, studentId, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Student modified with ID: ${id}`)
      }
    )
}

const deleteStudent = (request, response) => {
    const id = parseInt(request.params.studentId)
  
    pool.query('DELETE FROM students WHERE studentId = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Student deleted with ID: ${id}`)
    })
}



module.exports = {
    getStudents,
    getStudentByStudentId,
    createStudent,
    updateStudent,
    deleteStudent,
  }
