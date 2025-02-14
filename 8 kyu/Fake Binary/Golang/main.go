package main

func main() {
  FakeBin("45385593107843568") // returns "01011110001100111"
}

func FakeBin(x string) string {
  var newString string
  for _, char := range x {
    if char < '5' {
      newString += "0"
    } else {
      newString += "1"
    }
  }
  return newString
}
