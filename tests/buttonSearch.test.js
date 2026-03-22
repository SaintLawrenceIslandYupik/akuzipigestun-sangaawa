const fs = require('fs');
const path = require('path');

// We simulate loading the global LEX and pbLEX arrays, plus the script
global.LEX = [
    { UUID: "1", headword: "qavagh-", search_word: ["qavagh", "qavagh-"], gloss: ["to sleep", "fall asleep"], examples: ["qavaghtuq he sleeps"], notes: [] },
    { UUID: "2", headword: "nenglligh-", search_word: ["nenglligh", "nenglliq"], gloss: ["to be cold"], examples: [], notes: ["nenglli cold"] }
];
global.pbLEX = [
    { UUID: "3", headword: "-tuq", search_word: ["-tuq", "tuq"], gloss: ["3s indicative"], examples: [], notes: [] }
];

// Load buttonSearch into global context
const buttonSearchCode = fs.readFileSync(path.join(__dirname, '../dictionary_js/buttonSearch.js'), 'utf8');

// We evaluate the code inside a closure so we can extract block-scoped 'const' arrow functions like searchController
const exportedFunctions = eval(`
    (() => {
        ${buttonSearchCode}
        return { 
            exactMatch: typeof exactMatch !== 'undefined' ? exactMatch : null, 
            containsMatch: typeof containsMatch !== 'undefined' ? containsMatch : null, 
            englishSearch: typeof englishSearch !== 'undefined' ? englishSearch : null, 
            searchController: typeof searchController !== 'undefined' ? searchController : null 
        };
    })();
`);

global.exactMatch = exportedFunctions.exactMatch;
global.containsMatch = exportedFunctions.containsMatch;
global.englishSearch = exportedFunctions.englishSearch;
const searchController = exportedFunctions.searchController;


describe('Search Functions', () => {
    describe('exactMatch', () => {
        it('should return exact match from LEX or pbLEX', () => {
            const results = exactMatch('qavagh');
            expect(results.length).toBe(1);
            expect(results[0].headword).toBe('qavagh-');
        });

        it('should return empty array if no exact match', () => {
            const results = exactMatch('qavaghtuq');
            expect(results.length).toBe(0);
        });
    });

    describe('containsMatch', () => {
        it('should return matches that contain the substring', () => {
            const results = containsMatch('nenglli');
            expect(results.length).toBe(1);
            expect(results[0].headword).toBe('nenglligh-');
        });
    });

    describe('englishSearch', () => {
        beforeAll(() => {
            global.displayWords = jest.fn();
        });

        afterEach(() => {
            jest.clearAllMocks();
        });

        it('should match exact glosses', () => {
            englishSearch('sleep');
            // We're expecting our mocked displayWords to have been called with an array containing the matched object
            expect(global.displayWords).toHaveBeenCalled();
            const calledArgs = global.displayWords.mock.calls[0][0];
            expect(calledArgs[0].headword).toBe('qavagh-');
        });
    });

    describe('searchController', () => {
        beforeAll(() => {
            // Provide actual DOM elements for jsdom
            document.body.innerHTML = `
                <div id="results"></div>
                <input id="searchInput" value="test">
                <input type="radio" id="engSearch" checked>
                <input type="radio" id="akuzSearch">
                <div id="parse" style="display: none"></div>
                <div id="morphs"></div>
            `;
            
            global.results = document.getElementById('results');
            global.results.scrollIntoView = jest.fn();
            global.searchInput = document.getElementById('searchInput');
            global.dummy = "";
            global.setParse = jest.fn();
            global.englishSearch = jest.fn();
            global.akuzSearch = jest.fn();
        });

        afterEach(() => {
            jest.clearAllMocks();
        });

        it('should auto-scroll to results', () => {
            // Act
            searchController();

            // Assert (englishSearch will process internally, we just test scrolling)
            expect(global.results.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
        });
    });
});
