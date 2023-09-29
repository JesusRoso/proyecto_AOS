toc.dat                                                                                             0000600 0004000 0002000 00000005133 14505631314 0014443 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP       0                    {            heroe_bd    13.4    13.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         �           1262    17096    heroe_bd    DATABASE     g   CREATE DATABASE heroe_bd WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE heroe_bd;
                postgres    false         �            1259    17097    heroe    TABLE     �   CREATE TABLE public.heroe (
    id_hero integer NOT NULL,
    nombre character varying(50) NOT NULL,
    alter_ego character varying(50) NOT NULL
);
    DROP TABLE public.heroe;
       public         heap    postgres    false         �            1259    17102    heroe_id_hero_seq    SEQUENCE     �   CREATE SEQUENCE public.heroe_id_hero_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.heroe_id_hero_seq;
       public          postgres    false    200         �           0    0    heroe_id_hero_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.heroe_id_hero_seq OWNED BY public.heroe.id_hero;
          public          postgres    false    201         "           2604    17104    heroe id_hero    DEFAULT     n   ALTER TABLE ONLY public.heroe ALTER COLUMN id_hero SET DEFAULT nextval('public.heroe_id_hero_seq'::regclass);
 <   ALTER TABLE public.heroe ALTER COLUMN id_hero DROP DEFAULT;
       public          postgres    false    201    200         �          0    17097    heroe 
   TABLE DATA           ;   COPY public.heroe (id_hero, nombre, alter_ego) FROM stdin;
    public          postgres    false    200       2983.dat �           0    0    heroe_id_hero_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.heroe_id_hero_seq', 1, true);
          public          postgres    false    201         $           2606    17106    heroe heroe_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.heroe
    ADD CONSTRAINT heroe_pkey PRIMARY KEY (id_hero);
 :   ALTER TABLE ONLY public.heroe DROP CONSTRAINT heroe_pkey;
       public            postgres    false    200                                                                                                                                                                                                                                                                                                                                                                                                                                             2983.dat                                                                                            0000600 0004000 0002000 00000000111 14505631314 0014252 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        2	Bruno Díaz	Batman
3	Peter Parker	Spiderman
1	Clark Kent	Superman
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                       restore.sql                                                                                         0000600 0004000 0002000 00000005304 14505631314 0015370 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE heroe_bd;
--
-- Name: heroe_bd; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE heroe_bd WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Colombia.1252';


ALTER DATABASE heroe_bd OWNER TO postgres;

\connect heroe_bd

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: heroe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.heroe (
    id_hero integer NOT NULL,
    nombre character varying(50) NOT NULL,
    alter_ego character varying(50) NOT NULL
);


ALTER TABLE public.heroe OWNER TO postgres;

--
-- Name: heroe_id_hero_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.heroe_id_hero_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.heroe_id_hero_seq OWNER TO postgres;

--
-- Name: heroe_id_hero_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.heroe_id_hero_seq OWNED BY public.heroe.id_hero;


--
-- Name: heroe id_hero; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.heroe ALTER COLUMN id_hero SET DEFAULT nextval('public.heroe_id_hero_seq'::regclass);


--
-- Data for Name: heroe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.heroe (id_hero, nombre, alter_ego) FROM stdin;
\.
COPY public.heroe (id_hero, nombre, alter_ego) FROM '$$PATH$$/2983.dat';

--
-- Name: heroe_id_hero_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.heroe_id_hero_seq', 1, true);


--
-- Name: heroe heroe_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.heroe
    ADD CONSTRAINT heroe_pkey PRIMARY KEY (id_hero);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            