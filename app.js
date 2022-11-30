import fsp from 'fs/promises';
import express from 'express';

const app = express()

app.get('/', async (req, res) => {
  const content = await fsp.readFile('index.html', 'utf-8')
  res.send(content)
})

app.get('/about', async (req, res) => {
  const content = await fsp.readFile('about.html', 'utf-8')
  res.send(content);
})

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})