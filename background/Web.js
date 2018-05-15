/**
 * Web Class
 * Has a few functions to handle DOM querys 
 */
class Web {

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

}
