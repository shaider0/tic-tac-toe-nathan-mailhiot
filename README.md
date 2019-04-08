tic-tac-toe-nathan-mailhiot
This is my version of tic-tac-toe

I used HTML5, CSS3, JavaScript, JQuery, JSON, AJAX in this project.

When I first started working on this project I wanted to make sure I had the board and functionality working first. My main priority was to get the X's and O's in the correct places with the correct clicks. I ran into a few problems with the X's and O's overwriting the spaces that the previous letter was in. This took me a little bit to wrap my head around.
Next I wanted to make sure that all of my values of X and O were being pushed into an array where I could keep track if a game was over or not. The trouble I had with this was that getting the array to not update over a previous occupied spot. This was a pretty simple fix. After getting the winners I worked on checking to see if there was a tie. This process was made much easier because I had already done the win statements. I next worked on getting my messaging working. My messages would not update when when I tried to push new text into them. I solved this by creating new message divs. One for each felid that I was trying to write a message for. After getting most of the messaging working I moved onto connecting the API. The API was the most difficult part for me. Making the connections in the right spots was giving me a lot of trouble at first. After spending a few hours I was able to figure out how everything was supposed to connect. I then ran multiple tests to see where I was having issues. I found that most of my issues from this point were from not hiding certain fields at certain times and not showing certain fields at others. After I resolved these issues I then had my finished product.

I would like to refactor my code in the future so it's not as messy. I'd also like to go back and find a way to add themes.

My wireframe https://imgur.com/a/SQtIshx

User Stories As a user I’d like to be able to sign in.
As a user I’d like to be able to play tic tac toe.
As a user I’d like to see how many games I’ve played.
As a user I’d like to be able to sign out.
