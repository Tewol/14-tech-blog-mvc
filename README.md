# 14-tech-blog-mvc


This is a CMS-style blog site similar to a Wordpress site that can publish articles, blog posts, and thoughts and opinions.

The app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication and it will get deploy to Heroku. 


## Application Functionality

GIVEN a CMS-style blog site

* Visiting the site for the first time presents with the homepage, which includes:
    * Existing blog posts if any have been posted; 
    * Navigation links for the homepage and the dashboard,  
    * Log in option

* Clicking homepage option will take you to homepage

* Clicking other links in the navigation will prompt you to either sign up or sign in

* Choosing to sign up will prompt you to create a username and password

* Clicking on the sign-up button will save credentials and log you into the site

* Revisiting the site at a later time to sign in will prompted to enter my username and password

* signed in users will see navigation links for the homepage, the dashboard, and the option to log out

* WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

* WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

* WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

* WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

* WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

* WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

* Clicking on one of existing posts in the dashboard
will able you to delete or update the post and taken back to an updated dashboard

* Clicking the logout option in the navigation will signed out of the site

* WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments


## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./utils/14-mvc-homework-demo-01.gif) 

## Install packages

* express-handlebars
* MySQL2
* Sequelize
* dotenv package
* bcrypt package
* express-session and 
* connect-session-sequelize


## Submission

* URL of the GitHub repository: https://github.com/Tewol/14-tech-blog-mvc

* URL of a functional, deployed application: 

---
© 2021 Hewan Redie.
