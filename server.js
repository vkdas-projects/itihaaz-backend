require('dotenv').config()

// Declarations
const express = require(`express`)
const app = express();
const articleRoutes = require('./routes/articleRoutes')
const mongoose = require(`mongoose`)

// Middlewares
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next()
})

// Routes
app.use(`/api/articles`, articleRoutes)

// Connection to DB
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to Database");
    app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port ${process.env.PORT}!`);
})
}).catch((err)=>{
    console.log(err);
})

