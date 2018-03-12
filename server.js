var express = require("express"),
	app = express();

app.get("/Wiki", function(request, response){
	response.send("This is my Wiki");
});

var array = [];

app.get("/Add", function(request, response){
	response.send("This is my Add");
});

app.post("/", function, (request, response){
	var data = request.body;
	console.log(request.body);

	response.json({
		msg: "Post Data Recieved",
		results: data.tbAdd
	});
}

app.get("/Remove", function(request, response){
	response.send("This is my Remove");
});

app.get("/Update", function(request, response){
	response.send("This is my Update");
});

app.get("/Select", function(request, response){
	response.send("This is my Select");
});


app.listen(8081, function(){
	console.log("Server Started");
});