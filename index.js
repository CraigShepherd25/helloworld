const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (request, response) => {
    response.send('test')
})

app.get('/apple', (request, response) => {
    response.send('apple')
})

app.get('/banana', (request, response) => {
    response.send('banana')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
