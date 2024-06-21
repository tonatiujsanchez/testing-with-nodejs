const { getAll, create, getOne, remove, update, setStudents } = require('../controllers/course.controllers');
const express = require('express');

const routerCourse = express.Router();

routerCourse.route('/')
    .get(getAll)
    .post(create);

routerCourse.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

routerCourse.route('/:id/students')
    .post(setStudents)

module.exports = routerCourse;