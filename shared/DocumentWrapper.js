/**
 * DocumentWrapper Class
 * Wraps a browser Document object to provide additional functionality
 */
class DocumentWrapper {

    //doc: the browser's Document object 
	constructor(doc){
		this.doc = doc;
	}

	getTextContents(query){
		var array = [];
		var items = this.doc.querySelectorAll(query);

		items.forEach(function(item) {
		  array.push(item.textContent);
		});

		return array;
	}

	getH1Titles(){
		return this.getTextContents("h1");
	}

	getH1TitlesWithMoreThan5Chars(){
		var array = this.getH1Titles();
		const result = array.filter(text => text.length > 5);
		return result;
	}

	getSearchTitles(){
		return this.getTextContents(".mw-search-results .mw-search-result-heading a");
	}

}
