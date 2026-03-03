USE slatask;
CREATE TABLE students (
    id INT PRIMARY KEY,
    class VARCHAR(10),
    name VARCHAR(50),
    marks INT
);
INSERT INTO students VALUES
(1,'A','Arun',85),
(2,'A','Bala',78),
(3,'A','Charan',92),
(4,'A','Divya',85),
(5,'B','Esha',88),
(6,'B','Farhan',75),
(7,'B','Gopi',90),
(8,'B','Hari',88),
(9,'C','Indhu',70),
(10,'C','John',95);
select * from students ;
-- Not null constraint 
CREATE TABLE student_notnull(
id INT,
name VARCHAR(50) NOT NULL,
marks INT
);
INSERT INTO student_notnull VALUES(1,NULL,80);
-- UNIQUE Constraint
CREATE TABLE student_unique(
id INT,
email VARCHAR(50) UNIQUE,
marks INT
);
INSERT INTO student_unique VALUES(1,'a@gmail.com',80);
INSERT INTO student_unique VALUES(2,'a@gmail.com',90);
-- CHECK Constraint
CREATE TABLE student_check(
id INT,
name VARCHAR(50),
marks INT CHECK(marks >= 0 AND marks <= 100)
);


INSERT INTO student_check VALUES(1,'Arun',90);
INSERT INTO student_check VALUES(2,'Bala',150);
-- DEFAULT Constraint
CREATE TABLE student_default(
id INT,
name VARCHAR(50),
city VARCHAR(20) DEFAULT 'Chennai'
);
INSERT INTO student_default(id,name)
VALUES(1,'Arun');