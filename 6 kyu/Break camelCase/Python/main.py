def breakCamelCase(s):
    return ''.join([' ' + c if c.isupper() else c for c in s])

# `join` method is used to join the elements of an iterable to a string.
# `isupper` method is used to check if all the characters in the text are in upper case.
# `else` statement is used to execute the code if the condition is false.
# `for` loop is used to iterate over a sequence.
# `return` statement is used to return the value.

print(breakCamelCase('camelCasing'))  # 'camel Casing'
