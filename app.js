var express = require('express')
var bodyParser = require('body-parser')
require('dotenv').config()

var db = require('./database')
var app = express();
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/person/:id", function (req, res) {
    db.Person.findByPk(req.params.id)
        .then(person => {
            res.status(200).send(JSON.stringify(person));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        })
})

app.put("/person", function (req, res) {
    db.Person.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id
    })
        .then(person => {
            res.status(200).send(JSON.stringify(person));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err))
        })
})

app.get("/all", function (req, res) {
    db.Person.findAll()
        .then(persons => {
            res.status(200).send(JSON.stringify(persons))
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err))
        })
})

app.delete("/person/:id", function (req, res) {
    db.Person.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.status(200).send();
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

app.use(function (req, res) {
    res.status(404).send("404 - Found NOTHING! :(")
})

var server = app.listen(process.env.PORT || 3000, function () {
    console.log(`portas: ${process.env.PORT} db_host: ${process.env.DB_HOST}`)
    console.log("app is running on port", server.address().port);
})