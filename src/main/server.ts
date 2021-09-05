import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ status: 200, message: 'Hey guys!' })
})

app.listen(3000, () => console.info('Server is running on port 3000'))
