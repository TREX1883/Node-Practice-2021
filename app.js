// const express = require('express')

// const app = express()
// const port = 5000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

import express from 'express'
import { apiRouter } from './routes/api.route.js'

const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'))

app.use('/api', apiRouter)

// app.get("/api", (req, res) => {
//     // var x;
//     let profile = {
//         "first_name":"Daniel",
//         "last_name":"Purrington",
//         "age":36,
//         "height":5.7,
//         "weight":170
//     }

app.listen(port, () => {
    console.log(`Example app listening at http:// http://localhost:${port}`)
})