create TABLE restaurant(
    id SERIAL PRIMARY KEY,
    status VARCHAR(15),
    seats INT
);

create TABLE booking(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    phone INT
);

create TABLE tableAndBooking(
    idTable INT,
    idBooking INT,
    FOREIGN KEY (idTable) REFERENCES restaurant (id),
    FOREIGN KEY (idBooking) REFERENCES booking (id)
);