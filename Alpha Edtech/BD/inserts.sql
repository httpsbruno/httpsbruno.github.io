INSERT INTO 
	users(name, email, password)
VALUES 
	('Bruno', 'bruno@gmail.com', '123456'),
    ('Julio', 'julio@gmail.com', '123456')

SELECT * FROM users

INSERT INTO 
	movies(name, year, duration, sinopse, director, purchase_price, rent_price, rate)
VALUES 
	('Movie 1', 2022, 90, 'This is the sinopse from movie 1', 'Director X', 60, 10, 4.5),
    ('Movie 2', 2010, 120, 'This is the sinopse from movie 1', 'Director Y', 35, 8, 3.8),
	('Movie 3', 1999, 80, 'This is the sinopse from movie 3', 'Director z', 49.90, 9.99, 4.5)
SELECT * FROM movies

INSERT INTO genres(name) 
	VALUES('Action'),('Comedy'),('Drama')
	
SELECT * FROM genres

INSERT INTO movie_genres(movie_id,genre_id)
	VALUES (1,2),(2,2),(3,1)

SELECT * FROM movie_genres

