CREATE VIEW view_active_users AS (
	SELECT
		id as id_user,
		username,
		email
	FROM users
	WHERE deleted_at IS NULL
	ORDER BY username
)

CREATE VIEW view_deleted_users AS (
	SELECT
		id as id_user,
		username,
		email
	FROM users
	WHERE deleted_at IS NOt NULL
	ORDER BY username
)
SELECT * FROM view_active_users
SELECT * FROM view_deleted_users
	