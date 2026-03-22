const fs = require('fs');
const path = require('path');

// Load parseWord into global context
const parseWordCode = fs.readFileSync(path.join(__dirname, '../dictionary_js/parseWord.js'), 'utf8');
eval(parseWordCode);

describe('parseWord', () => {
    beforeAll(() => {
        // Mock global dependencies
        global.s2m = "mock_s2m"; // Not actually used by our mock foma_apply_down
        global.foma_apply_down = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return false if foma_apply_down returns undefined or empty', () => {
        global.foma_apply_down.mockReturnValueOnce(undefined);
        expect(parseWord('test')).toBe(false);

        global.foma_apply_down.mockReturnValueOnce([]);
        expect(parseWord('test')).toBe(false);
    });

    it('should split suffixes and extract morphemes cleanly by choosing shortest parse', () => {
        // Simulate foma output: ["qavagh^tuq", "qavagh^(g)aqe(V->)^tuq"] -> we expect the shortest parse
        global.foma_apply_down.mockReturnValueOnce(["qavagh^(g)aqe(V->)^tuq", "qavagh^tuq"]);
        
        const result = parseWord('qavaghtuq');
        
        expect(global.foma_apply_down).toHaveBeenCalledWith(global.s2m, 'qavaghtuq');
        
        // Shortest parse is "qavagh^tuq", splitting on ^ gives ['qavagh', 'tuq']
        expect(result).toEqual(['qavagh', 'tuq']);
    });

    it('should strip morphophonological rules wrapped in parentheses', () => {
        global.foma_apply_down.mockReturnValueOnce(["qavagh^(g)aqe(V->)^tuq"]);
        const result = parseWord('qavaghtuq');
        
        // "(g)aqe(V->)" matches the greedy regex /\(.+\)/g completely and is replaced with ""
        expect(result).toEqual(['qavagh', '', 'tuq']);
    });

    it('should handle clitics split by "="', () => {
        global.foma_apply_down.mockReturnValueOnce(["root^suffix=llu"]);
        const result = parseWord('rootsuffixllu');
        
        expect(result).toEqual(['root', 'suffix', '=llu']);
    });
});
