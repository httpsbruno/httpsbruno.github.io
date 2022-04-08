CREATE TABLE usuarios (
	"id" serial NOT NULL,
	"username" varchar(100) NOT NULL,
	"email" varchar(30) NOT NULL UNIQUE,
	"password" varchar(30) NOT NULL,
	CONSTRAINT "usuario_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

INSERT INTO usuarios(username, email, password)
	VALUES ('Bruno', 'bruno@gmail.com','123456'),
		   ('Julio', 'julio@gmail.com','123456')

Select * from usuarios

TRUNCATE TABLE usuarios

DROP TABLE usuarios