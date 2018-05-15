'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var express = require('express');
var bodyParser = require('body-parser');

// var app = express();
var router = express.Router();

// router.use('/', ()=> {console.log("2!!!")})
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var a = [{ type: 'text', sender: "Alice", receiver: "Bob", data: { text: "Why don't they have salsa on the table?" } }, { type: 'text', sender: "Bob", receiver: "Alice", data: { text: "What do you need salsa for?" } }, { type: 'text', sender: "Bob", receiver: "Alice", data: { text: "Salsa is now the number one condiment in America." } }, { type: 'text', sender: "Alice", receiver: "Bob", data: { text: "You know why? Because people like to say 'salsa.' 'Excuse me, do you have salsa?' 'We need more salsa.' 'Where is the salsa? No salsa?'" } }];

router.get('/:user/:personInTalk', function (request, response) {
    // console.log(request.body);      // your JSON
    response.setHeader("Access-Control-Allow-Origin", '*');
    response.json(a);
    // response.json({text: "hello"});    // echo the result back
});

router.post('/update', function (req, res) {

    var reqBody = req.body;
    var type = reqBody.type;
    var sender = reqBody.sender;
    var receiver = reqBody.receiver;
    var message = reqBody.message;
    var resjson = { type: type, sender: sender, receiver: receiver, data: message };
    a = a.slice().concat(resjson);
    console.log(resjson);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.json(resjson);
});

exports.default = router;
//# sourceMappingURL=ver1.js.map