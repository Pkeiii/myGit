const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
  res.send('상혁아 돈 갚아라')
})

app.get('/sound/:name', (req, res) => {
const { name } = req.params
console.log(name)

if(name == "dog")
res.send({'sound' : '멍멍'})
else if(name == "cat")
res.send({'sound' : '야옹'})
else if(name == "pig")
res.send({'sound' : '꿀꿀'})
else
res.send({'sound' : '알수없음'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
