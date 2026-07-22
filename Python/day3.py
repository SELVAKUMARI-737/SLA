# name = input("Enter the Name : ")
# age = int(input("Enter the Age : "))
# marks = float (input(" Enter the marks : "))

# print(name,age, marks, sep=' , ' , end = '\n')
# f string 
#print(f'this is my name : {name}, this is my age: {age}, this is my mark: {marks}')

# Task 1 
Emp_name = input("Enter the Employee name : ")
emp_salary = int(input("Enter your Salary: "))
emp_phone = int(input("Enter your phone : "))

output = f'Employee name is {Emp_name},\n Employee salary is {emp_salary},\n Employee phone Number is {emp_phone}'
print(output[0:10])
# upper,lower, title, strip, rstrip,lstrip,