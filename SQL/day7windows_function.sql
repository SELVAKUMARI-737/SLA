USE slatask;
drop table students1 ;
-- Table 1
CREATE TABLE students1(
id INT,
class VARCHAR(10),
name VARCHAR(50),
marks INT
);

INSERT INTO students1 VALUES
(1,'A','John',85),
(2,'A','Sara',92),
(3,'A','Mike',78),
(4,'B','Anna',88),
(5,'B','Tom',90);


-- Table 2
CREATE TABLE exam1(
student VARCHAR(50),
subject VARCHAR(20),
score INT
);

INSERT INTO exam1 VALUES
('Alice','Math',90),
('Bob','Math',90),
('Charlie','Math',85),
('David','Science',88),
('Eva','Science',88);


-- Table 3
CREATE TABLE employees11(
emp_name VARCHAR(50),
department VARCHAR(20),
salary INT
);

INSERT INTO employees11 VALUES
('Alex','IT',7000),
('Brian','IT',7000),
('Chris','IT',6500),
('Diana','HR',6000),
('Eva','HR',5800);

drop table orders ;
-- Table 4
CREATE TABLE orders(
order_id INT,
order_date DATE,
amount INT
);

INSERT INTO orders VALUES
(1,'2024-01-01',100),
(2,'2024-01-02',200),
(3,'2024-01-03',150),
(4,'2024-01-04',300);


-- Table 5
CREATE TABLE monthly_sales(
month VARCHAR(10),
sales INT
);

INSERT INTO monthly_sales VALUES
('Jan',5000),
('Feb',6000),
('Mar',5500),
('Apr',7000);
SELECT *,
-- 1 Row Number per Class
SELECT *,
ROW_NUMBER() OVER(PARTITION BY class ORDER BY marks DESC) AS rownum
FROM students1;

-- 2 Rank With Gaps
SELECT *,
RANK() OVER(PARTITION BY class ORDER BY marks DESC) AS rank_no
FROM students1;
-- 3Rank Without Gaps
SELECT id,class,name,marks,
DENSE_RANK() OVER(PARTITION BY class ORDER BY marks DESC) AS drank
FROM students1;
-- 4 Average marks of each class with every student
SELECT id,class,name,marks,
AVG(marks) OVER(PARTITION BY class) AS avg_marks
FROM students1;
-- 5 Highest marks in each class
SELECT id,class,name,marks,
MAX(marks) OVER(PARTITION BY class) AS highest_marks
FROM students1;

-- 6. Row numbers per subject
SELECT student,subject,score,
ROW_NUMBER() OVER(PARTITION BY subject ORDER BY score DESC) AS rownum
FROM exam1;

-- 7. Rank per subject (with gaps)
SELECT student,subject,score,
RANK() OVER(PARTITION BY subject ORDER BY score DESC) AS rankno
FROM exam1;
-- 8. Rank per subject (without gaps)
SELECT student,subject,score,
DENSE_RANK() OVER(PARTITION BY subject ORDER BY score DESC) AS drank
FROM exam1;
-- 9. Total students per subject
SELECT student,subject,score,
COUNT(*) OVER(PARTITION BY subject) AS total_students
FROM exam1;
-- 10. Minimum score per subject
SELECT student,subject,score,
MIN(score) OVER(PARTITION BY subject) AS min_score
FROM exam1;
-- 11. Row numbers employees per department
SELECT emp_name,department,salary,
ROW_NUMBER() OVER(PARTITION BY department ORDER BY salary DESC) AS rownum
FROM employees11;
-- 12. Rank employees per department
SELECT emp_name,department,salary,
RANK() OVER(PARTITION BY department ORDER BY salary DESC) AS rankno
FROM employees11;
-- 13. Rank employees without gaps
SELECT emp_name,department,salary,
DENSE_RANK() OVER(PARTITION BY department ORDER BY salary DESC) AS drank
FROM employees11;
-- 14. Total salary per department
SELECT emp_name,department,salary,
SUM(salary) OVER(PARTITION BY department) AS total_salary
FROM employees11;
-- 15. Average salary per department
SELECT emp_name,department,salary,
AVG(salary) OVER(PARTITION BY department) AS avg_salary
FROM employees11;
-- 16. Row numbers based on order date
SELECT order_id,order_date,amount,
ROW_NUMBER() OVER(ORDER BY order_date) AS rownum
FROM orders;
-- 17. Running total of orders
SELECT order_id,order_date,amount,
SUM(amount) OVER(ORDER BY order_date) AS running_total
FROM orders;
-- 18. Moving average last 2 orders
SELECT order_id,order_date,amount,
AVG(amount) OVER(ORDER BY order_date ROWS 1 PRECEDING) AS moving_avg
FROM orders;

-- 19. Maximum order till current row
SELECT order_id,order_date,amount,
MAX(amount) OVER(ORDER BY order_date) AS max_amount
FROM orders;

-- 20. Total number of orders
SELECT order_id,order_date,amount,
COUNT(*) OVER() AS total_orders
FROM orders;
-- 21. Row numbers by month
SELECT month,sales,
ROW_NUMBER() OVER(ORDER BY sales) AS rownum
FROM monthly_sales;
-- 22. Previous month sales
SELECT month,sales,
LAG(sales) OVER(ORDER BY sales) AS prev_sales
FROM monthly_sales;
-- 23. Next month sales
SELECT month,sales,
LEAD(sales) OVER(ORDER BY sales) AS next_sales
FROM monthly_sales;

-- 24. Difference from previous month
SELECT month,sales,
sales - LAG(sales) OVER(ORDER BY sales) AS difference
FROM monthly_sales;

--  25. Cumulative sales
SELECT month,sales,
SUM(sales) OVER(ORDER BY sales) AS cumulative_sales
FROM monthly_sales;










