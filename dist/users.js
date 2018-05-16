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

var datas = [{
    owners: 'Alice&Bob',
    messageList: [{ type: 'text', sender: "Alice", receiver: "Bob", data: { text: "Why don't they have salsa on the table?" } }, { type: 'text', sender: "Bob", receiver: "Alice", data: { text: "What do you need salsa for?" } }, { type: 'text', sender: "Bob", receiver: "Alice", data: { text: "Salsa is now the number one condiment in America." } }, { type: 'text', sender: "Alice", receiver: "Bob", data: { text: "You know why? Because people like to say 'salsa.' 'Excuse me, do you have salsa?' 'We need more salsa.' 'Where is the salsa? No salsa?'" } }]
}, {
    owners: 'Alice&Christ',
    messageList: [{ type: 'text', sender: "Christ", receiver: "Alice", data: { text: "Why don't they have salsa on the table?" } }, { type: 'text', sender: "Alice", receiver: "Christ", data: { text: "What do you need salsa for?" } }]
}, {
    owners: 'Alice&David',
    messageList: [{ type: 'text', sender: "David", receiver: "Alice", data: { text: "Hi, it's David" } }, { type: 'text', sender: "Alice", receiver: "David", data: { text: "Hey, I'm Alice" } }]
}, {
    owners: 'Alice&Evan',
    messageList: []
}, {
    owners: 'Bob&Christ',
    messageList: []
}, {
    owners: 'Bob&David',
    messageList: []
}, {
    owners: 'Bob&Evan',
    messageList: []
}, {
    owners: 'Christ&David',
    messageList: []
}, {
    owners: 'Christ&Evan',
    messageList: []
}, {
    owners: 'David&Evan',
    messageList: []
}];
router.get('/:user/:personInTalk', function (request, response) {

    response.setHeader("Access-Control-Allow-Origin", '*');
    var user = request.params.user;
    var personInTalk = request.params.personInTalk;
    var userdata = datas.find(function (element) {
        return element.owners === user + '&' + personInTalk || element.owners === personInTalk + '&' + user;
    });

    if (userdata != undefined) {
        response.json(userdata.messageList);
    } else {
        response.json([]);
    }
});

router.post('/update', function (req, res) {

    var reqBody = req.body;
    var type = reqBody.type;
    var sender = reqBody.sender;
    var receiver = reqBody.receiver;
    var message = reqBody.message;
    var newdata = { type: type, sender: sender, receiver: receiver, data: message };

    var userdata = datas.find(function (element) {
        return element.owners === sender + '&' + receiver || element.owners === receiver + '&' + sender;
    });
    userdata.messageList.push(newdata);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(newdata);
});

exports.default = router;
//# sourceMappingURL=users.js.map