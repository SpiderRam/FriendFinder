var friends = require("../data/friends")

module.exports = function(app) {

    app.get('/api/friends',function(req,res){
        res.json(friends)
    });
  

    app.post('/api/new',function(req,res){

        var compatibilityScore = 0;
        var differences = [];
        var newUser = req.body;

        for(var i = 0; i < friends.length; i++) {
            
            
            for (var j = 0; j < newUser.userScores.length; j++) {
                var friendScore = friends.scores[i];
                var userScore = newUser.userScores[j];
                var difference = friendScore - userScore;
                var scoreDifference = Math.abs(difference);
            };

            differences.push(scoreDifference);
        };
        
 });
 
};
