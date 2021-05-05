const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

const helmet = require('helmet') 
const cors = require('cors') 

app.use(express.json()); 
// app.use(bodyParser.json());

const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://harvard-capstone.herokuapp.com/']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(helmet())
// --> Add this
app.use(cors(corsOptions))


const PORT = process.env.PORT || 5000;

require('./routes/dialogFlowRoutes')(app);

app.get('/', (req, res) => {
    res.send({'hello': 'From Index'});
});


app.listen(PORT, () => {
    console.log(`Server is up at port: ${PORT}`)
})