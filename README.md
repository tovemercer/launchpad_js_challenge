#JavaScript Github Activity Tracker

To start this project, I began by brainstorming about different ways to approach how to an application that would meet the requirements. I looked into the different frameworks available and the fetch API, gaining some exposure to those I have less familiarity with. After a few test files using the different tools I decided to go with Jquery/Ajax. This is a library I am familiar with and thought it would handle the requirements of challenge nicely. 


I decided that, since this is an activity tracker, there wasn’t a need to store data. Using the Github API to get the framework information needed eliminated the need for a backend. Pulling the data straight from Github simplified the overall application making the information was easily available for updates.  

After choosing the framework, file structure and the decision for no backend, I was ready to get started. I worked with Bootstrap to plug in styling and making the app responsive. There were a few changes I made to the out-of-box styling to make it a little more personalized which are found in style.css. The index.html file contains the basic outline along with the appropriate script and link tags that allows the application to function.

In the application.js file is where the bulk of the application data is contained. I used a loop to iterate through a list of the frameworks we are tracking with Ajax to pull the data from Github. With the response from the Ajax call I appending the data I wish to display to an existing div class. I thought it would be helpful to calculate an overall score for each framework to display to the user and help with choosing the best framework. This is a simple weighted average function that returns a number to be displayed to the user. 

Upon further review of the requirements, I had misinterpreted the function to update the information without a page reload. I found the Jquery .load method and attempted to implement it quickly. Unfortunately, I do not have this working yet. I left the code in the file so you could see my thought process and will continue to work with it to get ti working.

In the challenge description, the frameworks needed to be evaluated based on development activity, community support, and stability. I chose the star count, forks, and open issues to fulfill these metrics. The stars and forks show that they have a large community support and developers who are actively using it with. I believe open issues also showed that there are a large number of users who are reviewing the code for bugs. But the number of open issues suggests the framework being less stable so I multiplied this number by 0.5 to decrease the overall average.
