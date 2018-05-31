/**
 * Popup
 */
class Popup {

	constructor(){
		this.open = false;
	}

	alertNoTitlesAvailable() {
		alert("No se encontraron titulos que cumplan el criterio");
	}

	close(){
		var resultdiv = document.querySelector('#modal-wiki-search');
		resultdiv.remove();
		this.open = false;
	}

	showResults(results){
		const me = this;
		this.createIfNecessary();
		var resultdiv = document.querySelector('#modal-wiki-search .results-body');
		this.addItem(resultdiv,results.search,'h4');
	  	if (results.titles.length == 0) {
			this.addItem(resultdiv,"No hay resultados",'li');
	  	}else{
	  		results.titles.forEach(item => {
		  		me.addItem(resultdiv,item,'li');
			});
	  	}		
	}

	// Private methods down here ...

	createIfNecessary() {
		if ( document.getElementById("modal-wiki-search") ) {
			return;
		}
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

	addItem(div,text,elem){
		var textnode = document.createElement(elem);
	  	textnode.innerHTML = text;
	  	div.appendChild(textnode);
	}


}
