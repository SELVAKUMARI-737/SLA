USE slatask;

CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(50),
    City VARCHAR(50)
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50),
    Price DECIMAL(10,2)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    ProductID INT,
    OrderDate DATE,
    Quantity INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
-- INSERT DATA


INSERT INTO Customers VALUES
(1,'Alice','New York'),
(2,'Bob','London'),
(3,'Charlie','Paris'),
(4,'David','Berlin');

INSERT INTO Products VALUES
(101,'Laptop',1200.00),
(102,'Mouse',25.00),
(103,'Keyboard',50.00);

INSERT INTO Orders VALUES
(1,1,101,'2023-01-01',1),
(2,2,102,'2023-01-02',2),
(3,1,103,'2023-01-03',1),
(4,NULL,101,'2023-01-04',1);

-- CONSTRAINT (existing tables)
-- ADD UNIQUE constraint
ALTER TABLE Customers ADD CONSTRAINT uq_city UNIQUE(City);

-- DROP UNIQUE constraint
ALTER TABLE Customers DROP INDEX uq_city;

-- ADD composite PRIMARY KEY example
ALTER TABLE Orders DROP PRIMARY KEY;
ALTER TABLE Orders ADD PRIMARY KEY (OrderID, ProductID);

-- DROP composite PRIMARY KEY and restore
ALTER TABLE Orders DROP PRIMARY KEY;
ALTER TABLE Orders ADD PRIMARY KEY (OrderID);

-- ADD FOREIGN KEY manually
ALTER TABLE Orders
ADD CONSTRAINT fk_customer
FOREIGN KEY(CustomerID) REFERENCES Customers(CustomerID);

-- DROP FOREIGN KEY
ALTER TABLE Orders DROP FOREIGN KEY fk_customer;

-- JOIN PRACTICE
-- 1 CustomerName + OrderID for every order
SELECT Customers.CustomerName, Orders.OrderID
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;


-- 2 All customers + OrderID (include no orders)
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;

-- 3 All products + OrderID
SELECT Products.ProductName, Orders.OrderID
FROM Products
LEFT JOIN Orders
ON Products.ProductID = Orders.ProductID;

-- 4 CustomerName, ProductName, OrderDate
SELECT Customers.CustomerName, Products.ProductName, Orders.OrderDate
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID = Customers.CustomerID
INNER JOIN Products
ON Orders.ProductID = Products.ProductID;

-- 5 Customers who bought Laptop
SELECT DISTINCT Customers.CustomerName
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
JOIN Products ON Orders.ProductID = Products.ProductID
WHERE Products.ProductName='Laptop';


-- 6 Total amount spent by each customer
SELECT Customers.CustomerName,
SUM(Products.Price * Orders.Quantity) AS total_spent
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
JOIN Products ON Orders.ProductID = Products.ProductID
GROUP BY Customers.CustomerName;
-- 7 Orders without customer
SELECT * FROM Orders WHERE CustomerID IS NULL;
-- 8 Cartesian product
SELECT Customers.CustomerName, Products.ProductName
FROM Customers
CROSS JOIN Products;
-- 9 Self join (Manager example)
ALTER TABLE Customers ADD ManagerID INT;

SELECT C.CustomerName AS Customer,
M.CustomerName AS Manager
FROM Customers C
LEFT JOIN Customers M
ON C.ManagerID = M.CustomerID;

-- 10 New York customers ordered >1 quantity
SELECT Customers.CustomerName, Products.ProductName
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
JOIN Products ON Orders.ProductID = Products.ProductID
WHERE Customers.City='New York'
AND Orders.Quantity>1;

