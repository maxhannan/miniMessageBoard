var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleTimeString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleTimeString()
  }
];

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { messages: messages});
});

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', (req, res) => {
  if(req.body.message && req.body.name){
    const newMessage = {
      text: req.body.message,
      user: req.body.name,
      added: new Date().toLocaleTimeString()
    }
    messages.push(newMessage)
  }
  res.redirect('/')
})

module.exports = router;
