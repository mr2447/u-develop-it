const express = require('express');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');
//Dont have to specify the location of index.js, Node.js automatically look for it
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({extended: true}));
//adding /api can then remove it from the route expressions
app.use(express.json());

//Use apiRoutes
app.use('/api', apiRoutes);
//default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
    console.log(`Page not found!`)
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})