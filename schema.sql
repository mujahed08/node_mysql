CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255),
    product_code VARCHAR(50),
    quantity INT,
    unit_price DECIMAL(10, 2),
    apply_discount BOOLEAN,
    packing VARCHAR(100)
);