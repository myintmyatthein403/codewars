def dir_reduc(arr):
    oppsosite = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    }

    stack = []
    for direction in arr:
        if stack and oppsosite[direction] == stack[-1]:
            stack.pop()
        else:
            stack.append(direction)
    
    return stack;


print(dir_reduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))

