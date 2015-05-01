    var express = require('express');
    var app = express();
    var server = require('http').createServer(app);
    var morgan = require('morgan');
    var bodyParser = require('body-parser');
    var methodOverride = require('method-override');
    var fs = require('fs');
    var _ = require('lodash');

    console.log('Starting Up');

    // configuration =================

    app.use(express.static(__dirname + '/lib'));
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({'extended':'true'}));            
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
    app.use(methodOverride());

    app.get('/comments.json', function(req,res){
      res.sendfile('./lib/' + req.url);
    });

    app.get('*', function(req, res) {
      res.sendfile('./' + req.url);
    });

    // listen (start app with node server.js) ======================================
    app.set('port', process.env.PORT || 3000);

    server.listen(app.get('port'));