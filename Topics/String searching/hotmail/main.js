// You can experiment here, it won’t be checked
let languages = ["cpp", "javascript", "python", "kotlin"];

let langLength = languages.reduce(function(first, second) {
    return first + second.length;
}, 0);

console.log(langLength);
