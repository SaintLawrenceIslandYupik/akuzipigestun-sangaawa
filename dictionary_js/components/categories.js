//Semantic categories
//-------------------
//Native Plants
//Land Animals
//Sea Animals
//Birds
//Boating
//Fishing/Hunting
//Ice
//Weather
//Clothing
//Body Parts
//Tools/utensils
//Traditional Games
//-Toys
//Religion
//Kinship Terms
//Native Foods
//-Preparation
//-Cooking
//Emotions
//Colors/Patterns
//Locations
//Village Life
//-Occupations
//-Traditional dances/instruments
//-Buildings
//-Houshold items
//-Burial Rites
//-Marriage
//Medicine
//Numbers
//Materials/Artifacts
//Exclamations
//Astronomical

//Function that displays all entries belonging to a particular category when a labelled button is pressed.
//Each entry has hidden semantic tags 

var categories = ["Native_Plants",
    "Land_Animals",
	"Sea_Animals",
	"Birds",
	"Boating",
	"Fishing_Hunting",
	"Ice",
	"Weather",
	"Clothing",
	"Body_Parts",
	"Tools_utensils",
	"Traditional_Games",
	"Religion",
	"Kinship_Terms",
	"Native_Foods",
	"Emotions",
	"Colors_Patterns",
	"Locations",
	"Village_Life",
	"Medicine",
	"Numbers",
	"Materials_Artifacts",
	"Exclamations",
	"Astronomical",

];

function findCats(cat) {
    let catLex = LEX.filter((word) =>
        word.cats.join(", ").includes(cat)
    );
    displayWords(catLex);
};

const catList = (categories) => {
    let catContent = document.getElementById("cats_content");
     
    const catString = categories
        .map((cat) =>
            `<span class="tag category" onclick=findCats(${cat})>${cat.replace(/\_/g, " ")}</span>`).join('');

    catContent.innerHTML += catString;
    console.log(catContent.innerHTML);

};

//catList(categories);