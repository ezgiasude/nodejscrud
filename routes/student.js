const express = require('express')
const router = express.Router()

const  { 
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
    findStudent
} = require('../controllers/student.js')

router.get('/', getStudents)
router.post('/', createStudent)
router.put('/:id', updateStudent)
router.delete('/:id', deleteStudent)
router.get('/:id', findStudent)

module.exports = router