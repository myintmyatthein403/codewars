package main

import "sort"

func main() {
  SmallestIntegerFinder([]int{34, 15, 88, 2}) // returns 2
  SmallestIntegerFinder([]int{34, -345, -1, 100}) // returns -345
}

func SmallestIntegerFinder(numbers []int) int {
  sort.Ints(numbers)
  return numbers[0]  
}
