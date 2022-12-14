require('dotenv').config();
const colors = require('colors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const express = require('express');
const connectDB = require('./config/db');
const app = express();

const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

app.use(
	'/graphql',
	graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === 'development' })
);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
