/** 
* This class implement the Facade pattern. It is the only entry point
* in the content script package for remote messages from the background script. 
* See content.js to learn how I receive messages from a remote object (the background)
* All my methods have one argument (arguments)
*/
 
class ContentFacade {

    constructor() {
        this.popup = new Popup();
    }

    alertNoTitlesAvailable(args) {
        this.popup.alertNoTitlesAvailable();
    }

    closePopup(args) {
        this.popup.close();
    }

    showResults(args) {
        this.popup.showResults(args.results);
    }

    getTitles(args) {
        var wrapper = new DocumentWrapper(document);
        return {titles: wrapper.getH1TitlesWithMoreThan5Chars()}
    }
   
}