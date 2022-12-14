BEGIN TRANSACTION;

DROP TABLE IF EXISTS users CASCADE;
DROP SEQUENCE IF EXISTS seq_user_id;
DROP TABLE IF EXISTS brewery CASCADE;
DROP TABLE IF EXISTS beer CASCADE;
DROP TABLE IF EXISTS brewery_review;
DROP TABLE IF EXISTS beer_review;
DROP TABLE IF EXISTS brewery_product;
DROP TABLE IF EXISTS ownership;
DROP TABLE IF EXISTS beer_favorite;
DROP TABLE IF EXISTS brewery_favorite;

CREATE SEQUENCE seq_user_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;

CREATE TABLE users (
	user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');

INSERT INTO users (username,password_hash,role) VALUES ('user3', 'test3', 'ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('user4', 'test4', 'ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('user5', 'test5', 'ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('user6', 'test6', 'ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('user7', 'test7', 'ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('user8', 'test8', 'ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('user9', 'test9', 'ROLE_USER');

INSERT INTO users (username,password_hash,role) VALUES ('user10', 'test10', 'ROLE_ADMIN');
INSERT INTO users (username,password_hash,role) VALUES ('user11', 'test11', 'ROLE_ADMIN');
INSERT INTO users (username,password_hash,role) VALUES ('user12', 'test12', 'ROLE_ADMIN');
INSERT INTO users (username,password_hash,role) VALUES ('user13', 'test13', 'ROLE_ADMIN');
INSERT INTO users (username,password_hash,role) VALUES ('user14', 'test14', 'ROLE_ADMIN');
INSERT INTO users (username,password_hash,role) VALUES ('user15', 'test15', 'ROLE_ADMIN');


CREATE TABLE IF NOT EXISTS brewery (
    id BIGSERIAL PRIMARY KEY,
    name character varying,
    brewery_type character varying,
    street character varying,
    city character varying,
    state character varying,
    postal_code character varying,
    website_url character varying,
    phone character varying,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    country character varying,
    longitude numeric,
    latitude numeric,
    address_2 character varying,
    address_3 character varying,
    county_province character varying,
    obdb_id character varying,
    tags text
);

CREATE TABLE IF NOT EXISTS beer (
    id BIGSERIAL PRIMARY KEY,
    name character varying,
    description character varying,
    image_url character varying,
    abv_percent numeric,
    type character varying
);

CREATE TABLE IF NOT EXISTS brewery_review (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGSERIAL,
    brewery_id BIGSERIAL,
    review character varying,
    rating integer,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE,
    CONSTRAINT FK_user FOREIGN KEY (user_id) REFERENCES users (user_id),
    CONSTRAINT FK_brewery FOREIGN KEY (brewery_id) REFERENCES brewery (id)
);

CREATE TABLE IF NOT EXISTS beer_review (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGSERIAL,
    beer_id BIGSERIAL,
    review character varying,
    rating integer,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE,
    CONSTRAINT FK_user FOREIGN KEY (user_id) REFERENCES users (user_id),
    CONSTRAINT FK_beer FOREIGN KEY (beer_id) REFERENCES beer (id)
);

CREATE TABLE IF NOT EXISTS brewery_product (
    id BIGSERIAL PRIMARY KEY,
    brewery_id BIGSERIAL,
    beer_id BIGSERIAL,
    CONSTRAINT FK_brewery FOREIGN KEY (brewery_id) REFERENCES brewery (id),
    CONSTRAINT FK_beer FOREIGN KEY (beer_id) REFERENCES beer (id)
);

CREATE TABLE IF NOT EXISTS ownership (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGSERIAL,
    brewery_id BIGSERIAL,
    CONSTRAINT FK_user FOREIGN KEY (user_id) REFERENCES users (user_id),
    CONSTRAINT FK_beer FOREIGN KEY (brewery_id) REFERENCES brewery (id)
);

CREATE TABLE IF NOT EXISTS beer_favorite (
     id BIGSERIAL PRIMARY KEY,
     user_id BIGSERIAL,
     beer_id BIGSERIAL,
     CONSTRAINT FK_user FOREIGN KEY (user_id) REFERENCES users (user_id),
     CONSTRAINT FK_beer FOREIGN KEY (beer_id) REFERENCES beer (id)
);

CREATE TABLE IF NOT EXISTS brewery_favorite (
     id BIGSERIAL PRIMARY KEY,
     user_id BIGSERIAL,
     brewery_id BIGSERIAL,
     CONSTRAINT FK_user FOREIGN KEY (user_id) REFERENCES users (user_id),
     CONSTRAINT FK_brewery FOREIGN KEY (brewery_id) REFERENCES brewery (id)
);

COMMIT TRANSACTION;