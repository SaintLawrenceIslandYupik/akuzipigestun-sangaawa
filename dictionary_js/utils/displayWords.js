const displayWords = (words) => {
    let results = document.getElementById("results");
    const htmlString = words
        .map((word) =>
        //entry formatting as string
            `<div class="entryContent result">
                <div class="entryTop">
                    <span class="entryHead">
                        <a href="entry.html?entry=${word.UUID}" class="headwordlink">
                            <div class="headwordCont">${word.headword}</div>
                        </a>
                        <div class="tagCont">${tagString(word.tags)}${tagString(word.pos)}</div>
                    </span>
                </div>
                <div class="entryBottom">
                    <span class="entryDef">${checkChars(word.gloss.join("; "))}</span>
                </div>
            </div>
            `)
        .join('');
    results.innerHTML += htmlString;

    setTag();
};

const setCsvString = (words, addToString) => {
    //csvString = "data:text/csv;charset=utf-8,\uFEFF"
    if(!addToString) {
    csvString = "headword\tgloss\tpart of speech\ttags\texamples\tipa\tcyrillic\r\n";
    }
    for(let i=0; i<words.length; i++){
        let word = words[i];
        let headword = word.headword;
        let gloss = word.gloss.join("; ");
        let pos = word.pos;
        let tags = word.tags.join("; ");
        let examples = word.examples.join("; ");
        let ipa = word.ipa;
        let cyrillic = word.cyrillic;
        csvString += `${headword}\t${gloss}\t${pos}\t${tags}\t${examples}\t${ipa}\t${cyrillic}\r\n`;
    }
    console.log(csvString);
    document.getElementById("exportButton").style.display = "block";
}

const exportToCSV = (searchString) => {
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8,\uFEFF' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `results_${searchString}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // var encodedUri = encodeURIComponent(csvString);
    // window.open(encodedUri);
};

const tagString = (tags) => {
    let tagStr = "";
    if(!Array.isArray(tags)){
        return `<span class='tag ${tags}Tag'>${tags.toUpperCase()}</span>`
    }
    for(let i=0; i<tags.length; i++){
        tagStr += `<span class='tag ${tags[i]}Tag'>${tags[i].toUpperCase()}</span>`
    }
    return tagStr;
}

const checkChars = (str) => {
    const max = 100;
    return str.length > max ? str.substring(0, max) + "..." : str;
}
//code for displaying examples on card
//<span class="entryOther">${word.examples.join("\n")}</span>
//<span class="entryCyr">(${word.cyrillic})</span>
//<span class="entryipa">/${word.ipa.join("/, /")}/</span>


            //<a href="entry.html?entry=${word.UUID}" class="result">
            //     <div class="entryContent">
            //         <div class="entryTop">
            //             <span class="entryHead">
            //                 <div class="headwordCont">${word.headword}</div>
            //                 <div class="tagCont">${word.tags}${word.pos}</div>
            //             </span>     
            //         </div>
            //         <div class="entryBottom">
            //             <span class="entryDef">${word.gloss.join("; ")}</span>
            //         </div>
            //     </div>
            // </a>