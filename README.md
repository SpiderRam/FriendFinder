# FriendFinder

* If you have never seen Firelfy, you're missing out.  Also, this will likely seem like nonsense.

- This was our first assignment using Express, and Heroku. 
- Start by clicking the 'thrilling heroics' button on the home page. 
- Currently, it is not necessary to input a valid name or image link on the survey page, the assignment demo allowed that information to persist, and I would prefer that did not happen.  A future improvement would be to use that input in a side-by-side with the best match results.  For now, all that is needed is to answer the questions and click the 'ti jiao' (submit) button at the bottom of the survey page.
- The logic to capture and export the user input is in the survey.html script.
- htmlRoutes.js defines the two endpoints.
- Most of the logic happens in apiRoutes.  Each index in the array of user answers is compared to the indices of each answer array in the friends.js file. The friend array with the lowest total difference from the user array is selected as the best match.