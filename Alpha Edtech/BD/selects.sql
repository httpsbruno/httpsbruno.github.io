SELECT 
	id as id_user,
	name,
	email
FROM users
WHERE deleted_at IS NULL

SELECT 
	id as id_user,
	name,
	email
FROM users
WHERE deleted_at IS NULL AND name LIKE 'Bruno'

SELECT * FROM movies WHERE duration BETWEEN 90 AND 150

SELECT * FROM movies WHERE id IN (SELECT movie_id from movie_genres)
SELECT * FROM movies WHERE id NOT IN (SELECT movie_id from movie_genres)


