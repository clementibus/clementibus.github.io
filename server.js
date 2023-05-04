//simple server to test website on localhost

const express = require('express')

const PORT = 1038
const app = express()

app.use(express.static('.'))
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
