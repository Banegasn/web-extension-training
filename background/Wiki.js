/**
 * Wiki
 * This class has the ability to make request to wikipedia search and return its results
 */
class Wiki {

	constructor(){
		this.urlSearch = "https://es.wikipedia.org/w/index.php?fulltext=1&search=";
    }

	search(text,plugin) { 
		var xmlHttp = new XMLHttpRequest();
		var wiki = this;

		xmlHttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        var wrapper = new DocumentWrapper( this.response ); 
		        plugin.showResults({titles: wrapper.getSearchTitles(), search: text});
		    }
		};

		text = text.trim();
		var searchtext = text.split(' ').join('+');
		xmlHttp.responseType = "document";
		xmlHttp.open( "GET", this.urlSearch + searchtext, true ); // false for synchronous request
		xmlHttp.send( null );
	}
}
