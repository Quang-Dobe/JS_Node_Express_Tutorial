console.log("-----New running-----")

// GLOBAL - NO WINDOW
/*
// __dirname    Path to current directory
// __filename   file name
// require      function to use a module
// module       info about the current module
// process      Info about env where the program is executed
console.log(__dirname)

// setInterval: Run block in each second
setInterval(() => {
    console.log("Run 1 line per second")
}, 10)
*/


// External modules
/*
// We can use something like this
// import { myName, myFunc } from "./ExternalModule.js";
// myFunc(myName)
// console.log(myFunc)
// Or like this
const ExModule = require('./ExternalModule');
ExModule.otherFunc(ExModule.otherName)
*/


// OS module
/*
const os = require('os')
// User info
console.log(os.userInfo)
// System uptime in second
console.log(os.uptime(), 'second')
*/


// Path module
/*
const path = require('path')
console.log(path.sep)
console.log(path.join('.', 'ExternalModule.js'))
console.log(path.basename(path.join('.', 'ExternalModule.js')))
console.log(path.join(__dirname, 'ExternalModule.js'))
*/


// fs module
const fs = require('fs')
const path = require('path')

// Blocking: 
/*
// Read data of a file
data = fs.readFileSync(path.join(__dirname, 'content', 'text.txt'), 'utf-8')
console.log(data)
// OVerwrite / Create a file (exits / not exist)
fs.writeFileSync(path.join(__dirname, 'content', 'temp.txt'),
    `The content of text.txt file is : ${data}`
)
// If you want to append data to file
fs.writeFileSync(path.join(__dirname, 'content', 'temp.txt'),
    `\nMore info is here!`,
    { flag:'a' }
)
*/


// None-blocking
/*
console.log("---Start")
fs.readFile(path.join(__dirname, 'content', 'temp.txt'), 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    var tempFile = data
    console.log("---In task 1")
    // console.log(`The content of text.txt file is : ${data}`)
    fs.readFile(path.join(__dirname, 'content', 'text.txt'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        var textFile = data
        console.log("---In task 2")
    })
    console.log("---Task 2 done")
    // console.log("Text file:", tempFile)
    // console.log("Temp file:", tempFile)
})
console.log("---Task 1 done")
*/
