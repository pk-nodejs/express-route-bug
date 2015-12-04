# express-route-bug

Express dynamic routes to respond with local scope JS variable gives invalid response, where as if the same JS variable declared at global level gives valid response.

JS variable with GLOBAL scope

```javascript
var express = require('express');
var router = express.Router();
var getNameResponse; // Declaring variable at global scope

/* GET users listing. */
router.get('/', function(req, res, next) {
	if(req.query === undefined || req.query.name === undefined){
		res.send({error:'please send name in query parameters'});
	}else{
		getNameResponse = {name : req.query.name};
		router.get('/getName',function(req,res,next){
			res.send(getNameResponse);
		});
		res.send(getNameResponse);
	}
});

module.exports = router;
```

JS variable with LOCAL scope

```javascript
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	if(req.query === undefined || req.query.name === undefined){
		res.send({error:'please send name in query parameters'});
	}else{
		var getNameResponse = {name: req.query.name}; // Declaring variable at local scope
		router.get('/getName',function(req,res,next){
			res.send(getNameResponse);
		});
		res.send(getNameResponse);
	}
});

module.exports = router;
```
