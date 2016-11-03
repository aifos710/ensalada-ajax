 //1 crea un objeto XHR
 //2 utiliza un event handler 
//3abrir una conexion
//4enviar peticion

document.getElementById("boton").addEventListener("click", function(){
	var xhr = new XMLHttpRequest();
	var callback = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			document.getElementById("ajax").innerHTML = xhr.responseText;
		}
	};
	xhr.addEventListener("readystatechange", callback);
	var url = "http://localhost:3000/demo.html";
	xhr.open("GET", url);
 	xhr.send();	
});



