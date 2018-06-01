/**
 * Wiki
 * This class has the ability to make request to wikipedia search and return its results
 */
class Wiki {

	constructor(){
		this.baseSearchUrl = "https://es.wikipedia.org/w/index.php?fulltext=1&search=";
    }
	
	/**
	 * Searches in wikipedia for any of the words in the searchText sentence
	 * 
	 * @returns a Promise that resolves to a DocumentWrapper on the results page
	 * @param {a sentense} searchText 
	 */
	search(searchText) { 
		const me = this;
		return new Promise((resolve, reject) => {
			var result = '';
			var xmlHttp = new XMLHttpRequest();
			xmlHttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					result = this.response ; 
					resolve(new DocumentWrapper( this.response ));
				} 
			};
			var searchQuery = searchText.trim().split(' ').join('+');
			xmlHttp.responseType = "document";
			xmlHttp.open( "GET", this.baseSearchUrl + searchQuery, true ); // false for synchronous request
			xmlHttp.send( null );
		})
	}
}

