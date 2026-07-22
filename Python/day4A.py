# 1. str1="python",,apply string method
# upper,lower,capitalialize,count,index,
str1 = "python"
print(str1.upper())       
print(str1.lower())      
print(str1.capitalize())  
print(str1.count("o"))    
print(str1.index("t"))

# 2.str1="java is easy to learn"
# replace java with python
str1 = "Java is easy to learn"
new_string = str1.replace("Java", "Python")
print(new_string)

# 3.split the string 
result = str1.split()
print(result)

# 4.join this string
join_words = " ".join(result)
print(join_words)

# 5.Accessing first element of an list.

name=["abi","akash","alex"]
print(name[0]);

# 6)
# a. Slice akash from the list
print(name[1:2])

# b.add priya In the list
name.append("priya")
print(name)

# c.add ajay and ajith in the list
name.extend(["ajay","ajith"])
print(name)

# e.add jack between abi and akash
name.insert(1,"jack")
print(name)

# 7. num=[10,7,2,1,18]--sort and reverse the list
num=[10,7,2,1,18]
num.sort(reverse=True)
print(num)