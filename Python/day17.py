# program to find even nos using lambda
numbers = [1,2,3,4,5,6,7,8,9,10]

even = list(filter(lambda x: x % 2 == 0, numbers))

print("Even Numbers:", even)

# list=[-10,9,-8,34,0]filter only positive values from lambda

lst = [-10, 9, -8, 34, 0]

positive = list(filter(lambda x: x > 0, lst))

print("Positive Values:", positive)