const friends = require("../data/friends");

module.exports = function(app) {

    var scoreDifference;

    app.get('/api/friends',function(req,res){
        res.json(friends);
    });
  

    app.post('/api/new',function(req,res){
        console.log('Hello: ' + JSON.stringify(req.body));
        var compatibilityScore = 0;
        var differences = [];
        var newUser = req.body;

        for(var i = 0; i < friends.length; i++) {
            
            
            for (var j = 0; j < newUser.userScores.length; j++) {
                var friendScore = friends.scores[i];
                var userScore = newUser.scores[j];
                var difference = friendScore - userScore;
                scoreDifference = Math.abs(difference);
            }

            differences.push(scoreDifference);
        }
        
    });
 
};
