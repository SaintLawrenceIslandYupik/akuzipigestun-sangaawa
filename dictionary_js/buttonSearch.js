//Old buttonSearch
const buttonSearch = (e) => {
    var searchString = searchInput.value.toLowerCase();
    const filteredLexicon = LEX.filter((word) =>

        word.search_word.join(", ").toLowerCase().includes(searchString) ||
        word.gloss.some(gloss => gloss.includes(searchString))
    );

    displayWords(filteredLexicon);
};

function exactMatch(term){
    let searchString = term;
    let result = new Array;
    //Exact match
    let exactWord = LEX.filter((word) =>
        word.search_word.some(search_word => search_word.toLowerCase() == searchString)
        //word.search_word.join(", ").toLowerCase() == searchString
    );
    let exactPb = pbLEX.filter((word) =>
        word.search_word.some(search_word => search_word.toLowerCase() == searchString)
        //word.search_word.join(", ").toLowerCase() == searchString
    );
    result = exactWord.concat(exactPb);
    return result
}

function containsMatch(term){
    let searchString = term;
    let results = new Array;
    //contains word
    let containsWord = LEX.filter((word) =>
        word.search_word.join(", ").toLowerCase().startsWith(searchString) || word.search_word.join(", ").toLowerCase().includes(searchString)
    );

    let containsPb = pbLEX.filter((word) =>
        word.search_word.join(", ").toLowerCase().startsWith(searchString) || word.search_word.join(", ").toLowerCase().includes(searchString)
    );

    results = containsWord.concat(containsPb);

    return results;
}

// Initialize Fuse instances lazily to avoid heavy array blocking on load
let fuseLexWord = null;
let fusePbLexWord = null;
let fuseLexGloss = null;

const fuseOptionsWord = { includeScore: true, threshold: 0.35, keys: ['search_word', 'cyrillic'] };
const fuseOptionsGloss = { includeScore: true, threshold: 0.35, keys: ['gloss', 'notes'] };

function fuzzyMatch(term, type) {
    let result = [];
    if (type === "word") {
        if (!fuseLexWord) fuseLexWord = new Fuse(LEX, fuseOptionsWord);
        if (!fusePbLexWord) fusePbLexWord = new Fuse(pbLEX, fuseOptionsWord);
        
        let fuzzyWord = fuseLexWord.search(term).map(r => r.item);
        let fuzzyPb = fusePbLexWord.search(term).map(r => r.item);
        result = fuzzyWord.concat(fuzzyPb);
    } else {
        if (!fuseLexGloss) fuseLexGloss = new Fuse(LEX, fuseOptionsGloss);
        result = fuseLexGloss.search(term).map(r => r.item);
    }
    // Limit to top 20 to avoid a massive page
    return result.slice(0, 20);
}

function printSearch(displayTerm, first, second = []){
    //Print results in section
    let termResults = first.concat(second.filter((item) => first.indexOf(item) < 0));
    if(termResults && termResults.length){
        results.innerHTML += `<span class="results_section">Results for <i>${displayTerm}</i>:</span>`;
    }
    displayWords(termResults);
}

function akuzSearch(term){
    //parse the searchTerm
    let parsedRootList = parseWord(term);
    if(term[0] == "-"){
        let pb = pbLEX.filter((word) =>
            word.search_word.join(", ").toLowerCase().includes(term.toLowerCase())
        );
        if(pb && pb.length){
            results.innerHTML += `<span class="results_section">Results for <i>${term}</i>:</span>`
        }
        displayWords(pb);
    }
    if(parsedRootList){
        let initialMatch = exactMatch(term.toLowerCase());
        if(initialMatch.length){
            printSearch(term, initialMatch);
        }

        let parsedRoot = parsedRootList[0];
        var postBases = parsedRootList.slice(1,parsedRootList.length);
        setParse(parsedRootList);
        //exact match parsed root
        var exactParsedRoot = exactMatch(parsedRoot.toLowerCase());
        var containsParsedRoot = containsMatch(parsedRoot.toLowerCase());
        printSearch(parsedRoot, exactParsedRoot, containsParsedRoot);

        //exact match postbases
        for(let i=0; i < postBases.length-1; i++){

            let pb = pbLEX.filter((word) =>
                word.search_word.join(", ").toLowerCase().includes("-" + postBases[i].replace(/[\@\~\–\-\+\?\±\%\:]/g, "").replace(/\<su[bp]\>[\d*ef]\<\/su[bp]\>/g, "") + "-")
            );
            if(pb && pb.length){
                results.innerHTML += `<span class="results_section">Results for <i>${postBases[i]}</i>:</span>`
            }
            displayWords(pb);
        }
    }
    //exact and contains searches if word could not be parsed
    else{
        var exactWord = exactMatch(term.toLowerCase());
        var containsWord = containsMatch(term.toLowerCase());

        if (exactWord.length === 0 && containsWord.length === 0) {
            var fuzzyResults = fuzzyMatch(term.toLowerCase(), "word");
            if (fuzzyResults.length > 0) {
                results.innerHTML += `<span class="results_section">No exact matches for <i>${term}</i>. Did you mean:</span>`;
                displayWords(fuzzyResults);
            } else {
                printSearch(term, exactWord, containsWord);
            }
        } else {
            printSearch(term, exactWord, containsWord);
        }
    }
};

//This function uses filter() to return a list of entry objects in which, for a given key:value pair 
//where the key is "gloss", "examples", or "notes", the value matches or includes the search term.
//All resulting lists are then concatenated and returned in filteredLexicon. Preference is given
//to the search term existing in "gloss", then "examples", then lastly "notes".
//filteredLexicon = exact match gloss + includes match gloss + includes match examples + includes match notes
//Search for English words
function englishSearch(term) {
    let regTerm = ` ${term} `;
    //search for exact match in gloss first
    let filteredGlossExact = LEX.filter((word) =>
        
        word.gloss.some(gloss => gloss.toLowerCase() == term.toLowerCase()) ||
        word.gloss.join(" ").toLowerCase().includes(regTerm.toLowerCase())
    );

    //search for contained in gloss
    let filteredGloss = LEX.filter((word) =>

        word.gloss.some(gloss => gloss.toLowerCase().includes(term.toLowerCase())) ||
        word.gloss.join(" ").toLowerCase().includes(term.toLowerCase())
    );

    //search for match in examples
    let filteredExamples = LEX.filter((word) =>

        word.examples.some(example => example.toLowerCase().includes(term.toLowerCase()))
    );

    //search for match in notes
    let filteredNotes = LEX.filter((word) =>

        word.notes.some(note => note.toLowerCase().includes(term.toLowerCase()))
    );

    //join all results together
    let filteredLexicon = filteredGlossExact.concat(filteredGloss.filter((item) => filteredGlossExact.indexOf(item) <0));
    filteredLexicon = filteredLexicon.concat(filteredExamples.filter((item) => filteredLexicon.indexOf(item) < 0));
    filteredLexicon = filteredLexicon.concat(filteredNotes.filter((item) => filteredLexicon.indexOf(item) < 0));

    if (filteredLexicon.length === 0) {
        let fuzzyResults = fuzzyMatch(term.toLowerCase(), "gloss");
        if (fuzzyResults.length > 0) {
            results.innerHTML += `<span class="results_section">No exact matches for <i>${term}</i>. Did you mean:</span>`;
            displayWords(fuzzyResults);
        } else {
            displayWords(filteredLexicon);
        }
    } else {
        displayWords(filteredLexicon);
    }
};

const searchController = (e) => {
    //clear out results and parse divs
    results.innerHTML = "";
    dummy = "";
    setParse(dummy);

    const searchString = searchInput.value.toLowerCase();

    //English search
    if(document.getElementById("engSearch").checked){
        englishSearch(searchString);
    }
    //Akuzipik search
    else if(document.getElementById("akuzSearch").checked){
        akuzSearch(searchString);
    }

    // Auto-scroll to results smoothly
    if (results && typeof results.scrollIntoView === 'function') {
        results.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (results.innerHTML.trim() === "") {
        results.innerHTML = `<div style="margin-bottom: auto; margin-top: 2rem; text-align: center; color: #555;">No results found for "<b>${searchString}</b>". Trying checking your spelling, or contact us to add it!</div>`;
    }
};

const setParse = (token) => {
    if(token == ""){
        document.getElementById("parse").style.display = "none";
    }
    else{
        document.getElementById("parse").style.display = "flex";
        const morphs = document.getElementById("morphs");
        let output = `<span class='base'>${token[0]}</span>`;
    
        for(i=1; i<token.length; i++){
            output += `<span class='morpheme'>+ ${token[i]}</span>`;
        }
    
        morphs.innerHTML = output;
    }
};
