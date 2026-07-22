from employee import Employee
from developer import Developer
from manager import Manager
from employee_manager import EmployeeManager

manager = EmployeeManager()

while True:

    print("\n" + "=" * 50)
    print("      EMPLOYEE MANAGEMENT SYSTEM")
    print("=" * 50)
    print("1. Add Employee")
    print("2. View All Employees")
    print("3. Search Employee")
    print("4. Update Employee")
    print("5. Delete Employee")
    print("6. Exit")
    print("=" * 50)

    choice = input("Enter your choice: ")

    if choice == "1":

        print("\nSelect Employee Type")
        print("1. Employee")
        print("2. Developer")
        print("3. Manager")

        emp_type = input("Enter your choice: ")

        emp_id = int(input("Enter Employee ID: "))
        name = input("Enter Name: ")
        age = int(input("Enter Age: "))
        department = input("Enter Department: ")
        salary = float(input("Enter Monthly Salary: "))

        if emp_type == "1":

            employee = Employee(
                emp_id,
                name,
                age,
                department,
                salary
            )

        elif emp_type == "2":

            language = input("Enter Programming Language: ")

            employee = Developer(
                emp_id,
                name,
                age,
                department,
                salary,
                language
            )

        elif emp_type == "3":

            team_size = int(input("Enter Team Size: "))

            employee = Manager(
                emp_id,
                name,
                age,
                department,
                salary,
                team_size
            )

        else:

            print("Invalid Employee Type.")
            continue

        manager.add_employee(employee)

    elif choice == "2":

        manager.view_all_employees()

    elif choice == "3":

        emp_id = int(input("Enter Employee ID to search: "))

        employee = manager.search_employee(emp_id)

        if employee:
            print("\nEmployee Found:")
            employee.display()
        else:
            print("\nEmployee not found.")

    elif choice == "4":

        emp_id = int(input("Enter Employee ID to update: "))

        # Check if employee exists before asking for new details
        existing_employee = manager.search_employee(emp_id)

        if existing_employee:

            print("\nEnter New Details")
            name = input("Enter Name: ")
            age = int(input("Enter Age: "))
            department = input("Enter Department: ")
            salary = float(input("Enter Monthly Salary: "))

            manager.update_employee(emp_id, name, age, department, salary)

        else:
            print("\nEmployee not found.")

    elif choice == "5":

        emp_id = int(input("Enter Employee ID to delete: "))

        manager.delete_employee(emp_id)

    elif choice == "6":

        print("\nThank you for using Employee Management System!")
        break

    else:

        print("\nInvalid choice. Please try again.")