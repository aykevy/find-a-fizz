BEGIN TRANSACTION;

INSERT INTO "beer_review"("user_id", "beer_id", "review", "rating", "created_at")
VALUES
(3, 1, 'This is pretty good. Much different to what I am use to.', 4, '2022-11-15'),
(3, 3, 'Average drink for average people low key.', 3, '2022-11-15'),
(3, 5, 'Good drink, only drank this cause my dad recommended it.', 4, '2022-11-15'),
(3, 7, null, 5, '2022-11-15'),
(3, 9, 'Damn, I wish I can have this more often!', 5, '2022-11-15'),
(3, 12, 'I did not have the best experience with this drink.', 1, '2022-11-15'),

(4, 2, 'I drank this shit and got that glow up griz ya feel', 5, '2022-11-17'),
(4, 4, 'The drink is nice sheesh.', 5, '2022-11-17'),
(4, 6, 'Bro who even invented this.', 1, '2022-11-17'),
(4, 8, 'Thought this drink was aight.', 3, '2022-11-17'),
(4, 10, 'Nice drink, drank a lot this before eating that good fried chicken.', 5, '2022-11-17'),
(4, 11, 'I wish I can drink this more often.', 5, '2022-11-17'),

(5, 2, 'Drink feels nice and concise.', 5, '2022-11-18'),
(5, 4, 'Has its ups and downs here an there, but overall good.', 4, '2022-11-18'),
(5, 6, 'This is an acquired taste type of drink', 5, '2022-11-18'),
(5, 8, 'Thought this drink was aight.', 3, '2022-11-18'),
(5, 10, null, 5, '2022-11-18'),
(5, 11, 'Good drink for the winters', 5, '2022-11-18'),

(6, 1, 'Love this brand, goes great with KBBQ.', 5, '2022-11-20'),
(6, 3, 'The to-go drink when watching football.', 4, '2022-11-20'),
(6, 5, 'If you got wings, make sure to eat it with this drink.', 5, '2022-11-20'),
(6, 7, 'Good Good Good.', 5, '2022-11-20'),
(6, 9, 'My type of drink before Thanksgiving.', 5, '2022-11-20'),
(6, 12, 'Pretty good for a drink.', 5, '2022-11-20'),

(9, 2, 'Mmmmmmmmmmmmmmmmm', 5, '2022-11-21'),
(9, 4, 'Nahhhhhhhhh', 2, '2022-11-21'),
(9, 6, 'Oooookay nice one.', 5, '2022-11-21'),
(9, 8, 'Nope Nope Nope.', 1, '2022-11-21'),
(9, 10, 'I think it is an alright drink.', 2, '2022-11-21'),
(9, 11, 'Pretty good.', 5, '2022-11-21'),

(8, 1, 'Gotta get that ramen with this yessir.', 5, '2022-11-22'),
(8, 3, 'Basic drink AF.', 3, '2022-11-22'),
(8, 5, 'Where can I get this lol, tasted it at a party the other day.', 3, '2022-11-22'),
(8, 7, 'Who got this in their house?', 5, '2022-11-22'),
(8, 9, null, 4, '2022-11-22'),
(8, 12, null, 5, '2022-11-22'),

(7, 1, null, 3, '2022-11-23'),
(7, 3, null, 3, '2022-11-23'),
(7, 5, null, 3, '2022-11-23'),
(7, 7, null, 3, '2022-11-23'),
(7, 9, null, 3, '2022-11-23'),
(7, 12, null, 3, '2022-11-23');


INSERT INTO "brewery_review"("user_id", "brewery_id", "review", "rating", "created_at")
VALUES
(3, 1, 'Was a little busy at this place, but I enjoyed it.', 4, '2022-11-15'),
(3, 3, 'Nice place, has a bit of a cozy environment.', 4, '2022-11-15'),
(3, 5, 'They need some heaters in this place, but overall good place!', 4, '2022-11-15'),
(3, 7, null, 5, '2022-11-15'),
(3, 9, 'Went here to watch the football game, nice crowd.', 4, '2022-11-15'),
(3, 12, 'Sick place, sick people.', 5, '2022-11-15'),

(4, 2, 'Love the vibes of this place.', 5, '2022-11-17'),
(4, 4, 'Love this place, went with my girlfriend and had a great time.', 5, '2022-11-17'),
(4, 6, 'Good vibes with the boys.', 5, '2022-11-17'),
(4, 8, 'The manager was rude, do not go here.', 1, '2022-11-17'),
(4, 10, 'Good music in this place', 5, '2022-11-17'),
(4, 11, 'They got nice food at this place.', 5, '2022-11-17'),

(5, 2, 'Place has a nice and warm cozy environment to it.', 5, '2022-11-18'),
(5, 4, 'Has its ups and downs here and there, but overall nice place.', 4, '2022-11-18'),
(5, 6, 'This place has the best food.', 5, '2022-11-18'),
(5, 8, null, 3, '2022-11-18'),
(5, 10, null, 5, '2022-11-18'),
(5, 11, 'Sweet place.', 5, '2022-11-18'),

(6, 1, 'Love this place, me and the boys come here to watch the games on Sunday.', 5, '2022-11-20'),
(6, 3, 'Average place if you looking to meet good people.', 3, '2022-11-20'),
(6, 5, 'If you got wings, make sure to eat it with this drink.', 5, '2022-11-20'),
(6, 7, 'Good place, moms loves it here.', 5, '2022-11-20'),
(6, 9, 'My type of place to go to before the holidays.', 5, '2022-11-20'),
(6, 12, 'Pretty good place.', 5, '2022-11-20'),

(9, 2, 'Yessir, go here for happy hour.', 5, '2022-11-21'),
(9, 4, 'Not much food to offer low key.', 2, '2022-11-21'),
(9, 6, 'Not much to do around with the boys.', 2, '2022-11-21'),
(9, 8, 'Sick place, with sick people.', 5, '2022-11-21'),
(9, 10, 'Good place, good vibes.', 5, '2022-11-21'),
(9, 11, 'Pretty sick place man.', 5, '2022-11-21'),

(8, 1, 'Shout-out to the bartenders at this place, they the best.', 5, '2022-11-22'),
(8, 3, 'Basic drink AF.', 3, '2022-11-22'),
(8, 5, 'Who wanna go here with me?', 5, '2022-11-22'),
(8, 7, 'Who goes here, like really?', 1, '2022-11-22'),
(8, 9, null, 4, '2022-11-22'),
(8, 12, null, 5, '2022-11-22'),

(7, 1, null, 5, '2022-11-23'),
(7, 3, null, 4, '2022-11-23'),
(7, 5, null, 5, '2022-11-23'),
(7, 7, null, 4, '2022-11-23'),
(7, 9, null, 5, '2022-11-23'),
(7, 12, null, 4, '2022-11-23');


INSERT INTO "ownership"("user_id", "brewery_id")
VALUES
(10, 1),
(11, 2),
(12, 3),
(13, 4),
(14, 5),
(15, 6);

INSERT INTO "brewery_product"("brewery_id", "beer_id")
VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),

(2, 11),
(2, 12),
(2, 13),
(2, 14),
(2, 15),
(2, 16),
(2, 17),
(2, 18),
(2, 19),
(2, 20),

(3, 21),
(3, 22),
(3, 23),
(3, 24),
(3, 25),
(3, 26),
(3, 27),
(3, 28),
(3, 29),
(3, 30),

(4, 31),
(4, 32),
(4, 33),
(4, 34),
(4, 35),
(4, 36),
(4, 37),
(4, 38),
(4, 39),
(4, 40),

(5, 41),
(5, 42),
(5, 43),
(5, 44),
(5, 45),
(5, 46),
(5, 47),
(5, 48),
(5, 49),
(5, 50),

(6, 51),
(6, 52),
(6, 53),
(6, 54),
(6, 55),
(6, 56),
(6, 57),
(6, 58),
(6, 59),
(6, 60);

END TRANSACTION;