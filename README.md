# bond-collection


Please run the following SQL queries in database "bond".

```
CREATE TABLE "movie"(
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(120) NOT NULL,
"actor" VARCHAR(120) NOT NULL,
"date" INTEGER,
"runtime" INTEGER,
"image_path" VARCHAR(120)
);

CREATE TABLE "actor" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(1200) NOT NULL
);

INSERT INTO "movie" ("title", "actor_id", "date", "runtime", "image_path")
VALUES ('Dr. No', 1, 1962, 110, '/images/DrNo.jpg'),
('From Russia With Love', 1, 1963, 115, '/images/FromRussiaWithLove.jpg'),
('Goldfinger', 1, 1964, 110, '/images/Goldfinger.jpg'),
('Thunderball', 1, 1965, 130, '/images/Thunderball.jpg'),
('You Only Live Twice', 1, 1967, 117, '/images/YouOnlyLiveTwice.jpg'),
('On Her Majestys Secret Service', 2, 1969, 122, '/images/OnHerMajestysSS.jpg'),
('Diamonds Are Forver', 1, 1971, 120, '/images/DiamondsAreForever.jpg'),
('Live and Let Die', 3, 1973, 121, '/images/LiveLetDie.jpg'),
('The Man With the Golden Gun', 3, 1974, 125, '/images/ManWithTheGG.jpg'),
('The Spy Who Loved Me', 3, 1977, 125, '/images/SpyWhoLovedMe.jpg'),
('Moonraker', 3, 1979, 126, '/images/Moonraker.jpg'),
('For Your Eyes Only', 3, 1981, 127, '/images/ForYourEyesOnly.jpg'),
('Octopussy', 3, 1983, 131, '/images/Octopussy.jpg'),
('A View to a Kill', 3, 1985, 131, '/images/AViewToAKill.jpg'),
('The Living Daylights', 4, 1987, 130, '/images/LivingDaylights.jpg'),
('Licence to Kill', 4, 1989, 133, '/images/LicenceToKill.jpg'),
('GoldenEye', 5, 1995, 130, '/images/GoldenEye.jpg'),
('Tomorrow Never Dies', 5, 1997, 119, '/images/TomorrowNeverDies.jpg'),
('The World is Not Enough', 5, 1999, 128, '/images/TWINE.jpg'),
('Die Another Day', 5, 2002, 133, '/images/DieAnotherDay.jpg'),
('Casino Royale', 6, 2006, 144, '/images/CasinoRoyale.jpg'),
('Quantum of Solace', 6, 2008, 106, '/images/Quantum.jpg'),
('Skyfall', 6, 2012, 143, '/images/Skyfall.jpg'),
('Spectre', 6, 2015, 148, '/images/Spectre.jpg');

INSERT INTO "actor" ("name")
VALUES ('Sean Connery'),
('George Lazenby'),
('Roger Moore'),
('Timothy Dalton'),
('Pierce Brosnan'),
('Daniel Craig');
```