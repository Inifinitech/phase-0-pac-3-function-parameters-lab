// function to return phrase
function introduction(name) {
    return `Hi, my name is ${name}.`;
}
console.log(introduction("Aki"));

// function that uses two parameters
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage());

// function with a parameter that's a default value
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional());