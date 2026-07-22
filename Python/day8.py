s1 = input("Enter Subject 1: ")
s2 = input("Enter Subject 2: ")
s3 = input("Enter Subject 3: ")

mark = int(input("Enter Mark: "))

if s1 == "che" and s2 == "maths" and s3 == "phy" :
    if mark >= 95 :
        print("Doctor Group")
    elif mark >= 85 :
        print("Engineering Group")
    elif mark > 75 :
        print("Arts and Science")
    else:
        print("other Group")
else:
    print("Invalid Subject Combination")