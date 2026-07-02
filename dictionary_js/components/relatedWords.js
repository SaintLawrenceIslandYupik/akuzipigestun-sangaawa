function relatedWords(current) {
    //this should take in the currentEntry ref, and populate the related words 
    //section with the array of related words in the entry data

    const related = document.getElementById('relList');
    const relArray = current.related_words;

    let relOutput = '';
    for(let i=0; i < relArray.length; i++){
        let k = entryFinder(relArray[i])
        relOutput += `<a href="entry.html?entry=${relArray[i]}"><div class ="relTerm">${k.entry.headword}, ${k.entry.source_pos[0]}.</div></a>`
        if(i==5){
            break;
        }
    }
    related.innerHTML = relOutput;
}

//entryFinder(word).entry.headword