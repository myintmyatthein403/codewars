function topThreeWords(text) {
  let words = text.toLowerCase().match(/\b[a-z']+\b/g);
  if (!words) return [];

  let wordCount = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  return Object.keys(wordCount)
    .sort((a, b) => wordCount[b] - wordCount[a])
    .slice(0, 3);
}  
