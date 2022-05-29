// let arr = [];

// for(let i=0; i < 1000 ; i++){
//     arr.push(i + 1);
// }
// for(let i=0;i<1000;i++){
//     console.log(i, arr[i]);
// }

/////////////////////////////////////////////////////
let words = ['one', 'two', 'three', 'four', 'five'];
let fourOrMore = words.filter(function(word){
    return word.length > 3;
})

//version 1 - for loop
for(let i = 0 ; i < words.length; i++){
    let word = words[i];
    console.log(word); 
}
//version 2 - for of loop(same like version1)
for(let word of words){
    console.log(word);
}
//version 3 - forEach()
words.forEach(function(word){
    console.log(word);
});

let uppercaseWords = words.map(function(word){
    return word.toUpperCase();
});

console.log(uppercaseWords);














