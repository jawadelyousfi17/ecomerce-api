const mongoose = require('mongoose')

require('dotenv').config();

 const dburl = process.env.DB_URI
 
const conectDb = async (conected) => mongoose.connect(dburl).then(
    (result) => {
        conected()
        console.warn('Db conected')
    }
).catch(
    (err) => console.error(err)
)

module.exports = conectDb