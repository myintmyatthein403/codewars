function dnaStrand(dna) {
  let newStrand = new Array(dna.length);
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'A': newStrand[i] = 'T'; break;
      case 'T': newStrand[i] = 'A'; break;
      case 'C': newStrand[i] = 'G'; break;
      case 'G': newStrand[i] = 'C'; break;
    }
  }
  return newStrand.join('');
}
