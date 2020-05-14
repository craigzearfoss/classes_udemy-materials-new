# Node, SQL & PostgreSQL - Mastering Backend Web Development

- Udemy
- Instructor: David Joseph Katz
- Completed May 11, 2019

---
- npm is a package manager that automatically ships with node.

- Code repository for this course: [https://github.com/15Dkatz/node_postgres](https://github.com/15Dkatz/node_postgres)

### Node.js
- An asynchronous event-driven JavaScript runtime designed to build scalable network applications.
	- **Application** - a computer program with an interface.
	- **Network application** - an application that uses a client-server architecture.
	- **JavaScript Runtime** - runtime written in JavaScript code
	- **Runtime** - a program that executes instruction while running,
	- **Node** will start a runtime for a server program.
	- **Event Driven** - a program follows the flow of events determine by a user
	- **Asynchronous** - allows processes to happen simultaneously.
		- A synchronous application handles operations sequentially.

## Section 2 - Node Essentials
---
```
npm init
```

- Modules in node represent packages of code that allow us to add certain features to our JavaScript node applications.

- http is a core module to node so you don't have to install separately.
- A host name is a label assigned to the server to identify it to other applications on the web.
- localhost is a host name that hooks up to your local computer.
- A port number is a way to identify our particular server  program on the local network as a running process.

#### *index.js*
```
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
	res.end('Welcome to Node!')
});

server.listen(port, hostname, () => {
	console.log(`Server running at ${hostname}:${port}`);
});
```	

#### *package.json*
```
{
	"name": "first_server",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1",
	"start": "node index"
	},
	"author": "",
	"license": "ISC"
}
```

### Start with:
```
$ npm start
```
	
### Data on the web
- Organizations store larege databases of information
- Users, folders, and troves of files
- Accessing pages on websites means fetching for files
	
### Hypertext Transfer Protocol (HTTP)
- A protocol is an official system of rules for the web
- Request/response model
- Two primary http requests are GET and POST
	- A GET requests asks for data from the web server
	- A POST request sends data to the web server
- Other HTTP requests
	- A DELETE request deletes a resource from the web server
	- A PUT request updates an existing resource
- HEAD, OPTIONS, CONNECT
- Application Programming Interface(s) - API(s)
	- A web api collects a set of these HTTP requests
		
- Loading a file with the import statement from ES6 may load the file ansychronously.  It breaks the require modules first.

### nodemon allows you to automatically restart the server whenever you update your code with a save. To install:
```
$ npm i nodemon --save-dev
```
	
###To run with nodemon:
```
$ npm run dev
```
	
- A header identifies to the browser what type of data that we're sending back.
- A stream is a sequence of data that you can continue to add to by writing to it or grab data from it by continuing to read from it.

### JSON.stringify(translations)

###The Event Loop
- Node features concurrent execution
	- When programs can execute multiple operation at the same time.
	- Leads to great improvements in performance.
- Node is non-blocking
	- HTTP requests, database operations, disk I/Os are non-blocking.
	- Node asks operations to perform and gives them a callback.
	- The callback executes in the future once the operation completes.
- A message enqueues with each callback
- These messages organize in a first-in-first-out (FIFO) queue.
	
### Section Summary | Node Essentials
- Node.js is an asynchronous event driven JavaScript runtime designed to build network applications.
- A network application use the client-server architecture to manage and handle data.
	- For example, Google chrome runs the Web client program, a browser, to access their server architecture.
- Node is a runtime - a kind of program that executes instructions while the program is running. 
	- Furthermore, it’s a JavaScript runtime - meaning it’s implemented in JavaScript.
- Node is event driven since it follows the flow of events determined by the user, to create a queue of events to be shortly execute.
- Node is asynchronous because it allows us to execute operations simultaneously.
- NPM, or the Node Package Manager, takes care of installing various module for Node projects.
- Modules capture packages of code relevant to a specific task or group of tasks in a Node application.
- The Event Loop creates a first-in-first-out queue of events for the JavaScript runtime to execute as new events come in.
- Nodemon is a module that allows to serve our node application with a live reload feature enabled.

## Section 3 - Node and Express | Fortunes API
---
### Express
	- Fast, unopionated, minimalist framework for node.js
	- A web framework great for making APIs and routing
	
### To initialize and node project with no prompts:
```
$ npm init -y

$ npm i nodemon --save-dev
$ npm i express --save
```

### When you use an arrow function that only spans one line you don't need the braces, ex:
```
app.listen(port, () => console.log(`listening on ${port}`));
	
$ npm i body-parser --save
	
curl -H "Content-Type: application/json" -X POST -d '{"message": "Hello", "lucky_number": 5, "spirit_animal": "Dog"}' http://localhost:3000/fortunes
```

### Fortunes API | Section Summary
- Express is a fast, unopinionated, minimalist web framework made for Node.js.
- Fast due to its minimal nature in implementation.
- Unopinionated since it doesn’t force you to code in a strict way, and you have more freedom to follow your own software engineering conventions.
- JSON, or JavaScript Object Notation, represents JavaScript objects in a special JavaScript file. Note that the the keys are surrounded by quotes.
- The express module exports a top level function by default. We use that function to create the express application object.
- With express, HTTP Request Methods are defined by calling the .get(), .post(), .put(), .delete(), etc.
- Express request method take a callback with a request (req) and response (res) object that allow us to interact with incoming data from the request, and send back data as a result.
- Postman is a convenient graphical tool that allows us to interactively build HTTP requests.
	

## Section 4 - SQL, Databases, and PostgreSQL
---
### SQL
- Stands for Structured Query Language
- Database
	- A database is a structured collection or table of data.
	- Data is organized into records - collections of fields
- Query
	- To ask a question
	- Queries allow us to grab data relevant to a question.
	
### Advantages of SQL
- Allows us to access multiple records of data.
- Insert, query, update and delete data
- Wide adoption across the industry

## Relational Model
- Organizing data into rows and relations.
- Rows can be called tuples.
	
### Syntax of SLQ
- Declarative language - statements look like English sentences.
- SELECT, UPDATE, WHERE, ORDER BY
- Ex:
```
SELECT names FROM Players WHERE DominantHand = 'Left';
```
		
### PostgresSQL
- A system to interact with a SQL relational database,
- Runs n Linux, Mac, Windows for C, Java, Python, Ruby, JS and more.
- Pronounced "Post-Gress"
	
### Installing Postgres on Ubuntu 18.0.4 - https://tecadmin.net/install-postgresql-server-on-ubuntu/
1. Step 1 – Enable PostgreSQL Apt Repository
```
sudo apt-get install wget ca-certificates
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'
```		
2. Step 2 – Install PostgreSQL on Ubuntu
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```
3. Step 3 – Connect to PostgreSQL
```
sudo su - postgres
psql
postgres-# \conninfo
postgres-# \q
```		
		
## Create a database named testdb and sign in
```
createdb -U postgres testdb
psql testdb		

CREATE TABLE test (name character varying(50), faveNumber int);
INSERT INTO (name, faveNumber) VALUES('Matthew' 3), ('Jim', 19), ('Sarah', 21);
SELECT * FROM test;
```

### Create a db user
```
createuser -P -s -e craig
```
	
### SQL, Databases, and PostgreSQL | Section Summary
- SQL - Standard Query Language - is a programming language used to communicate with a database.
- A database is a structured collection or table of data.
- A database record represents a collection of fields or elements through an entry.
- A query allows us to ask the database a question about its data and grab relevant information.
- A database schema outlines what attributes correspond to data entries for a particular table.
- PostgreSQL (pronounced post-gress-QL) is a system that allows us to interact with an SQL relational database.
- Advantages to SQL:
	- SQL allows to access many records of data within a single command.
	- SQL allows to interact with our data in multiple ways: insertion, queries, updates, and deletions.
	- SQL is widely adopted in the programming community and software engineering industry.
- The relational model is an approach to organizing data where all f the data is represented by rows and grouped into relations.
- Rows may also be called tuples.
- SQL has a declarative syntax which makes statements look like English-readable sentences because it describes what the program must accomplish in order to solve a problem.
- SQL commands:
	- Use CREATE TABLE to make a table. INSERT INTO <table> VALUES to insert entries into <table>.
	- Use the SELECT keyword to query data. FROM to specify a database.
	- Use the WHERE clause to limit data based on a condition. Use LIMIT <number> to limit the resulting queries to the top <number> results.
	- Use JOIN … ON to combine two tables based on a given condition.


## Section 5 - Node and PostgreSQL App | Monsters API
---
```
$ npm init -y
$ npm i nodemom --save-dev
$ npm i express body-parser  pg --save
$ createdb -U craig monstersdb
$ psql -U craig monstersdb

# CREATE USER node_user WITH SUPERUSER PASSWORD 'node_password';
# SELECT * FROM pg_user;

make bash file bin/configuredb.sh

$chmod +x configuredb.sh

#SHOW hba_file
```

### Section Summary | Node-Postgres App - Monster API
- Pg is a module that allows us to connect to postgres databases in our Node applications.
- By creating a configure script, we can build and create our databases for our application with one command.
- Pg allows us to create connection pools to utilize any available client connection to efficiently run queries.
- We can secure our postgres connection data in a configuration.js file and ignoring it in a .gitignore file.
- By using JOIN queries on relational tables, we have the ability to combine information from more than one table to give the user more valuable information.
- Also, we’ve completed the application, but you may wish to continue. Here are some challenges for you to try:
- Add the ability to get habitats by id, and delete individual habits.
- Add a post function to the lives route.
- Add a new table to the database. Perhaps an aliens table.
- Do the above and create a relation between monsters and your new database. Perhaps enemies for monsters and aliens.
