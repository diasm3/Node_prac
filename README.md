# Node_prac
MVC + google Auth + Materialize + Express + MongoDB

form https://youtu.be/SBvmnHTQIPY


## Learning from this clone project
* MVC(Model, View, Controller) understand
    - Model : data initialize, data structure
    - View : html, css, js
    - Controller : routing, data processing, data validation

* How to use google auth
    - Register google dev console
    - Add google auth to project
    - Get the google auth token
    - Use the token to access the google api
    - Use passport library for google auth
    ```javascript
    // Passport config
    require("./config/passport")(passport)

    // Passport middleware
    app.use(passport.initialize())
    app.use(passport.session())

    ```
- How to use Materialize([Site link](hhttps://materializecss.com))
    * Materialize is 



- How to use Mongodb
    * Mongodb is a NoSQL database
    * Use JSON data to store data
    ```javascript
    const mongoose = require("mongoose")

    const connectDB = async () => {
    try {
    const conn = await mongoose.connect(process.env.MONGO_URI, { 
        useUnifiedTopology: true
    })

    console.log(`MongoDb Connected : ${conn.connection.host}`)
} catch (err) {
    console.error(err)
    process.exit(1)
    }
}

    ```


  


- How to use hbs(Express view engine for handlebar.js)
    * hbs is a template engine 
    * Simple to use
    * How to setup
    ```javascript
    app.engine(
    ".hbs",
    engine({ defaultLayout: "main", extname: ".hbs" })
    )
    app.set("view engine", ".hbs")
    ```
    * How to use hbs in the view
    ```javascript
    // @desc Dashboard
    // @route Get /dashboard
    router.get("/dashboard", ensureAuth, async (req, res) => {
    try {
        const stories = await Story.find({ user: req.user.id }).lean()
        res.render("dashboard", {
        name: req.user.fisrtName, // this data go to the view
        stories,
        })
    } catch (err) {
        console.err(err)
        res.render("error/500")
    }
    })

    ```


    ```html
    dashboard.hbs
    <h6>dashboard</h6>
    <h5>{{firstName}} STORY</h5> // get data from router
    {{#if stories}}
    <table class="striped">
    ......
    ```

* How to use express 
    - app.use is used to use middleware
    - app.router is used to use router
    - Don't forget app.use is head of the router
    ```javascript
    //app.js
    const express = require("express")
    const app = express()

    app.use("/") // head of the router
    app.use("/user", require("../routes/user.js")) // Easy to understand for head of router 

    
    // ./routes/user.js
    const express = require("express)
    const router = express.Router()
    // @desc    User steve route
    // @route   /user/steve  ****API endpoint****
    router.get("steve") // DO NOT PUT / in the route
    ```

* How to use middleware in router
    ```javascript



    ```



## Todo list 
* [ ] docker compose 
* [ ] mongodb docker connect to the other node docker 
* [ ] git action auto deploy
* [ ] aws 
* [ ] maybe react vite to use docker coompose
* [ ] do myself again at least one time without docker
----------


* API contructure more 
  * [ ] comment write
  * [ ] comment edit 
  * [ ] comment delete 
----------



## API

* auth.js

```javascript
auth.js

// @desc Auth with Google
// @route GET /auth/google
router.get('/google')  


// @desc Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback')


// @desc Logout user 
// @route GET /auth/logout
router.get('/logout')

```



* index.js
```javascript
index.js

// @desc Login/Lading page
// @route GET /
router.get("/")


// @desc Dashboard
// @route GET /dashboard
router.get("/dashboard")

```
* stories.js
```javascript
stories.js

// @desc   Process add form
// @route  POST /stories
// @middleware  { ensureAuth }
router.post("/")


// @desc  Show add page
// @route GET /stories/add
// @middleware  { ensureAuth }
router.get("/add")


// @desc  Show all stories
// @route GET /stories
// @middleware  { ensureAuth }
router.get("/")


// @desc  Showing before Edit stories
// @route GET /stories/edit/:id
// @middleware  { ensureAuth }
router.get("/edit/:id")


// @desc  Editing one story 
// @route PUT /stories/:id
// @middleware  { ensureAuth }
router.put("/:id")


// @desc Delete story
// @route DELETE /stories/delete/:id
router.delete('/:id')
```



* test(for practice)
```javascript
test.js


// @desc
router.get("/")


// @desc
router.get("/test")


// @desc
router.get("/add")


// @desc
router.get("/params/:id")


```







## MVC structure

* Models
```
// MongoDb Database model
models
 ┣ Story.js 
 ┗ User.js
```
* Controllers
```
// Middleware about authorization
middleware
 ┗ auth.js

// Controllers
routes
 ┣ auth.js
 ┣ index.js
 ┣ stories.js
 ┗ test.js
```

* Views
```
// Css files
public
 ┗ css
 ┃ ┗ style.css

// Html(hbs) files
views
 ┣ error            <-- Error page -->
 ┃ ┣ 404.hbs
 ┃ ┗ 500.hbs
 ┣ layouts          <-- skeletons -->
 ┃ ┣ login.hbs 
 ┃ ┗ main.hbs
 ┣ partials         <-- templates -->
 ┃ ┣ _add_btn.hbs
 ┃ ┗ _header.hbs
 ┣ stories          <-- stories pages -->
 ┃ ┣ add.hbs
 ┃ ┣ edit.hbs
 ┃ ┗ index.hbs
 ┣ test             <-- test pages -->
 ┃ ┣ add.hbs
 ┃ ┗ test.hbs
 ┣ dashboard.hbs    <-- dashboard page -->
 ┗ login.hbs
```
  








## Installed modules 
* express 
* mongoose
* connect-mongo
* express-mongo
* express-session
* express-handlebars
* dotenv
* method-override
* moment
* morgan 
* passport
* passport-google-oauth20
* nodemon
* corss-env