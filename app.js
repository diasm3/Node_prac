const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const connectDB = require("./config/db")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const { engine } = require("express-handlebars")

// Load config
dotenv.config({ path: "./config/config.env" })
// Passport config
require("./config/passport")(passport)

connectDB()

const app = express()
app.use(morgan("dev"))

// Body parser app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handlebars Helpers
const { formatDate, stripTags, truncate, editIcon, select } = require("./helpers/hbs")

// Handlebars
app.engine(
  ".hbs",
  engine({ helpers: { formatDate, stripTags, truncate, editIcon, select }, defaultLayout: "main", extname: ".hbs" })
)
app.set("view engine", ".hbs")

// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Set global var
app.use(function (req, res, next)  {
    res.locals.user = req.user || null
    next()
})


app.use(methodOverride(function (req, res){ 
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      let method = req.body._method
      delete req.body._method
      return method
    }
}))



// Static folder
app.use(express.static(path.join(__dirname, "public")))

//Routes
app.use("/", require("./routes/index"))
app.use("/auth", require("./routes/auth"))
app.use("/stories", require("./routes/stories"))
app.use("/test", require("./routes/test"))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started on port ${PORT}`))
