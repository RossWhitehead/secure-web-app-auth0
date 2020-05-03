var express = require('express');
var router = express.Router();
const { requiresAuth } = require('express-openid-connect');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.openid.user));
});

module.exports = router;
