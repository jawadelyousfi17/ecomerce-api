const express = require('express')


// Conect db and run server 
// my libs
const conectDb = require('./db/conectdb')
const PORT = process.env.PORT || 3001
const app = express()
conectDb(() => app.listen(PORT , console.log(`server is running on port ${PORT} ...`))  )
