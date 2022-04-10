const express = require("express")
const router = express.Router()
const { ensureAuth } = require("../middleware/auth")
const Story = require("../models/Story")

// @desc   Process add form 
// @route  Post /stories
router.post("/", ensureAuth, async (req, res) => {
        try{
            req.body.user = req.user.id
            console.log(req.body)
            await Story.create(req.body)
            res.redirect("/dashboard")
        } catch (err) {
            console.error(err)
            res.render("error/500")
        }
})
// @desc  Show add page
// @route GET /stories/add
router.get("/add", ensureAuth, (req, res) => {
  res.render("stories/add")
})

module.exports = router