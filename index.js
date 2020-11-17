const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res) => {
    var message = "Hello World!"
    res.send(message)
})
  
app.listen(port, () => {
console.log(`Example app listening at port ${port}`)
})