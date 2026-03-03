USE slatask;

-- Tables


CREATE TABLE dept13(
dept_id INT,
dept_name VARCHAR(50)
);


CREATE TABLE emp13(
emp_id INT,
emp_name VARCHAR(50),
dept_id INT,
manager_id INT,
salary INT
);


CREATE TABLE proj13(
project_id INT,
project_name VARCHAR(50),
dept_id INT
);


CREATE TABLE emp_proj13(
emp_id INT,
project_id INT
);


CREATE TABLE loc13(
location_id INT,
dept_id INT,
city VARCHAR(50)
);


-- Insert Values

INSERT INTO dept13 VALUES
(1,'IT'),
(2,'HR'),
(3,'Finance'),
(4,'Sales');


INSERT INTO emp13 VALUES
(1,'Ravi',1,NULL,82000),
(2,'Kumar',1,1,62000),
(3,'Priya',2,1,52000),
(4,'Arjun',3,2,72000),
(5,'Meena',NULL,2,48000);


INSERT INTO proj13 VALUES
(201,'Inventory',1),
(202,'Accounts',3),
(203,'Hiring',2);


INSERT INTO emp_proj13 VALUES
(1,201),
(2,201),
(3,203),
(4,202);


INSERT INTO loc13 VALUES
(1,1,'Chennai'),
(2,2,'Delhi'),
(3,3,'Mumbai');


-- 1 Employees earning more than average salary
SELECT *
FROM emp13
WHERE salary > (SELECT AVG(salary) FROM emp13);


-- 2 Employees in IT department
SELECT *
FROM emp13
WHERE dept_id =
(SELECT dept_id FROM dept13 WHERE dept_name='IT');


-- 3 Employees with highest salary
SELECT *
FROM emp13
WHERE salary =
(SELECT MAX(salary) FROM emp13);


-- 4 Employees without department
SELECT *
FROM emp13
WHERE dept_id IS NULL;


-- 5 Employees working on at least one project
SELECT *
FROM emp13
WHERE emp_id IN
(SELECT emp_id FROM emp_proj13);


-- 6 Employees NOT working on project
SELECT *
FROM emp13
WHERE emp_id NOT IN
(SELECT emp_id FROM emp_proj13);


-- 7 Departments having employees
SELECT *
FROM dept13
WHERE dept_id IN
(SELECT dept_id FROM emp13);


-- 8 Departments without employees
SELECT *
FROM dept13
WHERE dept_id NOT IN
(SELECT dept_id FROM emp13);


-- 9 Employees earning more than manager
SELECT *
FROM emp13 e1
WHERE salary >
(SELECT salary FROM emp13 e2
WHERE e1.manager_id=e2.emp_id);


-- 10 Employees in Mumbai departments
SELECT *
FROM emp13
WHERE dept_id IN
(SELECT dept_id FROM loc13 WHERE city='Mumbai');


-- 11 Employees working on Inventory project
SELECT *
FROM emp13
WHERE emp_id IN
(SELECT emp_id FROM emp_proj13
WHERE project_id=
(SELECT project_id FROM proj13
WHERE project_name='Inventory'));


-- 12 Projects assigned to IT employees
SELECT *
FROM proj13
WHERE dept_id=
(SELECT dept_id FROM dept13
WHERE dept_name='IT');


-- 13 Employees who are managers
SELECT *
FROM emp13
WHERE emp_id IN
(SELECT manager_id FROM emp13
WHERE manager_id IS NOT NULL);


-- 14 Employees NOT managers
SELECT *
FROM emp13
WHERE emp_id NOT IN
(SELECT manager_id FROM emp13
WHERE manager_id IS NOT NULL);


-- 15 Departments having projects
SELECT *
FROM dept13
WHERE dept_id IN
(SELECT dept_id FROM proj13);


-- 16 Departments without projects
SELECT *
FROM dept13
WHERE dept_id NOT IN
(SELECT dept_id FROM proj13);


-- 17 Employees earning more than dept average
SELECT *
FROM emp13 e1
WHERE salary >
(SELECT AVG(salary) FROM emp13 e2
WHERE e1.dept_id=e2.dept_id);


-- 18 Second highest salary
SELECT MAX(salary)
FROM emp13
WHERE salary <
(SELECT MAX(salary) FROM emp13);


-- 19 Employees in departments with >1 employee
SELECT *
FROM emp13
WHERE dept_id IN
(SELECT dept_id FROM emp13
GROUP BY dept_id
HAVING COUNT(*)>1);


-- 20 Employees whose department has location
SELECT *
FROM emp13
WHERE dept_id IN
(SELECT dept_id FROM loc13);


-- 21 Employees whose department has NO location
SELECT *
FROM emp13
WHERE dept_id NOT IN
(SELECT dept_id FROM loc13);


-- 22 Projects belonging to departments with employees
SELECT *
FROM proj13
WHERE dept_id IN
(SELECT dept_id FROM emp13);


-- 23 Employees working in own department project
SELECT *
FROM emp13 e
WHERE emp_id IN
(SELECT emp_id FROM emp_proj13 ep
JOIN proj13 p
ON ep.project_id=p.project_id
WHERE e.dept_id=p.dept_id);


-- 24 Employees working outside department project
SELECT *
FROM emp13 e
WHERE emp_id IN
(SELECT emp_id FROM emp_proj13 ep
JOIN proj13 p
ON ep.project_id=p.project_id
WHERE e.dept_id<>p.dept_id);


-- 25 Departments all employees salary >50000
SELECT *
FROM dept13
WHERE dept_id IN
(SELECT dept_id FROM emp13
GROUP BY dept_id
HAVING MIN(salary)>50000);