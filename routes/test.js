const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    console.log('test')
    res.send("test root page")


})

// @desc    Logout user
// @route  GET /test/test
router.get("/test", (req, res) => {
    res.render("test/test", {
        name : "hello",
        pass : "암호",
        test : true,
    })
})


router.get("/add", (req, res) => {
    res.render("login", {
        name : "hello",
        passs : "암호"
    })
})

router.get("/params/:id", (req,res) => {
    console.log(req.params.id)
    // res.send(req.params.id)
    res.send(`good ${req.params.id}`)
})

module.exports = router
