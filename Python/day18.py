class Student:

    def __init__(self, name, age, gender, dob, phone, email, address,
                 degree, course, department):
        self.name = name
        self.age = age
        self.gender = gender
        self.dob = dob
        self.phone = phone
        self.email = email
        self.address = address
        self.degree = degree
        self.course = course
        self.department = department
    def display(self):
        print("----- STUDENT APPLICATION FORM -----")
        print("Name       :", self.name)
        print("Age        :", self.age)
        print("Gender     :", self.gender)
        print("DOB        :", self.dob)
        print("Phone      :", self.phone)
        print("Email      :", self.email)
        print("Address    :", self.address)
        print("Degree     :", self.degree)
        print("Course     :", self.course)
        print("Department :", self.department)
s1 = Student(
    "Selvakumari K",
    21,
    "Female",
    "10-08-2004",
    "9876543210",
    "selvakumari@gmail.com",
    "Chennai",
    "B.Tech",
    "AI & Data Science",
    "AI & DS"
)
s1.display()
