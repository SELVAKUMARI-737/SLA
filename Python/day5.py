# set 
# A Set is a collection of unique values.
# No duplicate values are allowed.
# Items are not stored in a fixed order.
# Sets are written using {} curly brackets.
# Example
fruits = {"apple", "banana", "mango"}

print(fruits)
# duplicate values are removed 
numbers = {10, 20, 30, 20, 10}

print(numbers) # it keeps only one copy 

# add an item in set 
fruits.add("strawberry")
print(fruits) # not follow ordered

#remove an item 
fruits.remove("banana")
print(fruits)

#update an item  = add multiple items 
fruits = {"apple", "banana"}
fruits.update(["kiwi", "orange"])
print(fruits)

# discard
fruits.discard("mango")
print(fruits)
# set operations
# union
n1={1,2,3,4,5,6}
n2={7,8,4,3,3,9,10,6,5}
n3={9,12,22,11,15,14,6,5,4}
result = n1.union(n2,n3)
print(result);

# intersection
result = n2.intersection(n3)
print(result)

# intersection + update
n2.intersection_update(n3);
print(n2) 
# n1={1,2,3,4,5,6}
# n3={9,12,22,11,15,14,6,5,4}

# difference 
result = n1.difference(n3);
# print(result)

# Symmetric Difference 
result = n1.symmetric_difference(n3);
print(result)

# tuples
# ordered,immutable,allows duplicates 
n=(1,2,3,4,5,6)
print(type(n))

