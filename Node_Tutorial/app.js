const http = require('http')
const fs = require('fs')
const path = require('path')

// This line for reading .html file
// But get attention: if req.url==='/', if we have more file (like css, pvg, js,...)
// We must create more req.url like:
// if (req.url==='/file.css') => read file css
// ....
const homePage = fs.readFileSync(path.join(__dirname, 'view', 'view.html'))

const sever = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "content-type": "text/html" })
        res.write(`${homePage}`)
        res.end()
        return;
    }
    if (req.url === '/about') {
        // Blocking code
        // for (let i=0; i<1000; i++) {
        //     for (let j=0; j<1000; j++){
        //         console.log(`${i} and ${j}`)
        //     }
        // }
        res.writeHead(200, { "content-type": "text/html" })
        res.write("<h1>About this website</h1>")
        res.write("<p>Author: Cabe</p>")
        res.end()
        return;
    }
    if (req.url === '/file') {
        // We want to control the size of information we want to response. But we have some problem here
        // If we use stream for reading a file, lines in callback function will be executed after return-line executed. So it has no meaning
        /*
        const stream = fs.createReadStream(path.join(__dirname, 'content', 'temp.txt'), { highWaterMark: 10, encoding: 'utf-8'})
        // Success reading file
        stream.on('data', chunk => {
            res.end(`<p>${chunk}</p>`)
        })
        // Accure some error
        stream.on('error', err => {
            res.write(err.message)
        })
        */
        
        // So to solve this problem, we will use blocking code (using readFileSync()-function)
        // But if using this way, we can't not control the size of information we want to response
        res.writeHead(200, { "content-type": "text/html" })
        var data = fs.readFileSync(path.join(__dirname, 'content', 'temp.txt'), 'utf-8')
        res.write(`The information of that file is:\n${data}`)
        res.end()
        return;
        // So, to solve this problem, I think we can use some trick that don't use return-line and allow the program executed to the end of this callback function
    }
    else {
        res.writeHead(404, { "content-type": "text/html" })
        res.end(`<h1>Not found</h1>
        <br>
        <p>Sorry we can't find this page</p>
        <a href='/'>Back home!</a>`)
    }
})
sever.listen(3000, () => {
    console.log("Running at port 3000...")
})

