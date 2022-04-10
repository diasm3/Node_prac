# Node_prac
MVC + google Auth + Materialize + Express + MongoDB

form https://youtu.be/SBvmnHTQIPY



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