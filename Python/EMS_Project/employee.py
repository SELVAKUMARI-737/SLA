class Employee:

    # Constructor
    def __init__(self, emp_id, name, age, department, salary):

        self.emp_id = emp_id
        self.name = name
        self.age = age
        self.department = department

        # Encapsulation
        self.__salary = salary

    # Getter Method
    def get_salary(self):
        return self.__salary

    # Setter Method
    def set_salary(self, new_salary):
        if new_salary > 0:
            self.__salary = new_salary
        else:
            print("Salary must be greater than 0.")

    # Annual Salary
    def calculate_annual_salary(self):
        return self.__salary * 12

    # Display Employee Details
    def display(self):
        print("\n========== Employee Details ==========")
        print(f"Employee ID : {self.emp_id}")
        print(f"Name        : {self.name}")
        print(f"Age         : {self.age}")
        print(f"Department  : {self.department}")
        print(f"Salary      : ₹{self.__salary}")
        print(f"Annual Pay  : ₹{self.calculate_annual_salary()}")
        print("======================================")

    # String Representation
    def __str__(self):
        return f"{self.emp_id} - {self.name}"