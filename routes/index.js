const express = require("express")
const router = express.Router()
const { ensureAuth, ensuerGuest } = require("../middleware/auth")

// @desc Login/Lading page
// @route GET /
router.get("/", ensuerGuest,  (req, res) => {
  res.render("login", { layout: "login" })
})

// @desc Dashboard
// @route Get /dashboard
router.get("/dashboard", ensureAuth, (req, res) => {
    console.log(req.user)
  res.render("dashboard")
})

// @desc    Logout user
// @route  GET /auth/logout
router.get("/auth/logout", (req, res) => {
    req.logout()
    res.redirect('/')
})
module.exports = router
