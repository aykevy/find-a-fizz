BEGIN TRANSACTION;

INSERT INTO "beer_review"("user_id", "beer_id", "review", "rating")
VALUES(1, 1, 'This is pretty good.', 4), (1, 2, 'This is also pretty good.', 5),
(2, 1, 'As the owner of this site, this is decent at best.', 3), (2, 2, 'This is okay.', 5);


INSERT INTO "brewery_review"("user_id", "brewery_id", "review", "rating")
VALUES(1, 1, 'This place is pretty good.', 4), (1, 2, 'This place is awesome.', 5), (2, 1, 'As the owner of this site, this place is decent at best.', 3), (2, 2, 'This is okay.', 5);

END TRANSACTION;