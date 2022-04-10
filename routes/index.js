const express = require("express")
const router = express.Router()
const { ensureAuth, ensuerGuest } = require("../middleware/auth")
const Story = require("../models/Story")

// @desc Login/Lading page
// @route GET /
router.get("/", ensuerGuest, (req, res) => {
  res.render("login", { layout: "login" })
})

// @desc Dashboard
// @route Get /dashboard
router.get("/dashboard", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ user: req.user.id }).lean()
    console.log(stories)
    res.render("dashboard", {
      name: req.user.fisrtName,
      stories,
    })
  } catch (err) {
    console.err(err)
    res.render("error/500")
  }
})

module.exports = router
