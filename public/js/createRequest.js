function createRequest() {

	//TODO create data
	//var newRequest = {}

	//TODO show loading UI

    $.ajax({
        type: 'POST',
        data: null,
        url: '/api/qcrequests',
        dataType: 'JSON'
    }).done(function( response ) {
    	console.log("success: " + response);
    	alert("Request Created!")
    });
}