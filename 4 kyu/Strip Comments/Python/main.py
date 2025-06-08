def strip_comments(strng, markers):
    lines = strng.split('\n')
    result = []

    for line in lines:
        min_index = len(line)
        for marker in markers:
            index = line.find(marker)
            if index != -1 and index < min_index:
                min_index = index
        result.append(line[:min_index].rstrip())

    return '\n'.join(result)


print(strip_comments('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']))
