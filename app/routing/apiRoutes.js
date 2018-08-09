const friends = require("../data/friends");

module.exports = function(app) {

    app.get('/api/friends',function(req,res){
        res.json(friends);
    });
  

    app.post('/api/new',function(req,res){
        console.log('Hello: ' + JSON.stringify(req.body));
        var compatibilityScore = 0;
        var scoreDifference;
        var friendScoreArray;
        var userScoreArray;
        var difference;
        var differences = [];
        var newUser = req.body;

        for(var i = 0; i < friends.length; i++) {
        
            for (var j = 0; j < friends[i].scores.length; j++) {
                friendScoreArray = friends[i].scores[j];
            }
            
        }

        for (var k = 0; k < newUser.userScores.length; k++) {
                
            userScoreArray = newUser.scores[k];
            
        }

        difference = friendScoreArray - userScoreArray;
        scoreDifference = Math.abs(difference);
        differences.push(scoreDifference);

        compatibilityScore = differences.reduce(function(total, amount) {
            return total + amount;
          });
        
    });
 
};
