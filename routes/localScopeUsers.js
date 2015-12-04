var express = require('express');
var router = express.Router();
var a= 1;
/* GET users listing. */
router.get('/', function(req, res, next) {
	if(req.query === undefined || req.query.name === undefined){
		res.send({error:'please send name in query parameters'});
	}else{
		var getNameResponse = {name: req.query.name}; // Declaring variable at local scope
		router.get('/getName' + (a++),function(req,res,next){
			res.send(getNameResponse);
		});
		res.send(getNameResponse);
	}
});

module.exports = router;
