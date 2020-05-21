const path = require('path')
const http = require('http')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicDirectory = path.join(__dirname, '../public')

app.set('view engine', 'hbs')


app.use(express.static(publicDirectory))

app.get("about"), (req, res) => {
    res.send('')
}

app.get("comments"), (req, res) => {
    res.send('')
}

app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})
