function solution(number) {
  if (number < 0) return 0
  let total = 0;
  let arr = []
  for (let i = 0; i < number; i++) {
    console.log(i)
    console.log(i % 3)
    console.log(i % 5)
    console.log('---')
    if (i % 3 == 0 || i % 5 == 0) {
      arr.push(i)
      total += i
    } else {
      continue
    }
  }
  console.log(arr)
  return total
}

console.log(solution(10)) // 23
