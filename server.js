const express = require('express');
const db = require('./config/connection');
const routes = require('./Routes');
const { Thought, User, Schema } = require('./Models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

db.addEventListener("open", () => {
    app.listen(PORT, () => {
        console.log(`Eureka! You are jammin' on PORT 3001!`)
    })
})
