udemy.com/nodejs-api/learn/


Steps:
- Covered the dependencies and prerequisites needed
- Created a basic route in express
- Connected to our mongodb database
- Constructed a route four user creation using express

Next:
- We need to add sessions
- We need a way to handle response headers for reasons like CORS and allowing other HTTP methods in our API


mkdir nodeapi
cd nodeapi

npm init
	name: (nodeapi) 
	version: (1.0.0) 
	description: A node.js REST API
	entry point: (index.js) server.js
	test command: 
	git repository: 
	keywords: 
	author: vinicius5581
	license: (ISC) MIT


npm install --save express
npm install --save mongoose

//Testing - http://localhost:3000/test
	node server.js

npm install --save body-parser

npm install --save bcryptjs