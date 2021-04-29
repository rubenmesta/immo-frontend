const express = require('express');
//const bodyParser = require('body-parser');
const path = require("path");

const app = express();

app.use(express.json()); 

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send({ 'hello': 'there'})
});

// require('./routes/dialogFlowRoutes')(app);

// ... other app.use middleware 
// app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });
// --> Add this
// if (process.env.NODE_ENV === 'production') {
//     // Serve any static files
//     app.use(express.static('client/build'));
//   // Handle React routing, return all requests to React app
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//     });
//   }



app.listen(PORT, () => {
    console.log(`Server is up at port: ${PORT}`)
})