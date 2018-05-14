class Wiki {

	constructor(){
		this.urlSearch = "https://es.wikipedia.org/w/index.php?fulltext=1&search=";
    }

	search(text) {
		var xmlHttp = new XMLHttpRequest();

		xmlHttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        var wikiWeb = new Web( this.response ); 
		        console.log(Wiki.getSearchTitles(wikiWeb));
		    }
		};

		text = text.trim();
		text = text.replace(" ","+");
		xmlHttp.responseType = "document";
		xmlHttp.open( "GET", this.urlSearch + text, true ); // false for synchronous request
		xmlHttp.send( null );
	}

	static getSearchTitles(web){
		return web.getTextContents(".mw-search-results .mw-search-result-heading a");
	}

}

class Web {

	constructor(doc){
		this.doc = doc;
	}

	getTextContents(query){
		var array = [];
		for (const li of this.doc.querySelectorAll(query)) {
		    array.push(li.textContent);
		}
		return array;
	}

	getH1Titles(){
		return this.getTextContents("h1");
	}

	getH1TitlesWithMoreThan5Chars(){
		var array = this.getH1Titles();
		const result = array.filter(text => text.length > 5);
		console.log(result);
		return result;
	}

}

// A function to use as callback
function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
}

// Esta funcion deberia ser un llamado a un metodo? de una clase estatica?
function openPage(tab) {
  wiki = new Wiki();
  wiki.search("hola amigo");
  browser.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
}

browser.browserAction.onClicked.addListener(openPage);