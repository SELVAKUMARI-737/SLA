# print a function with returning multiple values
def student():
    name = "Selva"
    age = 21
    score = 85

    return name, age, score

name, age, score = student()

print("Name :", name)
print("Age :", age)
print("Score :", score)

# Do a arithmetic calculator program using functions
def add(a, b):
    return a + b

def sub(a, b):
    return a - b

def mul(a, b):
    return a * b

def div(a, b):
    return a / b

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print("Addition =", add(a, b))
print("Subtraction =", sub(a, b))
print("Multiplication =", mul(a, b))
print("Division =", div(a, b))

# Difference between function call and return keyword

# CREATE A FUNCTION FOR PRIME NUMBER
def prime(n):
    if n <= 1:
        return False

    for i in range(2, n):
        if n % i == 0:
            return False

    return True

num = int(input("Enter a number: "))

if prime(num):
    print("Prime Number")
else:
    print("Not a Prime Number")

# program to find even nos using lambda
numbers = [1,2,3,4,5,6,7,8,9,10]

even = list(filter(lambda x: x % 2 == 0, numbers))

print("Even Numbers:", even)