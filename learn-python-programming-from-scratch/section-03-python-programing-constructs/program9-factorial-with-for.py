def factorial(number):
    result = 1
    # note that the range function stops right before the last number that gets created which is why we added the +1
    for x in range(1, number+1):
        result = result*x
    return result

in_variable = int(input("Enter a number to calculate the factorial of"))
print(factorial(in_variable))
