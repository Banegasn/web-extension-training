/**
 * Popup
 */
class Popup {

	constructor(){
		this.open = false;
	}
	
	receive(request){
		if (request.action == "clear") {
			this.close();
		}else if (request.action == "alert-not-found"){
			alert("No se encontraron titulos que cumplan el criterio");
		}else{
			if(!document.getElementById("modal-wiki-search")){
				this.show(request.results);
			}
		}
	}

	show(results) {
		console.log("show: " + results);
		if (! this.open ) {
			console.log("creating div");
			this.createDiv();
		}
		console.log("appending results");
		console.log(JSON.stringify(results));
		this.appendResults(results);
	}

	close(){
		var resultdiv = document.querySelector('#modal-wiki-search');
		resultdiv.remove();
		this.open = false;
	}

	//Private methods from here down
	createDiv(){
		var newDiv = document.createElement("div"); 
		newDiv.innerHTML = 
		`
		<div id="modal-wiki-search" 
			style='height:90%;
				overflow: auto;
				box-shadow: 0 5px 15px 0 rgba(0,0,0,0.6);
				padding:20px;background-color:white; 
				position:fixed;top:20px;left:10%;
				width:80%;margin:auto;
				z-index:999999'
		>
		<h2>Resultados de Wiki Search</h2>
		<p>Estos son los resultados obtenidos en wikipedia a partir de los titulos de esta pagina web</p>
		<div class="results-body"></div>
		
		</div>`;
		document.body.appendChild(newDiv); 
		this.open = true;
	}

	appendResults(results){
        var me = this;
		var resultdiv = document.querySelector('#modal-wiki-search .results-body');
		this.addItem(results.search,'h4');

	  	if (results.titles.length == 0) {
			this.addItem("No hay resultados",'li');
	  	}else{
	  		results.titles.forEach(function(item) {
		  		me.addItem(item,'li');
			});
	  	}
	}

	addItem(text,tag) {
		var resultdiv = document.querySelector('#modal-wiki-search .results-body');
		var textnode = document.createElement(tag);
	  	textnode.innerHTML = text;
	  	resultdiv.appendChild(textnode);
	}


}
