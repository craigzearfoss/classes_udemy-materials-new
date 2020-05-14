num1 = int(input("Enter a number"))
num2 = int(input("Enter a second number"))

try:
    print(num1/num2)
except ZeroDivisionError:
    print("Dividing by Zero is not allowed!")
