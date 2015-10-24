// grab the nerd model we just created
var QCRequest = require('./models/qcrequest');

module.exports = function(app) {

    // server routes ===========================================================

    // sample api route
    app.get('/api/qcrequests', function(req, res) {
        // use mongoose to get all requests in the database
        QCRequest.find(function(err, qcrequests) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(qcrequests); // return all requests in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)
    

    // frontend routes =========================================================
    // all routes show the index
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};