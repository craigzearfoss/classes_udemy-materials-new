def formula(a, b):
    if b == 0:
        print("You cannot divide by zero!")
    else:
        result = (a+b)/b
        return result

print(formula(4, 4))
formula(2,0)