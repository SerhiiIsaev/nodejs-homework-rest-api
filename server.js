const app = require('./app')
const mongoose = require("mongoose")
const DB_HOST = "mongodb+srv://serhii:g2Y4JU847xHabFaq@cluster0.6kah6jn.mongodb.net/db-contacts?retryWrites=true&w=majority"
const PORT = 3000

mongoose.connect(DB_HOST)
  .then(()=> console.log("Database connection successful"))
  .then(()=> app.listen(PORT))
  .catch(error => {
    console.log(error.message);
    process.exit(1)
  })