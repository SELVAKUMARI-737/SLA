from employee import Employee


class Developer(Employee):

    def __init__(self, emp_id, name, age, department, salary, programming_language):

        # Call the parent constructor
        super().__init__(emp_id, name, age, department, salary)

        # Developer-specific attribute
        self.programming_language = programming_language

    # Method Overriding
    def display(self):

        # Display common employee details
        super().display()

        # Display developer-specific detail
        print(f"Programming Language : {self.programming_language}")
        print("=" * 38)