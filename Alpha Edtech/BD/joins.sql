SELECT 
	m.id,
	m.name,
	g.name
FROM movies as m
	INNER JOIN movie_genres ON m.id = movie_id
	INNER JOIN genres as g ON g.id = genre_id

SELECT 
	m.id,
	m.name,
	g.name
FROM movies as m
	INNER JOIN movie_genres ON m.id = movie_id
	INNER JOIN genres as g ON g.id = genre_id
WHERE g.name LIKE 'Comedy'

SELECT 
	m.id,
	m.name,
	g.name
FROM movies as m
	INNER JOIN movie_genres ON m.id = movie_id
	INNER JOIN genres as g ON g.id = genre_id
WHERE g.name NOT LIKE 'Comedy'




