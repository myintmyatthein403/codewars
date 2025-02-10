function toCamelCase(str) {
  return str.split(/[-_]/).map((word, index) => {
    if (index === 0) return word;
    return word[0].toUpperCase() + word.slice(1);
  }).join('');
}

console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"
console.log(toCamelCase("A-B-C")); // "ABC"
