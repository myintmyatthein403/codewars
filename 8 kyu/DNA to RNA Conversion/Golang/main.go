package main

func main() {
  DNAtoRNA("GCAT") // returns "GCAU"
}

func DNAtoRNA(dna string) string {
  var rna string
  for _, char := range dna {
    if char == 'T' {
      rna += "U"
    } else {
      rna += string(char)
    }
  }
  return rna
}
