require('dotenv').config()

// Declarations
const express = require(`express`)
const app = express();
const articleRoutes = require('./routes/articles')
const userRoutes = require('./routes/user')
const mongoose = require(`mongoose`)
var cors = require('cors')

// Middlewares
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next()
})
app.use(cors())

// Routes
app.use(`/api/articles`, articleRoutes);
app.use(`/api/users`, userRoutes)

// Connection to DB
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to Database");
    app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port ${process.env.PORT}!`);
})
}).catch((err)=>{
    console.log(err);
})

