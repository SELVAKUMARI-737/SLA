from sympy import symbols, expand
x, y, z = symbols('x y z')
# 3 var (x+y+z)**2
exp1 = (x + y + z) ** 2
print("(x+y+z)^2 =")
print(expand(exp1))
print()

# (x-y)**2
exp2 = (x - y) ** 2
print("(x-y)^2 =")
print(expand(exp2))

print()

# (x+y)**3
exp3 = (x + y) ** 3
print("(x+y)^3 =")
print(expand(exp3))