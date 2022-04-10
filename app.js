const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
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

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handlebars Helpers
const { formatDate } = require("./helpers/hbs")

// Handlebars
app.engine(
  ".hbs",
  engine({ helpers: { formatDate }, defaultLayout: "main", extname: ".hbs" })
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

// Static folder
app.use(express.static(path.join(__dirname, "public")))

//Routes
app.use("/", require("./routes/index"))
app.use("/auth", require("./routes/auth"))
app.use("/stories", require("./routes/stories"))
app.use("/test", require("./routes/test"))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started on port ${PORT}`))
