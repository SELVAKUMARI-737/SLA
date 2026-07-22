# 1)  attendance >= 85 , mock_score >= 90 = placed
# attendance >= 85 , mock_score <= 90 = not placed
 # attendance <= 85 then u r not eligible to placements

attendance = int(input("Enter attendance Percentage :"))
mock_score = int(input("Enter mock score: "))
if attendance >= 85:
    if mock_score >= 90:
        print("Placed")
    else:
        print("Not Placed")
else:
    print("Not Eligible for placements")


#2) sub = "python" course = 'pfs' then student course is python fs
# sub = "python" course = 'da' then student course is DA
#sub = "python" course = 'ds' then student course is other course
# sub != 'python' then student course is other than python course

sub = input("Enter Subject :")
course = input("Enter course :")

if sub == "Python":
    if course == "pfs":
        print("Student course is python FS")
    elif course == "da" :
        print("Student course is DA")
    else:
        print("Student course is other than Python course")
else:
    print("Student course is other than Python Course ")