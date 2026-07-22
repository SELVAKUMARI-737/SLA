from employee import Employee
from developer import Developer
from manager import Manager


class EmployeeManager:

    def __init__(self):

        self.employees = []

    # Add Employee
    def add_employee(self, employee):

        self.employees.append(employee)

        print(f"\n{employee.name} added successfully.")

    # View All Employees
    def view_all_employees(self):

        # Check whether list is empty
        if not self.employees:
            print("\nNo employees found.")
            return

        print("\n========== Employee List ==========")

        for employee in self.employees:
            employee.display()
    # Search Employee by ID
    def search_employee(self, emp_id):

        # Check each employee in the list
        for employee in self.employees:

            if employee.emp_id == emp_id:
                return employee

        # Employee not found
        return None
    # Update Employee
    def update_employee(self, emp_id, name, age, department, salary):

        # Reuse the search method
        employee = self.search_employee(emp_id)

        if employee:

            employee.name = name
            employee.age = age
            employee.department = department

            # Use setter because salary is private
            employee.set_salary(salary)

            print("\nEmployee updated successfully.")

        else:
            print("\nEmployee not found.")
    # Delete Employee
    def delete_employee(self, emp_id):

        # Search for the employee
        employee = self.search_employee(emp_id)

        if employee:

            self.employees.remove(employee)

            print("\nEmployee deleted successfully.")

        else:
            print("\nEmployee not found.")