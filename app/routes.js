// grab the nerd model we just created
var QCRequest = require('./models/qcrequest');

module.exports = function(app) {

    // server routes ===========================================================

    // Get all QCRequests
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

    // Create a new QCRequest
    app.post('/api/qcrequests', function(req, res) {
        var name = req.body.name;
        var netID = req.body.netID;
        var location = req.body.location;
        var notes = req.body.notes;

        console.log(name + ' ' + netID + ' ' + location + ' ' + notes);

        var name = "Test Name";
        var newRequest = new QCRequest({ name: name });
        newRequest.save(function (err, savedRequest) {
            if (err) res.send(err);

            //send the OK, QCRequest created
            res.status(201).json(JSON.stringify(savedRequest));
        })
    });


    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)


    // frontend routes =========================================================
    // By default, GET <path> returns the file with path /public/<path>
    // GET / returns index.html (default behavior)
};