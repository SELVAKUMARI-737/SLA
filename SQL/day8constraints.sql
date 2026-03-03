USE slatask;
DROP TABLE customer_sp;
CREATE TABLE customer_sp(
cid INT PRIMARY KEY,
firstname VARCHAR(30),
lastname VARCHAR(30),
city VARCHAR(30),
phone BIGINT,
email VARCHAR(50),
regdate DATE,
address VARCHAR(100)
);
INSERT INTO customer_sp VALUES
(1,'Arun','Kumar','Chennai',9876543210,'arun@gmail.com','2024-01-10','Anna Nagar'),
(2,'Bala','Raj','Trichy',9876543211,'bala@gmail.com','2024-02-15','KK Nagar'),
(3,'Charan','Das','Chennai',9876543212,NULL,'2024-03-20','T Nagar'),
(4,'Divya','Sri','Madurai',9876543213,'divya@gmail.com','2024-04-10','Anna Nagar'),
(5,'Esha','Rani','Trichy',9876543214,NULL,'2024-05-12','Main Road');

SELECT * FROM customer_sp;
-- 1 Add New Customer
DELIMITER //

CREATE PROCEDURE add_customer(
p_id INT,
p_fname VARCHAR(30),
p_lname VARCHAR(30),
p_city VARCHAR(30),
p_phone BIGINT,
p_email VARCHAR(50),
p_date DATE,
p_address VARCHAR(100)
)
BEGIN
INSERT INTO customer_sp VALUES
(p_id,p_fname,p_lname,p_city,p_phone,p_email,p_date,p_address);
END //

DELIMITER ;

CALL add_customer(6,'Hari','Kumar','Chennai',9876543215,'hari@gmail.com','2024-06-01','Velachery');


-- 2 Get Customer by ID
DELIMITER //

CREATE PROCEDURE get_customer(
p_id INT
)
BEGIN
SELECT * FROM customer_sp
WHERE cid=p_id;
END //

DELIMITER ;

CALL get_customer(1);


-- 3 Update Email and Phone
DELIMITER //

CREATE PROCEDURE update_contact(
p_id INT,
p_phone BIGINT,
p_email VARCHAR(50)
)
BEGIN
UPDATE customer_sp
SET phone=p_phone,
email=p_email
WHERE cid=p_id;
END //

DELIMITER ;

CALL update_contact(2,9999999999,'new@gmail.com');


-- 4 Customers From Specific City
DELIMITER //

CREATE PROCEDURE city_customers(
p_city VARCHAR(30)
)
BEGIN
SELECT * FROM customer_sp
WHERE city=p_city;
END //

DELIMITER ;

CALL city_customers('Chennai');


-- 5 Delete Customer
DELIMITER //

CREATE PROCEDURE delete_customer(
p_id INT
)
BEGIN
DELETE FROM customer_sp
WHERE cid=p_id;
END //

DELIMITER ;

CALL delete_customer(6);


-- 6 Customers Between Dates
DELIMITER //

CREATE PROCEDURE date_range(
p_start DATE,
p_end DATE
)
BEGIN
SELECT * FROM customer_sp
WHERE regdate BETWEEN p_start AND p_end;
END //

DELIMITER ;

CALL date_range('2024-01-01','2024-04-01');


-- 7 Search Customer Name
DELIMITER //

CREATE PROCEDURE search_customer(
p_name VARCHAR(30)
)
BEGIN
SELECT * FROM customer_sp
WHERE firstname LIKE CONCAT('%',p_name,'%')
OR lastname LIKE CONCAT('%',p_name,'%');
END //

DELIMITER ;

CALL search_customer('Ar');


-- 8 Update Address
DELIMITER //

CREATE PROCEDURE update_address(
p_id INT,
p_address VARCHAR(100)
)
BEGIN
UPDATE customer_sp
SET address=p_address
WHERE cid=p_id;
END //

DELIMITER ;

CALL update_address(3,'New Street');


-- 9 Total Customers
DELIMITER //

CREATE PROCEDURE total_customers()
BEGIN
SELECT COUNT(*) AS total FROM customer_sp;
END //

DELIMITER ;

CALL total_customers();


-- 10 Customers Without Email
DELIMITER //

CREATE PROCEDURE no_email()
BEGIN
SELECT * FROM customer_sp
WHERE email IS NULL;
END //

DELIMITER ;

CALL no_email();
