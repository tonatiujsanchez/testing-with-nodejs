const request = require('supertest')
const app = require('../app')


const student = {
    firstName: 'Brandon',
    lastName: 'Hernandez',
    birthday: '1993-07-07',
    program: 'POO',
}

const studentUpdated = {
    firstName: 'Rodrigo',
    lastName: 'Cardoso',
    birthday: '1990-01-28',
    program: 'Estructura de Datos',
}

let studentId

const BASE_URL = '/api/v1/students'

test('POST => /students: should return status code 201', async() => {
    const res = await request(app)
        .post(BASE_URL)
        .send(student)
    
        studentId = res.body.id

        expect(res.status).toBe(201)
        expect(res.body).toBeDefined()
        expect(res.body.firstName).toBe(student.firstName)
        
})

test('GET => /students: should return status code 200', async() => {
    const res = await request(app)
        .get(BASE_URL)
    
        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body[0].firstName).toBe(student.firstName)
        expect(res.body).toHaveLength(1)
})


test('GET => /students/:id: should return status code 200', async() => {
    const res = await request(app)
        .get(`${ BASE_URL }/${ studentId }`)
    
        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
        expect(res.body.firstName).toBe(student.firstName)
})


test('PUT => /students/:id should return status 200', async()=>{
    const res= await request(app)
        .put(`${ BASE_URL }/${ studentId }`)
        .send(studentUpdated)
    expect( res.status ).toBe(200)
    expect( res.body.firstName ).toBe( studentUpdated.firstName )
})

test('DELETE => /students/:id should return status code 204', async()=>{
    const res = await request(app)
        .delete(`${ BASE_URL }/${ studentId }`)

    expect(res.status).toBe(204)
})
