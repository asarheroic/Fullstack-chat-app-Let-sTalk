const express = require("express")
const { authMiddleware } = require("../middlewares/authMiddleware")
const { getUsersForSidebar, getmessages, sentMessages } = require("../controllers/message.controller")

const router = express.Router()

router.get('/users',authMiddleware, getUsersForSidebar)
router.get('/msg/:id',authMiddleware, getmessages)
router.post('/send/:id' ,authMiddleware,sentMessages )

module.exports = router
