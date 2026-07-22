from employee import Employee


class Manager(Employee):

    def __init__(self, emp_id, name, age, department, salary, team_size):

        # Call Parent Constructor
        super().__init__(emp_id, name, age, department, salary)

        # Manager-specific attribute
        self.team_size = team_size

    # Method Overriding
    def display(self):

        # Display common employee details
        super().display()

        # Display manager-specific detail
        print(f"Team Size   : {self.team_size}")
        print("=" * 38)