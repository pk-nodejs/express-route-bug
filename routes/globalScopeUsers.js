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
