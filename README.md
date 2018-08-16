# bond-collection

"Bond.  James Bond."



Please run the following SQL queries in database "bond":


CREATE TABLE "actor" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(120) NOT NULL
);

INSERT INTO "actor" ("name")
VALUES ('Sean Connery'),
('George Lazenby'),
('Roger Moore'),
('Timothy Dalton'),
('Pierce Brosnan'),
('Daniel Craig'),
('Ally'),
('Kris'),
('Luke'),
('Idris Elba'),
('Charlize Theron'),
('Tom Hiddleston'),
('Emily Blunt'),
('Cillian Murphy'),
('Chadwick Boseman');				

CREATE TABLE "movie"(
"id" SERIAL PRIMARY KEY,
"title" VARCHAR(120) NOT NULL,
"actor_id" INT REFERENCES "actor" NOT NULL,
"date" INTEGER,
"runtime" INTEGER,
"image_path" VARCHAR(1200),
"favorite" BOOLEAN
);

INSERT INTO "movie" ("title", "actor_id", "date", "runtime", "image_path")
VALUES ('Dr. No', 1, 1962, 110, 'http://www.007.com/wp-content/uploads/2013/11/DrNoscaled.jpg'),
('From Russia With Love', 1, 1963, 115, 'http://www.007.com/wp-content/uploads/2013/11/FromRussiaWithLovescaled.jpg'),
('Goldfinger', 1, 1964, 110, 'http://www.007.com/wp-content/uploads/2013/11/Goldfingerscaled.jpg'),
('Thunderball', 1, 1965, 130, 'http://www.007.com/wp-content/uploads/2013/11/1Thunderballscaled.jpg'),
('You Only Live Twice', 1, 1967, 117, 'http://www.007.com/wp-content/uploads/2013/11/YouOnlyLiveTwicescaled.jpg'),
('On Her Majesty''s Secret Service', 2, 1969, 122, 'http://www.007.com/wp-content/uploads/2013/11/OnHerMajestysSSscaled.jpg'),
('Diamonds Are Forever', 1, 1971, 120, 'http://www.007.com/wp-content/uploads/2013/11/DiamondsAreForever.no_.borderscaled.jpg'),
('Live and Let Die', 3, 1973, 121, 'http://www.007.com/wp-content/uploads/2013/11/LiveLetDiescaled.jpg'),
('The Man With the Golden Gun', 3, 1974, 125, 'http://www.007.com/wp-content/uploads/2013/11/ManWithTheGGscaled.jpg'),
('The Spy Who Loved Me', 3, 1977, 125, 'http://www.007.com/wp-content/uploads/2013/11/SpyWhoLovedMescaled.jpg'),
('Moonraker', 3, 1979, 126, 'http://www.007.com/wp-content/uploads/2013/11/Moonrakerscaled.jpg'),
('For Your Eyes Only', 3, 1981, 127, 'http://www.007.com/wp-content/uploads/2013/11/ForYourEyesOnlyscaled.jpg'),
('Octopussy', 3, 1983, 131, 'http://www.007.com/wp-content/uploads/2013/11/Octopussyscaled.jpg'),
('A View to a Kill', 3, 1985, 131, 'http://www.007.com/wp-content/uploads/2013/11/AViewToAKillscaled.jpg'),
('The Living Daylights', 4, 1987, 130, 'http://www.007.com/wp-content/uploads/2013/11/LivingDaylightsscaled.jpg'),
('Licence to Kill', 4, 1989, 133, 'http://www.007.com/wp-content/uploads/2013/11/LicenseToKillscaled.jpg'),
('GoldenEye', 5, 1995, 130, 'http://www.007.com/wp-content/uploads/2013/11/GoldenEyescaled.jpg'),
('Tomorrow Never Dies', 5, 1997, 119, 'http://www.007.com/wp-content/uploads/2013/11/TomorrowNeverDiesscaled.jpg'),
('The World is Not Enough', 5, 1999, 128, 'http://www.007.com/wp-content/uploads/2013/11/TWINEscaled.jpg'),
('Die Another Day', 5, 2002, 133, 'http://www.007.com/wp-content/uploads/2013/11/DieAnotherDayscaled.jpg'),
('Casino Royale', 6, 2006, 144, 'http://www.007.com/wp-content/uploads/2013/11/CasinoRoyalescaled.jpg'),
('Quantum of Solace', 6, 2008, 106, 'http://www.007.com/wp-content/uploads/2013/11/2008_QOS_1sheetscaled.jpg'),
('Skyfall', 6, 2012, 143, 'http://www.007.com/wp-content/uploads/2013/11/Skyfall-SCALED.jpg'),
('Spectre', 6, 2015, 148, 'https://images-na.ssl-images-amazon.com/images/I/61hDTk8M6YL._SY679_.jpg'),
('Internet Favorite Stops Terrorist Plot', 10, 2019, 123, 'images/idris.jpg'),
('Atomic Brunette', 11, 2020, 123, '/images/charlize.jpg'),
('Pending Disney Acquisition', 12, 2021, 123, '/images/tom.png'),
('The Border Hitman', 13, 2022, 123, '/images/emily.jpg'),
('Never In A Million Years', 14, 2023, 123, '/images/cillian.jpg'),
('Pretty Much Already Was', 15, 2024, 123, '/images/chadwick.png'),
('Wait...This Isn''t Star Wars', 7, 2025, 123, '/images/ally.jpeg'),
('His Computer Sings Bullets', 8, 2026, 123, '/images/kris.jpeg'),
('The Taco Who Loved Me', 9, 2027, 123, '/images/luke.jpeg');
