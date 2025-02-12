Define a function that takes in two non-negative integers  aa  and  bb  and returns the last decimal digit of  abab. Note that  aa  and  bb  may be very large!

For example, the last decimal digit of  9797  is  99, since  97=478296997=4782969. The last decimal digit of  (2200)2300(2200)2300, which has over  10921092  decimal digits, is  66. Also, please take  0000  to be  11.

You may assume that the input will always be valid.

## Examples

```javascript
lastDigit(4n, 1n)            // returns 4n
lastDigit(4n, 2n)            // returns 6n
lastDigit(9n, 7n)            // returns 9n  
lastDigit(10n,10000000000n)  // returns 0n
```
