package main

func main() {
  QuarterOf(3) // returns 1
  QuarterOf(8) // returns 3
  QuarterOf(11) // returns 4
  QuarterOf(12) // returns 4
}

func QuarterOf(month int) int {
  return (month + 2) / 3
}
