def factorial(number):
    result = 1
    while number > 0:
        result = result*number
        number = number - 1
    return result

in_variable = int(input("Enter a number to calculate the factorial of"))
print(factorial(in_variable))
