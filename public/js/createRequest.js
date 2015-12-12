function createRequest() {

    var data = {
        name : $('#nameInput').val(),
        netID : $('#netID').val(),
        location : $('#selectLocation').val(),
        notes : $('#otherNotes').val(),
    }

	//TODO show loading UI

    $.ajax({
        type: 'POST',
        data: data,
        url: '/api/qcrequests',
        dataType: 'JSON'
    }).done(function( response ) {
    	console.log("success: " + response);
    	alert("Request Created!")
    });
}