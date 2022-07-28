const { Pool } = require('pg');
const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const pool = new Pool({
	user: 'wbknpemc',
	host: 'tyke.db.elephantsql.com',
	database: 'wbknpemc',
	password: 'hABZI0eMyzoH9YsXMKPAiVPkYt-HLhVs',
	port: 5432,
});

app.get('/', (req, res) => {
	// res.send('To get all the users ');
	pool
		.query('SELECT * FROM recipes;')
		.then((data) => res.json(data))
		.catch((err) => res.send(err));
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
