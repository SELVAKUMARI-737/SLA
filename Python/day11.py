numbers = [10,11,12,13]
# print numbers
for num in numbers:
    print(num)
    
# find sum of the list
total = 0
for num in numbers:
    total = total + num
print("sum = ",total)

# find count of the list
count = 0 
for num in numbers :
    count += 1 
print("count =", count)

# find the largest no of list
largest = numbers[0]
for num in numbers:
    if num > largest:
        largest = num
print("Largest = ", largest)
