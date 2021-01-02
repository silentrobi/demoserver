const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Router
const router = require('./router/routes');

//Define app
const app = express();

//Add Middlewares
app.use(bodyParser.json());
app.use(cors());

router.routes(app);

const port = process.env.PORT || 3600;

// Disable TLS certificates verification
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.listen(port, () => {
	console.log("Server is running on port: %s", port)
});