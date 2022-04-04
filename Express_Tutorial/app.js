const express = require('express')
const { tempData, classRoom } = require("./data.js")
const fs = require('fs')
const path = require('path')
const app = express()

// [readMultiFile]
// First, create a folder name 'public' and it contains all the file we need except
// (In this case, same as we worked before, this folder contains css, pvg and js file, except html file)
// app.use(express.static('./public))


// Middleware function: Use function look like a preprocessing, execute this callback function than execute the next callback-function
// In below function, 2 params req and res are compulsory, but the param 'next' is used as a step forward to the next function
// Note: Middleware function like this is reuseable
const logger = (req, res, next) => {
    console.log(req.method, req.url, new Date().getFullYear())
    // Note: res.send() just work in this middleware function. So if this middleware function doesn't have any res.send()
    // we can use next()
    // res.send("Hm...")
    next()
}
const authorize = (req, res, next) => {
    console.log("Running this middleware function...")
    next()
}
const checkAuthorize = (req, res, next) => {
    // This function is used for chechking a user register or not
    // Now, we will use another way to use query
    let {...queryStatement} = req.query
    if (!queryStatement) {
        // This line make user must authorize first
        // If user give a query which all properties are exist in database, user will be access with that page
        res.status(401).send("Unautorized")
        next()
    }
    else {
        // Control what informations will appear 
        // (This step don't need to set up because when the user give correct information, 
        // we can allow them to see all properties of that data which match to given information they provided)
        let newTempData = tempData.map(data => {
            let { Name, Age, Gender } = data
            return { Name, Age, Gender}
        })
        let keys = Object.getOwnPropertyNames(queryStatement)
        for (let i=0; i<keys.length; i++) {
            newTempData = newTempData.filter(data => data[keys[i]] == queryStatement[keys[i]])
        }
        // Check if exist or not any tempData with suitable with given informations
        if (newTempData) {
            req.user = newTempData            
            res.status(200).json(newTempData)
            next()
        } else {
            res.status(400).send("Bad request!")
        }
    }
}
// app.use() is used as a middleware function and it apply to all function (as default)
// or we can set it for applying specific type of function by: app.use(<path>, middlewareFunction)
app.use(express.json())
// app.use() can apply by a callback function in this program or as a export function from an external module
// We also can use multiple callback function like below
app.use([authorize, logger])
// An example about applying a callback function for a specific path
// The process: req -> middleware-function -> res
app.use('/checkAuthor', checkAuthorize)

// Get method
app.get('/', logger, (req, res) => {
    // This line will make the same thing as Node_Tutorial/app.js
    // They just read only .html file
    // So, to solve this, move to above [readMultiFile]
    res.sendFile(path.join(__dirname, 'view', 'view.html'), err => {
        if (err) {
            console.log(err.message)
            res.status(400).send(err.message)
            return;
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
    let newTempData = tempData.map(data => {
        let { Name, Age, Gender } = data
        return { Name, Age, Gender }
    })
    res.json(newTempData)
})

app.get('/classRoom', (req, res) => {
    res.json(classRoom)
})

app.get('/data/:name', (req, res) => {
    let nameData = tempData.map(data => {
        let { Name, Age, Gender } = data
        return { Name, Age, Gender }
    })
    let newNameData = nameData.find(c => c.Name === req.params.name.toString())
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
    let idClassroom = classRoom.find(c => c.id === parseInt(req.params.id))
    if (!idClassroom) {
        res.status(400).json(`Classroom with given id ${req.params.id} is not exist`)
        return;
    }
    // As I talked above, the client just use one data-type for showing. So if we use other data-type (like HTML, XML,...),
    // JSON data can't reading. But if we access to a specific property, it will be a string data-type and can be showed
    res.status(200).json(`Name of that classroom is: ${idClassroom.name}`)
})

app.get('/searchData/query', (req, res) => {
    let {...searchData} = req.query
    let copyTempData = [...tempData]
    let keys = Object.getOwnPropertyNames(searchData)
    for (let i=0; i<keys.length; i++) {
        // This line just be used for value of a property is a string
        // copyTempData = copyTempData.filter(data => data[keys[i]].startsWith(searchData[keys[i]]))
        // This line just be used for search for an exact value of a property
        copyTempData = copyTempData.filter(data => data[keys[i]] == searchData[keys[i]])
        console.log(copyTempData)
    }

    if (!copyTempData) {
        res.status(404).send("No data match with given information")
        return;
    }
    res.status(200).json(copyTempData)
})

app.get('/checkAuthor', (req, res) => {
    // This function look like the function above, but if we want to use it, use the format path:
    // http://localhost:3000/checkAuthor?Name=User_1&Age=21
    console.log(req.user)
})

app.post('/addData', (req, res) => {
    // Check if the request body contains or not the 'Name' property
    if (!req.body.Name) {
        res.status(400).send(`Please send information that at least it has property 'Name'`)
        return;
    }
    // Check if there is an object which has 'Name' property same as the given 'Name' property
    let checkName = tempData.find(c => c.Name === req.body.Name)
    if (checkName) {
        res.status(400).send(`The 'Name' property with given value is exist in database. Please give another value of 'Name' property`)
        return;
    }
    // Add to database new object with given 'Name' property
    tempData.push({
        "Name": req.body.Name,
        "Age": req.body.Age ? parseInt(req.body.Age) : 18,
        "Gender": req.body.Gender ? req.body.Gender : 'Male',
        "Address": req.body.Address ? req.body.Address : 'VietNam',
        "Github": req.body.Github ? req.body.Github : 'https://github.com/Quang-Dobe'
    })
    res.send(`Data is added. Please check information in this link:
    <a href="http://localhost:3000/data/${req.body.Name}">Here</a>`)
})

app.post('/addClassroom', (req, res) => {
    // Check if the req contain id or not in body of req
    let {...queryStatement} = req.body
    if (!req.body.id) {
        res.status(400).send("Please provide an id!")
        return;
    }
    // Check if the given id classroom exist or not in database
    let tempClassroom = classRoom.find(data => data.id === parseInt(req.body.id))
    if (tempClassroom) {
        res.status(400).send(`Can't not add an exist id classroom into database!`)
        return;
    }
    // Add non-exist id classroom into database
    classRoom.push({
        id: queryStatement.id,
        name: queryStatement.name || "New class"
    })
    res.status(200).send(`Success!`)
})

app.put('/updateClassroom', (req, res) => {
    // Check if the req contain id or not in body of req
    let {...queryStatement} = req.body
    if (!req.body.id) {
        res.status(400).send("Please provide an id!")
        return;
    }
    // Check if the given id classroom exist or not in database
    let tempClassroom = classRoom.find(data => data.id === parseInt(req.body.id))
    if (!tempClassroom) {
        res.status(400).send(`The classroom with given id is not exist in database!`)
        return;
    }
    // Update
    tempClassroom.name = req.body.name
    res.status(200).send(tempClassroom)
})

// If user access to anyone which not exist above, this function will work
app.all('*', (req, res) => {
    res.status(404).send(`<h1>Page not found</h1>\n
        <a href='http://localhost:3000/'>Home page</a>`)
    
})

app.listen(3000, () => {
    console.log("Server is running on Port 3000...")
})