// Listen for messages
browser.runtime.onMessage.addListener(request => {
	if (request.results) {
		if(!document.getElementById("modal-wiki-search")){
			var newDiv = document.createElement("div"); 
			newDiv.innerHTML = 
			`<div id="modal-wiki-search" style='height:90%;overflow: auto;box-shadow: 0 5px 15px 0 rgba(0,0,0,0.6);padding:20px;background-color:white; position:fixed;top:20px;left:10%;width:80%;margin:auto;z-index:999999'>
			<h2>Resultados de Wiki Search</h2>
			<p>Estos son los resultados obtenidos en wikipedia a partir de los titulos de esta pagina web</p>
			<div class="results-body"></div>
			</div>`;
			document.body.appendChild(newDiv); 
		}
	
		var resultdiv = document.querySelector('#modal-wiki-search .results-body');
		var searchtitle = document.createElement('h4');
		searchtitle.innerHTML = request.results.search;
	  	resultdiv.appendChild(searchtitle);
		request.results.titles.forEach(function(item) {
		  var textnode = document.createElement("li");
		  	textnode.innerHTML = item;
		  	resultdiv.appendChild(textnode);
		});
		return true;
	}else{
		currentWeb = new Web(document);
		return Promise.resolve({titles: currentWeb.getH1TitlesWithMoreThan5Chars() });
	}
	
});

