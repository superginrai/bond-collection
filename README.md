# bond-collection


Please create the following tables in database "bond".

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
"name" VARCHAR(120) NOT NULL
);

INSERT INTO "movie" ("name", "actor", "date", "runtime")
VALUES ('Dr. No', 'Sean Connery', 1962, 110),
('From Russia With Love', 'Sean Connery', 1963, 115),
('Goldfinger', 'Sean Connery', 1964, 110),
('Thunderball', 'Sean Connery', 1965, 130),
('You Only Live Twice', 'Sean Connery', 1967, 117),
('On Her Majestys Secret Service', 'George Lazenby', 1969, 122),
('Diamonds Are Forver', 'Sean Connery', 1971, 120),
('Live and Let Die', 'Roger Moore', 1973, 121),
('The Man With the Golden Gun', 'Roger Moore', 1974, 125),
('The Spy Who Loved Me', 'Roger Moore', 1977, 125),
('Moonraker', 'Roger Moore', 1979, 126),
('For Your Eyes Only', 'Roger Moore', 1981, 127),
('Octopussy', 'Roger Moore', 1983, 131),
('A View to a Kill', 'Roger Moore', 1985, 131),
('The Living Daylights', 'Timothy Dalton', 1987, 130),
('Licence to Kill', 'Timothy Dalton', 1989, 133),
('GoldenEye', 'Pierce Brosnan', 1995, 130),
('Tomorrow Never Dies', 'Pierce Brosnan', 1997, 119),
('The World is Not Enough', 'Pierce Brosnan', 1999, 128),
('Die Another Day', 'Pierce Brosnan', 2002, 133),
('Casino Royale', 'Daniel Craig', 2006, 144),
('Quantum of Solace', 'Daniel Craig', 2008, 106),
('Skyfall', 'Daniel Craig', 2012, 143),
('Spectre', 'Daniel Craig', 2015, 148);

INSERT INTO "actor" ("name")
VALUES ('Sean Connery'),
('George Lazenby'),
('Roger Moore'),
('Timothy Dalton'),
('Pierce Brosnan'),
('Daniel Craig');
```