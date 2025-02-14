package main

func main() {
  BoolToWord(true) // returns "Yes"
  BoolToWord(false) // returns "No"
}

func BoolToWord(word bool) string {
  if word {
    return "Yes"
  } else {
    return "No"
  }
}
