const Student = require('./Student')
const Course = require('./Course')


Student.belongsToMany(Course, { through: "studentCourse" })
Course.belongsToMany(Student, { through: "studentCourse" })