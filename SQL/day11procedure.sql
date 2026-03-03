use slatask;
CREATE TABLE customer(
cid INT,
cname VARCHAR(50),
address VARCHAR(50),
mobile VARCHAR(15)
);
INSERT INTO customer VALUES
(1000,'Joseph','Delhi','9876543210');
DELIMITER //
CREATE PROCEDURE dispcust()
BEGIN
    SELECT * FROM customer;
END //
DELIMITER ;
DELIMITER //
CREATE PROCEDURE dispcust1(IN _cid INT)
BEGIN
    SELECT * FROM customer
    WHERE cid = _cid;
END //
DELIMITER ;
call dispcust1(1000);
DELIMITER //
CREATE PROCEDURE InsCustomer(cid INT,
cname VARCHAR(50),
address VARCHAR(50),
mobile VARCHAR(15)
) 
BEGIN
INSERT INTO customer VALUES(cid,cname,address, mobile);
END //
DELIMITER ;
CALL InsCustomer(1002,'Ravi','Chennai','9876543211');
select* from customer;
DESC customer;
ALTER TABLE customer
ADD PRIMARY KEY (cid);

DELIMITER //
CREATE PROCEDURE updCustomer(cid INT,
cname VARCHAR(50),
address VARCHAR(50),
mobile VARCHAR(15)
)
BEGIN
UPDATE customer
SET cname = cname,address = address,mobile = mobile
WHERE cid = cid; 
END //
DELIMITER ;
DROP PROCEDURE updcustomer;
DELIMITER //
CREATE PROCEDURE updcustomer(
IN _cid INT,
IN _cname VARCHAR(50),
IN _address VARCHAR(50),
IN _mobile VARCHAR(15)
)
BEGIN
UPDATE customer
SET cname = _cname,
    address = _address,
    mobile = _mobile
WHERE cid = _cid;
END //
DELIMITER ;
CALL updcustomer(1002,'selva','Tenkasi','9395959036');
-- delete procedure 
DELIMITER //
CREATE PROCEDURE delcustomer(IN cid int)
BEGIN
delete from customer
where cid = cid ;
END //
DELIMITER ;

-- practice 
CREATE TABLE company(
cid int, cname VARCHAR(50),
Address VARCHAR(100), 
Mobile bigint, 
email VARCHAR(50),
uid VARCHAR(50),
pwd VARCHAR(50)
);
ALTER TABLE company
ADD PRIMARY KEY (cid);
DELIMITER //

CREATE PROCEDURE insCompany(
IN cid INT,
IN cname VARCHAR(50),
IN Address VARCHAR(100),
IN Mobile BIGINT,
IN email VARCHAR(50),
IN uid VARCHAR(50),
IN pwd VARCHAR(50)
)
BEGIN
INSERT INTO company
VALUES(cid,cname,Address,Mobile,email,uid,pwd);
END
 //DELIMITER ;
DROP PROCEDURE inscompany;
CALL insCompany(1,'ABC Ltd','Chennai',9876543210,'abc@gmail.com','abcuser','1234');
CALL insCompany(2,'HCL','Chennai',9876543210,'abc@gmail.com','abc125','pass123');
CALL insCompany(3,'zoho','Chennai',9876543210,'abc@gmail.com','abc125','pass123');
select * from company;
-- retrieve the data uid,pwd
DROP PROCEDURE IF EXISTS chklogin;
DELIMITER //
CREATE PROCEDURE chklogin(
IN puid VARCHAR(50),
IN ppwd VARCHAR(50)
)
BEGIN
SELECT COUNT(*) 
FROM company
WHERE uid = puid
AND pwd = ppwd;
END //
DELIMITER ;

CALL chklogin('abcuser','1234');

-- update 
DROP PROCEDURE IF EXISTS updCompany;
DELIMITER //
CREATE PROCEDURE updCompany(
IN pcid INT,
IN pcname VARCHAR(50),
IN pAddress VARCHAR(100),
IN pMobile BIGINT,
IN pemail VARCHAR(50),
IN puid VARCHAR(50),
IN ppwd VARCHAR(50)
)
BEGIN
UPDATE company
SET cname = pcname,
Address = pAddress,
Mobile = pMobile,
email = pemail,
uid = puid,
pwd = ppwd
WHERE cid = pcid;
END //
DELIMITER ;
CALL updCompany(1,'ABC Pvt Ltd','Salem',9999999999,'new@gmail.com','newuser','5678');
-- delete
DROP PROCEDURE IF EXISTS delCompany;
DELIMITER //
CREATE PROCEDURE delCompany(
IN pcid INT
)
BEGIN
DELETE FROM company
WHERE cid = pcid;
END //
DELIMITER ;
CALL delCompany(3);
-- Select the data using uid(Primary key)
DROP PROCEDURE IF EXISTS getLoginData;
DELIMITER //
CREATE PROCEDURE getLoginData(
IN pcid INT
)
BEGIN
SELECT uid,pwd
FROM company
WHERE cid = pcid;
END //
DELIMITER ;
CALL getLoginData(1);




