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
// const fs = require('fs')
// const path = require('path')

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

// Using stream for controling reading a file
/*
// We can control reading file process
// highWaterMark: We can control the size of file for reading (I can't use exact vocab in this)
const stream = fs.createReadStream(path.join(__dirname, 'content', 'temp.txt'), { highWaterMark: 10, encoding:'utf-8' })

stream.on('data', result => {
    console.log(result)
})
stream.on('error', err => {
    console.log(err)
})
*/


// Wrapping function
/*
const fs = require('fs')
const path = require('path')
const getText = path => {
    // Promise is just a callback function and it look like try catch, offload all in callback function
    // and if there is no error, the resolve() will execute the code in callback and opposite
    // We can see that Promise look like a wrapping function
    return new Promise((resolve, rejects) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                rejects(err)
            }
            else {
                resolve(data)
            }
        })
    })
}
getText(path.join(__dirname, 'content', 'temp.txt')).then(result => console.log(result)).catch(err => console.log(err))
*/


// Event
/*
const EventEmitter = require('events')
// on       listen for an event
// emtit    emit an event
const customEventEmitter = new EventEmitter()

// Create a listen-event for listening an event called "response"
customEventEmitter.on('response', (name, age) => {
    console.log('Data received: Name:', name, '- Age:', age)
})
// Create an emit-event called "response"
customEventEmitter.emit('response', 'Cabe', 21)
// Note: We must listen before amit and The listen-event just listen to the event with the name we provided
// We can understand that firstly, we create a listen-event for listening the event with given name
// Than, the listen-event will wait for emitting an event with the same name as the name that listen-event is given
// If the emit-event is create, line in callback function of listen-event will be executed
customEventEmitter.on('notListenForResponse', () => {
    console.log('Logic action here')
})
*/
