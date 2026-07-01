 //"<span class='tag chukotkanTag'>CHUKOTKAN</span>"
function setTag(){
    let tagList = document.getElementsByClassName("tag");
    for(let i=0; i<tagList.length; i++){
        let tagType = tagList[i].classList[1];
        tagList[i].addEventListener('click', function(){sameTag(tagType);}, false);
    }
}

function sameTag(tag){
    let results = document.getElementById("results");
    results.innerHTML = "";
    let shortTag = tag.slice(0,-3);
    console.log(shortTag);
    let tagList = LEX.filter((word) =>
        word.tags.includes(shortTag) ||
        word.pos.includes(shortTag)
    );
    let pbTagList = pbLEX.filter((word) =>
        word.tags.includes(shortTag) ||
        word.pos.includes(shortTag)
    );

    console.log(tagList);
    let allList = tagList.concat(pbTagList.filter((item) => tagList.indexOf(item) <0));
    //let filteredLexicon = filteredGlossExact.concat(filteredGloss.filter((item) => filteredGlossExact.indexOf(item) <0));

    displayWords(allList);
    setCsvString(allList);
}
