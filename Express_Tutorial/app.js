const express = require('express')
const { json } = require('express/lib/response')
const fs = require('fs')
const path = require('path')
const app = express()

const { tempData, classRoom } = require("./data.js")

// [readMultiFile]
// First, create a folder name 'public' and it contains all the file we need except
// (In this case, same as we worked before, this folder contains css, pvg and js file, except html file)
// app.use(express.static('./public))

app.use(express.json())

// Get method
app.get('/', (req, res) => {
    // This line will make the same thing as Node_Tutorial/app.js
    // They just read only .html file
    // So, to solve this, move to above [readMultiFile]
    res.sendFile(path.join(__dirname, 'view', 'view.html'), err => {
        if (err) {
            console.log(err.message)
            res.status(400).send(err.message)
        }
    })
})

app.get('/about', (req, res) =>{
    res.status(200).send(`<h1>Author: Cabe</h1>`)
})

app.get('/data', (req, res) => {
    // Attention: Now I don't know why but we may just use only one type of data (HTML, JSON, XML,...)
    // To read. It looks like: If res response a lot of thing in a lot of data-type, just use one to read all
    
    // In the line below, we use HTML script
    // res.send(`<h1>Welcome to my website</h1><br>
    // <p>All of data we are having now:</p><br>
    // `)
    // Take all of information of each data point
    // But in this line, we use JSON script
    // res.json(tempData)

    // Just take what information to let client see
    const newTempData = tempData.map(data => {
        const { Name, Age, Gender } = data
        return { Name, Age, Gender }
    })
    res.json(newTempData)
})

app.get('/data/:name', (req, res) => {
    const nameData = tempData.map(data => {
        const { Name, Age, Gender } = data
        return { Name, Age, Gender }
    })
    const newNameData = nameData.find(c => c.Name === req.params.name.toString())
    if (!newNameData) {
        res.status(400).json(`Data with given name ${req.params.name} is not exist`)
        return;
    }
    // Show all properties in idData
    // res.status(200).send(`tempData with name: ${req.params.name} is ${newNameData}`)
    // Choose properties to show
    res.status(200).json(newNameData)
})

app.get('/classRoom/:id', (req, res) => {
    const idClassroom = classRoom.find(c => c.id === parseInt(req.params.id))
    if (!idClassroom) {
        res.status(400).json(`Classroom with given id ${req.params.id} is not exist`)
        return;
    }
    // As I talked above, the client just use one data-type for showing. So if we use other data-type (like HTML, XML,...),
    // JSON data can't reading. But if we access to a specific property, it will be a string data-type and can be showed
    res.status(200).json(`Name of that classroom is: ${idClassroom.name}`)
})

// If user access to anyone which not exist above, this function will work
app.all('*', (req, res) => {
    res.status(404).send(`<h1>Page not found</h1>`)
    res.send(`<a href='http://localhost:3000/'>Home page</a>`)
})

app.listen(3000, () => {
    console.log("Server is running on Port 3000...")
})