package main

func main() {
 RemoveChar("word") // returns "ord" 
}

func RemoveChar(word string) string {
  var newWord string
  for i, char := range word {
    if i != 0 && i != len(word) - 1 {
      newWord += string(char)
    }
  }
  return newWord
}
