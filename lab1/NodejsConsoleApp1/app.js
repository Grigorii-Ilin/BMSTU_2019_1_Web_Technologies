var express = require('express');
var app = express();

app.use(express.static('static'));

bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

var options = {
    root: './',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

app.get('/', function (req, res) {
    var fileName = "static/people.json"
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', fileName);
        }
    });
})


app.post('/', function (req, res) {
    console.log('body:', req.body);
    var fileName = ""

    if (req.body.id==='1') {
        fileName = "static/p_1.json"
    }
    if (req.body.id === '2') {
        fileName = "static/p_2.json"
    }
    if (req.body.id === '3') {
        fileName = "static/p_3.json"
    }

    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', fileName);
        }
    });
})


app.put('/', function (req, res) {
    res.json(req.body);
})


app.delete('/', function (req, res) {
    var fileName = "static/del.json" 
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', fileName);
        }
    });
})


app.options('/', function (req, res) {
    var filename = "static/opt.json"
    res.sendFile(filename, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', filename);
        }
    });
})


var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
});

