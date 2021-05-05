const express = require('express');
const path = require("path");

const app = express();

app.use(express.json()); 

const PORT = process.env.PORT || 5000;

require('./routes/dialogFlowRoutes')(app);


app.listen(PORT, () => {
    console.log(`Server is up at port: ${PORT}`)
})