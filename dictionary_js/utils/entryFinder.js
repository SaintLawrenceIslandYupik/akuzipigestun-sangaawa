function entryFinder(id){
    let findEntry = LEX.filter((word) => word.UUID === id);
    if(!findEntry.length){
        findEntry = pbLEX.filter((word) => word.UUID === id);
        return {
            entry: findEntry[0],
            index: pbLEX.indexOf(findEntry[0])
        }
    }
    else{
        return{
            entry: findEntry[0],
            index: LEX.indexOf(findEntry[0])
        }
    }
};