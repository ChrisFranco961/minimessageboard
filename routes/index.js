var express = require('express');
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});
router.get("/new",function(req,res,next){
  res.render("form")
})
router.post("/new",function(req,res,next){
  let name=req.body.user
  let message=req.body.message
  messages.push({text: message, user: name, added:new Date()})
  res.redirect('/')
})

module.exports = router;
