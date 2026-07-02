class searchObject {
    constructor(searchTerm, searchType) {
        this.searchTerm = searchTerm;
        this.searchType = searchType;
    }

    get export() {
        return this.csvExport();
    }

    csvExport() {
        let csvString = "Headword,Gloss,Part of Speech,Tags,Examples,IPA,Cyrillic\n";
    }
    
}