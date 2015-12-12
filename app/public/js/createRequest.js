function createRequest() {

    var data = {
        name : $('#nameInput').val(),
        netID : $('#netID').val(),
        location : $('#selectLocation').val(),
        notes : $('#otherNotes').val(),
    }
    if (data.name == "") {
        alert("Enter Name!")
        return
        }
    if (data.netID == "") {
        alert("Enter NetID!")
        return
        }
    if (data.location == "") {
        alert("Enter Location!")
        return
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