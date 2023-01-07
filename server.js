const app = require('./app')
const mongoose = require("mongoose")
require("dotenv").config()
const {DB_HOST} = process.env
const PORT = 3000

mongoose.set("strictQuery", true)

mongoose.connect(DB_HOST)
  .then(()=> console.log("Database connection successful"))
  .then(()=> app.listen(PORT))
  .catch(error => {
    console.log(error.message);
    process.exit(1)
  })
  