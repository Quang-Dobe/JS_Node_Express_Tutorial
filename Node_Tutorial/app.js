const http = require('http')

const sever = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Welcome to my website!")
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
        res.write("Thank you for visiting!")
        return;
    }
    res.end(`
    <h1>Not found</h1>
    <p>Sorry we can't find this page</p>
    <a href='/'>Back home!</a>
    `)
})
sever.listen(3000, () => {
    console.log("Running at port 3000...")
})
