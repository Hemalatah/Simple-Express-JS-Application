var express = require("express");
var app = express();
var router = express.Router();

router.get("/",function(req,res){
	res.sendFile(__dirname + "/public/index.html");
});

router.get("/user",function(req,res){
	res.sendFile(__dirname + "/public/user.html");
});

var requests = {};
requests['1'] = 10;
router.get("/user/:id",function(req,res){
	var user = req.params.id;
	if(!requests[user]) {
		requests[user] = 1;
	} 
	else {
  		requests[user] += 1;
  	}
  	res.send({"No. of Requests" : "Hello User-"+user+", You have made "+requests[user]+" requests"});
});

router.get("/math",function(req,res){
  res.sendFile(__dirname + "/public/math.html");
});

router.get("/game",function(req,res){
  res.sendFile(__dirname + "/public/game.html");
});

app.use("/",router);

app.use("/*",function(req,res){
  res.sendFile(__dirname + "/public/404.html");
});

var server = app.listen(8050,function(){
  console.log("Live at Port 8050");
});

module.exports = server;
