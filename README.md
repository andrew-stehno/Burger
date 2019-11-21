# Burger

Burger is a Node.js based application allowing users to keep track of different types of burgers they would like to eat.  After a burger has been eaten, the user can click the "Devour it!" button, to move the burger to a list idicating that the user has now tried that burger.

The back end of this paltform utilizes the npm's Express, Express-Handlebars, and Mysql.  The Mysql database has 4 default burgers, additional burgers can be added to the database, all data is persistent.  Express-Handlebars allows us to implement the MVC concept, while Express handles our API calls.

## Setup

If forking this repo, the necessary dependecies are in the package.json file.  From the terminal in the root directory, type:

```npm install```

The npm's can be installed from scratch by typing:

``` npm install express```
```npm install express-handlebars```
```npm install mysql```

Once the npm's are installed, the database must be setup.  Copy the schema.sql file located inside the "db" folder and pasted it into Mysql Workbench.  Execute the database by clicking the lightening bolt.

![screenshot](/public/assets/images/dbsnippet.png)

Next, copy the seeds.sql file located in the "db" folder.  Paste it's contents underneath the schema inside Mysql Workbench.  Highlight what was just pasted from the seeds.sql file, and click the bolt again.  This will populate the table now stored in the database.

![screenshot](/public/assets/images/dbsnippet2.png)
![screensot](/public/assets/images/dbsnippet3.png)

Now a connection to the server must be setup.  From the terminal command line, type:

```node server.js```

![screenshot](/public/assets/images/termsnippet.png)

From your browser address bar, enter:

```localhost:3000```

![screenshot](/public/assets/images/browsersnippet.png)

You are now in da burger bidness!

## My contributions

* Create repo
* Setup MVC
* Setup database with Mysql
* Create local server
* Create database connection
* Create API's with Express
* API functions are handled with ORM's
* Front end development

## Deployed on Heroku

The completed project can be viewed [here](https://polar-cliffs-00229.herokuapp.com/)