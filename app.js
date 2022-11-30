import http from 'http';
import express from 'express';


const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const content = await fsp.readFile('index.html', 'utf-8')
  res.send(content)
})

app.get('/', async (req, res) => {
  const content = await fsp.readFile('about.html', 'utf-8')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})