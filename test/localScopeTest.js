var app = require('../app');
var request = require('supertest')(app);

var errorMessage = {error:'please send name in query parameters'};

describe('Express dynamic routes testing to respond with LOCAL scope JS variable.', function(){
	// calling /localScopeUsers/getName with out even creating it
	it('/localScopeUsers/getName should return 404 ', function(done){
		request
			.get('/localScopeUsers/getName')
			.expect(404,done);		
	});
	// calling /localScopeUsers with out sending the query params
	it('/localScopeUsers should return ERROR! ', function(done){
		request
			.get('/localScopeUsers')
			.expect(errorMessage,done);		
	});
	
	it('/localScopeUsers?name=Pradeep should return same name and create dynamic route', function(done){
		var name = 'Pradeep';
		request
			.get('/localScopeUsers?name='+name)
			.expect({name:name},done);
	});
	
	it('/localScopeUsers/getName should return same name as above', function(done){
		var name = 'Pradeep';
		
		request
		.get('/localScopeUsers/getName')
		.expect({name:name},done);
	
	});
	
	it('new Name /localScopeUsers?name=Kumar should return same name', function(done){
		var name = 'Kumar';
		request
			.get('/localScopeUsers?name='+name)
			.expect({name:name},done);
	});
	// This is where it is getting failed.!!
	it('/localScopeUsers/getName should return same name as above', function(done){
		var name = 'Kumar';
		
		request
		.get('/localScopeUsers/getName')
		.expect({name:name},done);
	
	});
});