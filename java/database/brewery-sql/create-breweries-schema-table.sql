CREATE SCHEMA IF NOT EXISTS breweries;
CREATE TABLE IF NOT EXISTS breweries (
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
