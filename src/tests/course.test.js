const request = require('supertest')
const app = require('../app')


const course = {
    name: 'Matemáticas',
    credits: 500
}

const courseUpdate = {
    name: 'Español',
    credits: 400
}

const BASE_URL = '/api/v1/courses'

let courseId

test('POST => /courses should return status code 201 and res.body.name === course.name', async() => {

    const res = await request(app)
        .post(BASE_URL)
        .send(course)

    courseId = res.body.id

    expect( res.status ).toBe(201)
    expect( res.body ).toBeDefined()
    expect( res.body.name ).toBe( course.name )
})


test("GET => /courses should return status code 200 and res.body[0].name === course.name", async()=>{
    const res = await request(app)
        .get(BASE_URL)
    
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body[0].name).toBe(course.name)
    expect(res.body).toHaveLength(1)
    
})

test("GET => /courses/:id should return status code 200 and res.body.name === course.name", async()=>{
    const res = await request(app)
        .get(`${BASE_URL}/${ courseId }`)
    
    expect( res.statusCode ).toBe(200)
    expect( res.body.name ).toBe( course.name )
    expect( res.body ).toBeDefined()
})

test("PUT => /courses/:id should return status code 200 and res.body.name === courseUpdate.name", async()=> {

    const res = await request(app)
        .put(`${BASE_URL}/${courseId}`)
        .send(courseUpdate)

    expect( res.status ).toBe(200)
    expect( res.body.name ).toBe( courseUpdate.name )

})

test("DELETE => /courses/:id should return status code 204", async()=>{
    const res = await request(app)
        .delete(`${BASE_URL}/${courseId}`)
    
    expect(res.statusCode).toBe(204)
})