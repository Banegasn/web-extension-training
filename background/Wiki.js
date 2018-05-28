/**
 * Wiki
 * This class has the ability to make request to wikipedia search and return its results
 */
class Wiki {

	constructor(){
		this.urlSearch = "https://es.wikipedia.org/w/index.php?fulltext=1&search=";
		this.results = [];
    }

	addResult(result){
		this.results.push(result);
	}

	getResults(){
		return this.results
	}

	clearResults(){
		this.results = [];
	}

	search(text,plugin) { 
		var xmlHttp = new XMLHttpRequest();
		var wiki = this;

		xmlHttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        var wikiWeb = new Web( this.response ); 
		        console.log(Wiki.getSearchTitles(wikiWeb));
		        wiki.addResult(Wiki.getSearchTitles(wikiWeb));
		        plugin.showResults({titles:Wiki.getSearchTitles(wikiWeb),search:text});
		    }
		};

		text = text.trim();
		var searchtext = text.split(' ').join('+');
		xmlHttp.responseType = "document";
		xmlHttp.open( "GET", this.urlSearch + searchtext, true ); // false for synchronous request
		xmlHttp.send( null );
	}

	static getSearchTitles(web){
		return web.getTextContents(".mw-search-results .mw-search-result-heading a");
	}

}
