const express = require('express');
const db = require('./Config/connection');
const routes = require('./Routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Eureka! You are jammin' on PORT 3001!`)
    })
  })