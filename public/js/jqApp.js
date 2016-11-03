$(document).ready(function(){
	$("#boton").click(function(){
		/*$.ajax( {
			url: "http://localhost:3000/demo.html",
			type: "GET",
			success: function(response) {
			$("#ajax").html(response);
			}
		})*/
		$("#ajax").load("http://localhost:3000/demo.html");
	})
})