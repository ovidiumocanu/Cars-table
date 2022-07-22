var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM carsdb";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('sample_data', {title:'Cars database', action:'list', sampleData:data});
		}

	});

});

router.get("/add", function(request, response, next){

	response.render("sample_data", {title:'Insert Data into MySQL', action:'add'});

});

router.post("/add_sample_data", function(request, response, next){

	var brand = request.body.brand;

	var model = request.body.model;

	var price = request.body.price;

	var img = request.body.img;

	var query = `
	INSERT INTO carsdb 
	(brand, model, price, img) 
	VALUES ("${brand}", "${model}", "${price}", "${img}")
	`;

	database.query(query, function(error, data){

		if(error)
		{
			console.log(error);
			throw error;
			
			
		}	
		else
		{
			console.log(error);
			response.redirect("/sample_data");
		}

	});

});

module.exports = router;