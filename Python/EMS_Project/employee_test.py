from employee import Employee
from developer import Developer
from manager import Manager
from employee_manager import EmployeeManager

manager = EmployeeManager()

emp1 = Employee(101, "Selva", 21, "AI", 35000)
dev1 = Developer(102, "John", 25, "Software", 60000, "Python")
mgr1 = Manager(103, "Rahul", 40, "Administration", 90000, 12)

manager.add_employee(emp1)
manager.add_employee(dev1)
manager.add_employee(mgr1)

print("\nBefore Delete")
manager.view_all_employees()

manager.delete_employee(102)

print("\nAfter Delete")
manager.view_all_employees()