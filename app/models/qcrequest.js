// grab the mongoose module
var mongoose = require('mongoose');

// define our model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('QCRequest', {
    name : {type : String, default: ''},
    netID : {type : String, default: ''},
    location : {type : String, default: ''},
    notes : {type : String, default: ''},
});