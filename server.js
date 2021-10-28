const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
//Express middleware
app.use(express.urlencoded({extend: false}));
app.use(express.json());


//default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
    console.log(`Page not found!`)
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})