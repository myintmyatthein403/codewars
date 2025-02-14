package main

func main() {
  CountPositivesSumNegatives([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}) // returns []int{10, -55}
}

func CountPositivesSumNegatives(numbers []int) []int {
  var count int
  var sum int
  for _, num := range numbers {
    if num > 0 {
      count++
    } else {
      sum += num
    }
  }
  return []int{count, sum}
}
