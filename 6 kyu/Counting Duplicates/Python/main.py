def duplicate_count(text):
    return len([c for c in set(text.lower()) if text.lower().count(c) > 1])

# Explanation:
# The function takes a string as input and returns the number of characters that appear more than once in the string.
# The function first converts the input string to lowercase using the `lower()` method.
# It then creates a list comprehension that iterates over the set of unique characters in the lowercase string.
# For each character `c`, it checks if the count of that character in the lowercase string is greater than 1 using the `count()` method.
# If the count is greater than 1, the character is added to the list comprehension.
# Finally, the function returns the length of the list comprehension, which represents the number of characters that appear more than once in the string.
