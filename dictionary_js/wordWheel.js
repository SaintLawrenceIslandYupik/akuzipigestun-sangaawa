class wordWheel {
    constructor(length, index){
        this.length = length;
        this.index = index;
        this.wheel = document.getElementById("wheelList");
        this.wordWheeler(this.index, this.length);
    }

    scrollWheelDown(){
        this.index += 5;
        wordWheeler(this.index, this.length);
    }

    scrollWheelUp(){
        this.index -= 5;
        wordWheeler(this.index, this.length);
    }

    wordWheeler(index, lexLength){
        let currentWheelView = "";
        for (let i=-5; i<6; i++){
            let slot = LEX[(index+lexLength+i)%lexLength];
            currentWheelView += `<a href="entry.html?entry=${slot.UUID}" class="wheelElement"><span><span>${slot.headword}</span><span>${this.posString(slot)}</span></a>`
        }
        this.wheel.innerHTML = currentWheelView;
    }

    posString(position){
        return `<span class='tag ${position.pos}Tag'>${position.pos.toUpperCase()}</span>`
    }
}