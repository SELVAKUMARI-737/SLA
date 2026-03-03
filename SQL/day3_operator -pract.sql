			DAY 3 – SQL ASSIGNMENT 
 
All operators are applied

CREATE TABLE Student (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    marks INT,
    city VARCHAR(50)
);
INSERT INTO Student VALUES (1, 'Arun', 20, 85, 'Chennai');
INSERT INTO Student VALUES (2, 'Priya', 22, 90, 'Madurai');
INSERT INTO Student VALUES (3, 'Karthik', 19, 70, 'Trichy');
INSERT INTO Student VALUES (4, 'Divya', 21, 88, 'Chennai');
INSERT INTO Student VALUES (5, 'Rahul', 23, 60, 'Salem');

SELECT * from Student ;



-- Arithmetic operator 
SELECT marks + 5 AS bonus_marks FROM Student;
SELECT marks - 10 AS reduced_marks FROM Student;
SELECT marks * 2 AS double_marks FROM Student;
SELECT marks / 2 AS half_marks FROM Student;

Output:



-- comparison

SELECT * FROM Student WHERE marks = 90;
SELECT * FROM Student WHERE marks > 80;
SELECT * FROM Student WHERE marks < 80;
SELECT * FROM Student WHERE marks >= 85;
SELECT * FROM Student WHERE marks <= 70;
SELECT * FROM Student WHERE marks != 60;

Output: 













-- logical operator
SELECT * FROM Student WHERE age > 20 AND marks > 80;
SELECT * FROM Student WHERE city = 'Chennai' OR city = 'Madurai';
SELECT * FROM Student WHERE NOT city = 'Salem';

Ouptut:













-- between
SELECT * FROM Student WHERE marks BETWEEN 70 AND 90;
Output :







-- in
SELECT * FROM Student WHERE city IN ('Chennai', 'Madurai');

Ouput :









-- Like
SELECT * FROM Student WHERE name LIKE 'A%';

Output :
	




-- ISNull
SELECT * FROM Student WHERE marks IS NULL;
-- Assignment operator
UPDATE Student SET marks = 95 WHERE id = 1;

Output







