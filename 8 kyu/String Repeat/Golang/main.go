package main

import 'strings'

func main() {
  RepeatStr(3, "hello") // returns "hellohellohello"
  RepeatStr(5, "world") // returns "worldworldworldworldworld"
}

func RepeatStr(repetitions int, value string) string {
  var newString string
  for i := 0; i < repetitions; i++ {
    newString += value
  }
  return newString
}

func RepeatStrOptimize(repetitions int, value string) string {
  return strings.Repeat(value, repetitions)
}
