let express = require('express');
let app = express();

let router = express.Router();

router.use(function (req, res, next) {
    console.log('/', req.method);
    next();
});

router.use('/user/:id', function (req, res, next) {
    console.log(req.params.id);
    if (req.params.id == 0)
        res.json({'message' : 'you must pass ID other than 0'});
    else
        next();
});

router.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/about.html');
});

router.get('/user/:id', function (req, res) {
    res.json({'message': "hello " + req.params.id});
});

app.use('/', router);

app.use('*', function (req, res) {
    res.senFile(__dirname + '/public/404.html');
});

app.listen(3000, function () {
    console.log('live at port 3000');
});