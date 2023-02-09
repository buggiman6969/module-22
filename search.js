const lyrics = "My patience is waning Is this entertaining? Our patience is waning Is this entertaining"

const searchLowerCase = "my";
const doesExist = lyrics.toLowerCase().includes(searchLowerCase.toLowerCase());
// console.log(doesExist);


// ====================================
// indexof

console.log(lyrics.indexOf("Is"));

// if condition index of

if(lyrics.indexOf("our") !== -1){
    console.log("paisi mama joss");
}
else{
    console.log("khankir pola abar try kor");
}