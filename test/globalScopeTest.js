var app = require('../app');
var request = require('supertest')(app);

var errorMessage = {error:'please send name in query parameters'};

describe('Express dynamic routes testing to respond with GLOBAL scope JS variable.', function(){
	// calling /globalScopeUsers/getName with out even creating it
	it('/globalScopeUsers/getName should return 404 ', function(done){
		request
			.get('/globalScopeUsers/getName')
			.expect(404,done);		
	});
	// calling /globalScopeUsers with out sending the query params
	it('/globalScopeUsers should return ERROR! ', function(done){
		request
			.get('/globalScopeUsers')
			.expect(errorMessage,done);		
	});
	
	it('/globalScopeUsers?name=Pradeep should return same name and create dynamic route', function(done){
		var name = 'Pradeep';
		request
			.get('/globalScopeUsers?name='+name)
			.expect({name:name},done);
	});
	
	it('/globalScopeUsers/getName1 should return same name as above', function(done){
		var name = 'Pradeep';
		
		request
		.get('/globalScopeUsers/getName1')
		.expect({name:name},done);
	
	});
	
	it('new Name /globalScopeUsers?name=Kumar should return same name', function(done){
		var name = 'Kumar';
		request
			.get('/globalScopeUsers?name='+name)
			.expect({name:name},done);
	});
	
	it('/globalScopeUsers/getName1 should return same name as above', function(done){
		var name = 'Kumar';
		
		request
		.get('/globalScopeUsers/getName1')
		.expect({name:name},done);
	
	});
	
	it('/globalScopeUsers/getName2 should return same name as above', function(done){
		var name = 'Kumar';
		
		request
		.get('/globalScopeUsers/getName2')
		.expect({name:name},done);
	
	});
});