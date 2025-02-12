def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])

# [:2] is a slice that takes the first two elements of the sorted list.
