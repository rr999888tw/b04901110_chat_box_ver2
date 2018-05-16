var express = require('express')
var bodyParser = require('body-parser');

// var app = express();
var router = express.Router()

// router.use('/', ()=> {console.log("2!!!")})
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

let datas = [
    {  
        owners: 'Alice&Bob',
        messageList:
        [
            { type: 'text', sender:"Alice", receiver:"Bob", data: { text: "Why don't they have salsa on the table?" } },
            { type: 'text', sender:"Bob", receiver:"Alice", data: { text: "What do you need salsa for?" } },
            { type: 'text', sender:"Bob", receiver:"Alice", data: { text: "Salsa is now the number one condiment in America." } },
            { type: 'text', sender:"Alice", receiver:"Bob", data: { text: "You know why? Because people like to say 'salsa.' 'Excuse me, do you have salsa?' 'We need more salsa.' 'Where is the salsa? No salsa?'" } }
        ]
    },
    {
        owners: 'Alice&Christ',
        messageList:
        [
            { type: 'text', sender: "Christ", receiver: "Alice", data: { text: "Why don't they have salsa on the table?" } },
            { type: 'text', sender: "Alice", receiver: "Christ", data: { text: "What do you need salsa for?" } },
        ]
    },
    {
        owners: 'Alice&David',
        messageList:
            [
                { type: 'text', sender: "David", receiver: "Alice", data: { text: "Hi, it's David" } },
                { type: 'text', sender: "Alice", receiver: "David", data: { text: "Hey, I'm Alice" } },
            ]
    },
    {
        owners: 'Alice&Evan',
        messageList:
            []
    },
    {
        owners: 'Bob&Christ',
        messageList:
            []
    },
    {
        owners: 'Bob&David',
        messageList:
            []
    },
    {
        owners: 'Bob&Evan',
        messageList:
            []
    },
    {
        owners: 'Christ&David',
        messageList:
            []
    },
    {
        owners: 'Christ&Evan',
        messageList:
            []
    },
    {
        owners: 'David&Evan',
        messageList:
            []
    },
]
router.get('/:user/:personInTalk', function (request, response) {

    response.setHeader("Access-Control-Allow-Origin", '*');
    let user = request.params.user;
    let personInTalk = request.params.personInTalk;
    let userdata = datas.find((element) => {
        return ((element.owners === `${user}&${personInTalk}`) || (element.owners === `${personInTalk}&${user}`))
    });

    if (userdata != undefined){
        response.json(userdata.messageList);
    }
    else {
        response.json([]);
    }
});

router.post('/update', function (req, res) {

    let reqBody = req.body;
    let type = reqBody.type;
    let sender = reqBody.sender;
    let receiver = reqBody.receiver;
    let message = reqBody.message;
    let newdata = { type: type, sender: sender, receiver: receiver, data: message};

    let userdata = datas.find((element) => {
        return ((element.owners === `${sender}&${receiver}`) || (element.owners === `${receiver}&${sender}`))
    });
    userdata.messageList.push(newdata);
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(newdata);

});

export default  router;