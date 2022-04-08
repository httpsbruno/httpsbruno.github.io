
 CREATE TABLE users (
	"id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"password" varchar(30) NOT NULL,
	"admin" BOOLEAN NOT NULL DEFAULT 'false',
	"deleted_by" integer,
	"deleted_at" TIMESTAMP,
	"created_by" integer,
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"is_active" BOOLEAN NOT NULL DEFAULT 'true',
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE movies (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"year" numeric(4) NOT NULL,
	"duration" numeric(3) NOT NULL,
	"sinopse" varchar(5000) NOT NULL,
	"director" varchar(100) NOT NULL,
	"purchase_price" numeric NOT NULL,
	"rent_price" numeric NOT NULL,
	"rate" numeric(2,1),
	"is_active" BOOLEAN NOT NULL DEFAULT 'true',
	"deleted_by" integer,
	"deleted_at" TIMESTAMP,
	"created_by" integer,
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "movies_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE purchases (
	"user_id" integer NOT NULL,
	"movie_id" integer NOT NULL,
	"id" serial NOT NULL,
	"paid" serial NOT NULL,
	"payment_id" integer NOT NULL,
	"price" numeric NOT NULL,
	"deleted_by" integer,
	"deleted_at" TIMESTAMP,
	"created_by" integer,
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "purchases_pk" PRIMARY KEY ("user_id","movie_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE rents (
	"user_id" integer NOT NULL,
	"movie_id" integer NOT NULL,
	"id" serial NOT NULL,
	"start_date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"end_date" TIMESTAMP NOT NULL,
	"paid" BOOLEAN NOT NULL,
	"payment_id" integer NOT NULL,
	"price" numeric NOT NULL,
	"deleted_by" integer,
	"deleted_at" TIMESTAMP,
	"created_by" integer,
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "rents_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE avaliations (
	"user_id" integer NOT NULL,
	"movie_id" integer NOT NULL,
	"id" serial NOT NULL,
	"comment" varchar(255) NOT NULL,
	"rate" numeric(1) NOT NULL,
	CONSTRAINT "avaliations_pk" PRIMARY KEY ("user_id","movie_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE genres (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"created_by" integer,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"deleted_by" integer,
	"deleted_at" TIMESTAMP,
	CONSTRAINT "genres_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE movie_genres (
	"movie_id" integer NOT NULL,
	"genre_id" integer NOT NULL,
	"id" serial NOT NULL,
	CONSTRAINT "movie_genres_pk" PRIMARY KEY ("movie_id","genre_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE payment (
	"id" serial NOT NULL,
	"form_of_payment_id" integer NOT NULL,
	"deleted_at" TIMESTAMP,
	"deleted_by" integer,
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"created_by" integer,
	CONSTRAINT "payment_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE forms_of_paymemt (
	"id" serial NOT NULL,
	"type" varchar(100) NOT NULL,
	"deleted_by" integer,
	"deleted_at" TIMESTAMP,
	"created_by" integer,
	"created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "forms_of_paymemt_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("deleted_by") REFERENCES "users"("id");
ALTER TABLE "users" ADD CONSTRAINT "users_fk1" FOREIGN KEY ("created_by") REFERENCES "users"("id");

ALTER TABLE "movies" ADD CONSTRAINT "movies_fk0" FOREIGN KEY ("deleted_by") REFERENCES "users"("id");
ALTER TABLE "movies" ADD CONSTRAINT "movies_fk1" FOREIGN KEY ("created_by") REFERENCES "users"("id");

ALTER TABLE "purchases" ADD CONSTRAINT "purchases_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_fk1" FOREIGN KEY ("movie_id") REFERENCES "movies"("id");
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_fk2" FOREIGN KEY ("payment_id") REFERENCES "payment"("id");
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_fk3" FOREIGN KEY ("deleted_by") REFERENCES "users"("id");
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_fk4" FOREIGN KEY ("created_by") REFERENCES "users"("id");

ALTER TABLE "rents" ADD CONSTRAINT "rents_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "rents" ADD CONSTRAINT "rents_fk1" FOREIGN KEY ("movie_id") REFERENCES "movies"("id");
ALTER TABLE "rents" ADD CONSTRAINT "rents_fk2" FOREIGN KEY ("payment_id") REFERENCES "payment"("id");
ALTER TABLE "rents" ADD CONSTRAINT "rents_fk3" FOREIGN KEY ("deleted_by") REFERENCES "users"("id");
ALTER TABLE "rents" ADD CONSTRAINT "rents_fk4" FOREIGN KEY ("created_by") REFERENCES "users"("id");

ALTER TABLE "avaliations" ADD CONSTRAINT "avaliations_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "avaliations" ADD CONSTRAINT "avaliations_fk1" FOREIGN KEY ("movie_id") REFERENCES "movies"("id");

ALTER TABLE "genres" ADD CONSTRAINT "genres_fk0" FOREIGN KEY ("created_by") REFERENCES "users"("id");
ALTER TABLE "genres" ADD CONSTRAINT "genres_fk1" FOREIGN KEY ("deleted_by") REFERENCES "users"("id");

ALTER TABLE "movie_genres" ADD CONSTRAINT "movie_genres_fk0" FOREIGN KEY ("movie_id") REFERENCES "movies"("id");
ALTER TABLE "movie_genres" ADD CONSTRAINT "movie_genres_fk1" FOREIGN KEY ("genre_id") REFERENCES "genres"("id");

ALTER TABLE "payment" ADD CONSTRAINT "payment_fk0" FOREIGN KEY ("form_of_payment_id") REFERENCES "forms_of_paymemt"("id");
ALTER TABLE "payment" ADD CONSTRAINT "payment_fk1" FOREIGN KEY ("deleted_by") REFERENCES "users"("id");
ALTER TABLE "payment" ADD CONSTRAINT "payment_fk2" FOREIGN KEY ("created_by") REFERENCES "users"("id");

ALTER TABLE "forms_of_paymemt" ADD CONSTRAINT "forms_of_paymemt_fk0" FOREIGN KEY ("deleted_by") REFERENCES "users"("id");
ALTER TABLE "forms_of_paymemt" ADD CONSTRAINT "forms_of_paymemt_fk1" FOREIGN KEY ("created_by") REFERENCES "users"("id");