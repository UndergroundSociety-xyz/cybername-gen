"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastPart2 = exports.lastPart1 = exports.lastAfterConsonant = exports.consonants = exports.lastNames = void 0;
exports.lastNames = [
    "Charlesworth",
    "Ball",
    "Smith",
    "Johnson",
    "Sanderson",
    "White",
    "Smith",
    "Savage",
    "Waite",
    "Noble",
    "Mae",
    'Abbott',
    'Abney',
    'Abnett',
    'Acevedo',
    'Acosta',
    'Adams',
    'Adkins',
    'Adrichem',
    'Aguilar',
    'Aguirre',
    'Albert',
    'Alexander',
    'Alford',
    'Allen',
    'Allison',
    'Alston',
    'Alvarado',
    'Alvarez',
    'Anderson',
    'Andrews',
    'Anthony',
    'Appleton',
    'Appleby',
    'Armstrong',
    'Archibald',
    'Arnold',
    'Ashley',
    'Aston',
    'Ashworth',
    'Atkins',
    'Atkinson',
    'Austin',
    'Avery',
    'Avila',
    'Ayala',
    'Ayers',
    'Ayton',
    'Bailey',
    'Baird',
    'Baker',
    'Baldwin',
    'Ball',
    'Ballard',
    'Banks',
    'Barber',
    'Barker',
    'Barlow',
    'Barnes',
    'Barnett',
    'Barr',
    'Barrera',
    'Barrett',
    'Barron',
    'Barry',
    'Bartlett',
    'Barton',
    'Bass',
    'Bates',
    'Battle',
    'Bauer',
    'Baxter',
    'Bagshaw',
    'Backshawl',
    'Beach',
    'Bean',
    'Beard',
    'Beasley',
    'Beck',
    'Becker',
    'Bell',
    'Bender',
    'Benjamin',
    'Bennett',
    'Benson',
    'Bentley',
    'Benton',
    'Berg',
    'Berger',
    'Bernard',
    'Berry',
    'Best',
    'Bird',
    'Bishop',
    'Black',
    'Blackburn',
    'Blackwell',
    'Blair',
    'Blake',
    'Blanchard',
    'Blankenship',
    'Blevins',
    'Bolton',
    'Bond',
    'Bonner',
    'Booker',
    'Boone',
    'Booth',
    'Bowen',
    'Bowers',
    'Bowman',
    'Boyd',
    'Boyer',
    'Boyle',
    'Bradford',
    'Bradley',
    'Bradshaw',
    'Brady',
    'Branch',
    'Bray',
    'Brennan',
    'Brewer',
    'Bridges',
    'Briggs',
    'Bright',
    'Britt',
    'Brock',
    'Brooks',
    'Brown',
    'Browning',
    'Bruce',
    'Bryan',
    'Bryant',
    'Buchanan',
    'Buck',
    'Buckley',
    'Buckner',
    'Budd',
    'Bullock',
    'Burch',
    'Burgess',
    'Burke',
    'Burks',
    'Burnett',
    'Burns',
    'Burris',
    'Burt',
    'Burton',
    'Busto',
    'Bush',
    'Butler',
    'Byers',
    'Byrd',
    'Cabrera',
    'Cain',
    'Calderon',
    'Caldwell',
    'Calhoun',
    'Callahan',
    'Camacho',
    'Cameron',
    'Campbell',
    'Campos',
    'Cannon',
    'Cantrell',
    'Cantu',
    'Cardenas',
    'Carey',
    'Carlson',
    'Carlyle',
    'Carlisle',
    'Carney',
    'Carpenter',
    'Carr',
    'Caron',
    'Carrillo',
    'Carroll',
    'Carson',
    'Carter',
    'Carver',
    'Case',
    'Casey',
    'Cason',
    'Cash',
    'Castaneda',
    'Castillo',
    'Castro',
    'Cervantes',
    'Chambers',
    'Chan',
    'Chandler',
    'Chaney',
    'Chang',
    'Chapman',
    'Charles',
    'Chase',
    'Chatman',
    'Chavez',
    'Chen',
    'Cherry',
    'Chevrolet',
    'Christensen',
    'Christian',
    'Church',
    'Clark',
    'Clarke',
    'Clay',
    'Clayton',
    'Clements',
    'Clemons',
    'Cleveland',
    'Cline',
    'Cobb',
    'Cochran',
    'Coffey',
    'Cohen',
    'Cole',
    'Coleman',
    'Collier',
    'Collins',
    'Colon',
    'Combs',
    'Compton',
    'Conley',
    'Conner',
    'Conrad',
    'Contreras',
    'Conway',
    'Cook',
    'Cooke',
    'Cooley',
    'Cooper',
    'Copeland',
    'Cortez',
    'Cote',
    'Cotton',
    'Couture',
    'Cox',
    'Craft',
    'Craig',
    'Crane',
    'Crawford',
    'Crosby',
    'Cross',
    'Cruz',
    'Cummings',
    'Cunningham',
    'Curry',
    'Curtis',
    'Dale',
    'Dalton',
    'Daniel',
    'Daniels',
    'Daugherty',
    'Davenport',
    'David',
    'Davidson',
    'Davis',
    'Dawson',
    'Day',
    'Dean',
    'Decker',
    'Dejesus',
    'Delacruz',
    'Delaney',
    'Deleon',
    'Delgado',
    'Dennis',
    'Diaz',
    'Dickerson',
    'Dickson',
    'Dillard',
    'Dillon',
    'Dixon',
    'Dodson',
    'Dominguez',
    'Donaldson',
    'Donovan',
    'Dorsey',
    'Dotson',
    'Douglas',
    'Downs',
    'Doyle',
    'Drake',
    'Dudley',
    'Duffy',
    'Duke',
    'Duncan',
    'Dunlap',
    'Dunn',
    'Duran',
    'Durham',
    'Dyer',
    'Eaton',
    'Edwards',
    'Elliott',
    'Ellis',
    'Ellison',
    'Ellwood',
    'Emerson',
    'England',
    'English',
    'Erickson',
    'Espinoza',
    'Estes',
    'Estrada',
    'Evans',
    'Everett',
    'Ewing',
    'Farley',
    'Farmer',
    'Farrell',
    'Faulkner',
    'Ferguson',
    'Fernandez',
    'Ferrell',
    'Fields',
    'Figueroa',
    'Finch',
    'Finley',
    'Fischer',
    'Fisher',
    'Fitzgerald',
    'Fitzpatrick',
    'Fleming',
    'Fletcher',
    'Flores',
    'Flowers',
    'Floyd',
    'Flynn',
    'Foley',
    'Forbes',
    'Ford',
    'Foreman',
    'Foster',
    'Fowler',
    'Fox',
    'Francis',
    'Franco',
    'Frank',
    'Franklin',
    'Franks',
    'Frazier',
    'Frederick',
    'Freeman',
    'French',
    'Frost',
    'Fry',
    'Frye',
    'Fuentes',
    'Fuller',
    'Fulton',
    'Gaines',
    'Gallagher',
    'Gallegos',
    'Galloway',
    'Gamble',
    'Garcia',
    'Gardner',
    'Garner',
    'Garrett',
    'Garrison',
    'Garza',
    'Gates',
    'Gay',
    'Gentry',
    'George',
    'Gibbs',
    'Gibson',
    'Gilbert',
    'Giles',
    'Gill',
    'Gillespie',
    'Gilliam',
    'Gilmore',
    'Glass',
    'Glenn',
    'Glover',
    'Goff',
    'Golden',
    'Gomez',
    'Gonzales',
    'Gonzalez',
    'Good',
    'Goodman',
    'Goodwin',
    'Gordon',
    'Gould',
    'Graham',
    'Grant',
    'Graves',
    'Gray',
    'Green',
    'Greene',
    'Greer',
    'Gregory',
    'Griffin',
    'Griffith',
    'Grimes',
    'Gross',
    'Guerra',
    'Guerrero',
    'Guthrie',
    'Gutierrez',
    'Guy',
    'Guzman',
    'Hahn',
    'Hale',
    'Haley',
    'Hall',
    'Hamilton',
    'Hammond',
    'Hampton',
    'Hancock',
    'Haney',
    'Hansen',
    'Hanson',
    'Hardin',
    'Harding',
    'Hardy',
    'Harmon',
    'Harper',
    'Harrell',
    'Harrington',
    'Harris',
    'Harrison',
    'Hart',
    'Hartman',
    'Harvey',
    'Hatfield',
    'Hawkins',
    'Hayden',
    'Hayes',
    'Haynes',
    'Hays',
    'Head',
    'Heath',
    'Hebert',
    'Henderson',
    'Hendricks',
    'Hendrix',
    'Henry',
    'Hensley',
    'Henson',
    'Herman',
    'Hernandez',
    'Herrera',
    'Herring',
    'Hess',
    'Hester',
    'Hewitt',
    'Hickman',
    'Hicks',
    'Higgins',
    'Hill',
    'Hines',
    'Hinton',
    'Hobbs',
    'Hodge',
    'Hodges',
    'Hoffman',
    'Hogan',
    'Holcomb',
    'Holden',
    'Holder',
    'Holland',
    'Holloway',
    'Holman',
    'Holmes',
    'Holt',
    'Hood',
    'Hooper',
    'Hoover',
    'Hopkins',
    'Hopper',
    'Horn',
    'Horne',
    'Horton',
    'House',
    'Houston',
    'Howard',
    'Howe',
    'Howell',
    'Hubbard',
    'Huber',
    'Hudson',
    'Huff',
    'Huffman',
    'Hughes',
    'Hull',
    'Humphrey',
    'Hunt',
    'Hunter',
    'Hurley',
    'Hurst',
    'Hutchinson',
    'Hyde',
    'Ingram',
    'Irwin',
    'Jackson',
    'Jacobs',
    'Jacobson',
    'James',
    'Jarvis',
    'Jefferson',
    'Jenkins',
    'Jennings',
    'Jensen',
    'Jimenez',
    'Johns',
    'Johnson',
    'Johnston',
    'Jones',
    'Jordan',
    'Joseph',
    'Joyce',
    'Joyner',
    'Juarez',
    'Justice',
    'Kane',
    'Kaufman',
    'Keith',
    'Keller',
    'Kelley',
    'Kelly',
    'Kemp',
    'Kennedy',
    'Kent',
    'Kerr',
    'Key',
    'Kidd',
    'Kim',
    'King',
    'Kinney',
    'Kirby',
    'Kirk',
    'Kirkland',
    'Klein',
    'Kline',
    'Knapp',
    'Knight',
    'Knowles',
    'Knox',
    'Koch',
    'Kramer',
    'Lamb',
    'Lambert',
    'Lancaster',
    'Landry',
    'Lane',
    'Lang',
    'Langley',
    'Lara',
    'Larsen',
    'Larson',
    'Lawrence',
    'Lawson',
    'Le',
    'Leach',
    'Leblanc',
    'Lee',
    'Leon',
    'Leonard',
    'Lester',
    'Levine',
    'Levy',
    'Lewis',
    'Lindsay',
    'Lindsey',
    'Little',
    'Livingston',
    'Lloyd',
    'Logan',
    'Long',
    'Lopez',
    'Lott',
    'Love',
    'Lowe',
    'Lofthouse',
    'Lowery',
    'Lucas',
    'Luna',
    'Lynch',
    'Lynn',
    'Lyons',
    'Macdonald',
    'Macias',
    'Mack',
    'Madden',
    'Maddox',
    'Maldonado',
    'Malone',
    'Mann',
    'Manning',
    'Marks',
    'Marquez',
    'Marsh',
    'Marshall',
    'Martin',
    'Martinez',
    'Mason',
    'Massey',
    'Mathews',
    'Mathis',
    'Matthews',
    'Maxwell',
    'May',
    'Mayer',
    'Maynard',
    'Mayo',
    'Mays',
    'Magdalen',
    'Magdalin',
    'Mcbride',
    'Mccall',
    'Mccarthy',
    'Mccarty',
    'Mcclain',
    'Mcclure',
    'Mcconnell',
    'Mccormick',
    'Mccoy',
    'Mccray',
    'Mccullough',
    'Mcdaniel',
    'Mcdonald',
    'Mcdowell',
    'Mcfadden',
    'Mcfarland',
    'Mcgee',
    'Mcgowan',
    'Mcguire',
    'Mcintosh',
    'Mcintyre',
    'Mckay',
    'Mckee',
    'Mckenzie',
    'Mckinney',
    'Mcknight',
    'Mclaughlin',
    'Mclean',
    'Mcleod',
    'Mcmahon',
    'Mcmillan',
    'Mcneil',
    'Mcpherson',
    'Meadows',
    'Medina',
    'Mejia',
    'Melendez',
    'Melton',
    'Mendez',
    'Mendoza',
    'Mercado',
    'Mercer',
    'Merrill',
    'Merritt',
    'Meyer',
    'Meyers',
    'Michael',
    'Middleton',
    'Miles',
    'Miller',
    'Mills',
    'Miranda',
    'Mitchell',
    'Molina',
    'Monroe',
    'Montgomery',
    'Montoya',
    'Moody',
    'Moon',
    'Mooney',
    'Moore',
    'Morales',
    'Moran',
    'Moreno',
    'Morgan',
    'Morin',
    'Morris',
    'Morrison',
    'Morrow',
    'Morse',
    'Morton',
    'Moses',
    'Mosley',
    'Moss',
    'Mueller',
    'Mullen',
    'Mullins',
    'Munoz',
    'Murphy',
    'Murray',
    'Myers',
    'Nash',
    'Navarro',
    'Naylor',
    'Neal',
    'Nelson',
    'Newman',
    'Newton',
    'Nevin',
    'Nguyen',
    'Nichols',
    'Nicholson',
    'Nielsen',
    'Nieves',
    'Nixon',
    'Noble',
    'Noel',
    'Nolan',
    'Norman',
    'Norris',
    'Norton',
    'Nunez',
    'Obrien',
    'Ochoa',
    'Oconnor',
    'Odom',
    'Odonnell',
    'Oliver',
    'Olsen',
    'Olson',
    'Oluo',
    'Oneal',
    'Oneil',
    'Oneill',
    'Orr',
    'Ortega',
    'Ortiz',
    'Osborn',
    'Osborne',
    'Owen',
    'Owens',
    'Pace',
    'Pacheco',
    'Padilla',
    'Page',
    'Palmer',
    'Park',
    'Parker',
    'Parks',
    'Parkinson',
    'Parrish',
    'Parsons',
    'Pate',
    'Patel',
    'Patrick',
    'Patterson',
    'Patton',
    'Paul',
    'Payne',
    'Pearson',
    'Peck',
    'Pena',
    'Pennington',
    'Perez',
    'Perkins',
    'Perry',
    'Peters',
    'Petersen',
    'Peterson',
    'Petty',
    'Phelps',
    'Phillips',
    'Pickett',
    'Pierce',
    'Pittman',
    'Pitts',
    'Pollard',
    'Poole',
    'Pope',
    'Porter',
    'Potter',
    'Potts',
    'Powell',
    'Powers',
    'Pratt',
    'Preston',
    'Price',
    'Prince',
    'Pruitt',
    'Puckett',
    'Pugh',
    'Quinn',
    'Ramirez',
    'Ramos',
    'Ramsey',
    'Randall',
    'Randolph',
    'Rasmussen',
    'Ratliff',
    'Ratly',
    'Ratkinson',
    'Ray',
    'Raymond',
    'Reed',
    'Reese',
    'Reeves',
    'Reid',
    'Reilly',
    'Reyes',
    'Reynolds',
    'Rhodes',
    'Rice',
    'Rich',
    'Richard',
    'Richards',
    'Richardson',
    'Richmond',
    'Riddle',
    'Riggs',
    'Riley',
    'Rios',
    'Rivas',
    'Rivera',
    'Rivers',
    'Roach',
    'Robbins',
    'Roberson',
    'Roberts',
    'Robertson',
    'Robinson',
    'Robles',
    'Rocha',
    'Rodgers',
    'Rodriguez',
    'Rodriquez',
    'Rogers',
    'Rojas',
    'Rollins',
    'Roman',
    'Romero',
    'Rosa',
    'Rosales',
    'Rosario',
    'Rose',
    'Ross',
    'Roth',
    'Rowe',
    'Rowland',
    'Roy',
    'Ruiz',
    'Rush',
    'Russell',
    'Russo',
    'Rutledge',
    'Ryan',
    'Salas',
    'Salazar',
    'Salinas',
    'Sampson',
    'Sanchez',
    'Sanders',
    'Sandoval',
    'Sanford',
    'Santana',
    'Santiago',
    'Santos',
    'Sargent',
    'Saunders',
    'Savage',
    'Sawyer',
    'Schmidt',
    'Schneider',
    'Schroeder',
    'Schultz',
    'Schwartz',
    'Scott',
    'Sears',
    'Sellers',
    'Serrano',
    'Sethin',
    'Sexton',
    'Shaffer',
    'Shannon',
    'Sharp',
    'Sharpe',
    'Shaw',
    'Shelton',
    'Shepard',
    'Shepherd',
    'Sheppard',
    'Sherman',
    'Shields',
    'Short',
    'Silva',
    'Simmons',
    'Simon',
    'Simpson',
    'Sims',
    'Singleton',
    'Skinner',
    'Slater',
    'Sloan',
    'Small',
    'Smith',
    'Snider',
    'Snow',
    'Snyder',
    'Solis',
    'Solomon',
    'Sosa',
    'Soto',
    'Sparks',
    'Spears',
    'Spence',
    'Spencer',
    'Stafford',
    'Stanley',
    'Stanton',
    'Standish',
    'Stark',
    'Steele',
    'Stein',
    'Stephens',
    'Stephenson',
    'Stevens',
    'Stevenson',
    'Stewart',
    'Stokes',
    'Stone',
    'Stout',
    'Strickland',
    'Strong',
    'Stuart',
    'Suarez',
    'Sullivan',
    'Summers',
    'Sutton',
    'Swanson',
    'Sweeney',
    'Sweet',
    'Sykes',
    'Talley',
    'Tanner',
    'Tate',
    'Taylor',
    'Terrell',
    'Terry',
    'Thomas',
    'Thompson',
    'Thornton',
    'Tillman',
    'Todd',
    'Torres',
    'Townsend',
    'Tran',
    'Travis',
    'Trevino',
    'Trujillo',
    'Tucker',
    'Turner',
    'Tyler',
    'Tyson',
    'Underwood',
    'Valdez',
    'Valencia',
    'Valentine',
    'Valenzuela',
    'Vance',
    'Vang',
    'Vargas',
    'Vasquez',
    'Vaughan',
    'Vaughn',
    'Vazquez',
    'Vega',
    'Velasquez',
    'Velazquez',
    'Velez',
    'Villarreal',
    'Vincent',
    'Vinson',
    'Wade',
    'Wagner',
    'Walker',
    'Wall',
    'Wallace',
    'Waller',
    'Walls',
    'Walsh',
    'Walter',
    'Walters',
    'Walton',
    'Ward',
    'Ware',
    'Warner',
    'Warren',
    'Washington',
    'Waters',
    'Watkins',
    'Watson',
    'Watts',
    'Weaver',
    'Webb',
    'Weber',
    'Webster',
    'Weeks',
    'Weiss',
    'Welch',
    'Wells',
    'West',
    'Wheeler',
    'Whitaker',
    'White',
    'Whitehead',
    'Whitfield',
    'Whitley',
    'Whitney',
    'Wiggins',
    'Wilcox',
    'Wilder',
    'Wiley',
    'Wilkerson',
    'Wilkins',
    'Wilkinson',
    'William',
    'Williams',
    'Williamson',
    'Willis',
    'Wilson',
    'Winters',
    'Wise',
    'Witt',
    'Wolf',
    'Wolfe',
    'Wong',
    'Wood',
    'Woodard',
    'Woods',
    'Woodward',
    'Woodhouse',
    'Woodly',
    'Wooten',
    'Wooton',
    'Workman',
    'Wright',
    'Wyatt',
    'Wynn',
    'Wutang',
    'Yang',
    'Yates',
    'Yarrow',
    'Yarr',
    'Yarbrough',
    'York',
    'Young',
    'Xanders',
    'Xanthos',
    'Xenakis',
    'Xing',
    'Xian',
    'Xavier',
    'Xue',
    'Zamora',
    'Zimmerman',
    "Pro",
    "Autodatter",
    "Autoson",
    "Abend",
    "Adleman",
    "Amdahl",
    "Angstrom",
    "Ajaxman",
    "Apoc",
    "Babbage",
    "Bacon",
    "Baconsmith",
    "Band",
    "Bayes",
    "Batty",
    "Batunas",
    "Baxter",
    "Berkeley",
    "Beers",
    "Bezier",
    "Black",
    "Block",
    "Blockchains",
    "Blue",
    "Bits",
    "Bochs",
    "Boon",
    "Boomsmith",
    "Boomboom",
    "Bombom",
    "Bogey",
    "Bogie",
    "Bogieface",
    "Bohr",
    "Bolt",
    "Boltfetcher",
    "Boltmason",
    "Bolten",
    "Booth",
    "Borg",
    "Bounce",
    "Bourne",
    "Bracket",
    "Buff",
    "Buffer",
    "Bufferson",
    "Buffers",
    "Cable",
    "Cabledatter",
    "Cabler",
    "Cambridge",
    "Carbon",
    "Carrier",
    "Carmack",
    "Chiller",
    "Chenguang",
    "Choke",
    "Circuit",
    "Circuitsmith",
    "Circuitmacer",
    "Click",
    "Clicksmith",
    "Clicker",
    "Clickoff",
    "Cluster",
    "Clusterson",
    "Clusterface",
    "Cobalt",
    "Codd",
    "Coil",
    "Coilson",
    "Coleman",
    "Copper",
    "Copperface",
    "Core",
    "Crosswalks",
    "Curie",
    "Current",
    "Cuifen",
    "Cybers",
    "Cyberson",
    "Cyberface",
    "Cyberdatter",
    "Cybermancer",
    "Cypher",
    "Datas",
    "Datason",
    "Datamason",
    "Datamancer",
    "Datasmith",
    "Daiquiri",
    "Deadmouse",
    "Deadman",
    "Deckard",
    "Disk",
    "Diskdatter",
    "Diskson",
    "Discsmith",
    "Dolby",
    "Dongle",
    "Dondongle",
    "Dongleface",
    "Dongleson",
    "Donglefetcher",
    "Donglecarrier",
    "Donglemancer",
    "Drive",
    "Driver",
    "Dvorak",
    "Ellsworth",
    "Edison",
    "Eight",
    "Eleven",
    "Eleventy",
    "Erlang",
    "Farad",
    "Faraday",
    "Fiber",
    "Fiberson",
    "Fiberman",
    "Fiberfetcher",
    "Fibersmith",
    "Fibermason",
    "Fibermancer",
    "Five",
    "Four",
    "Foster",
    "Frequenza",
    "Futzing",
    "Gate",
    "Gategate",
    "Gates",
    "Gater",
    "Gold",
    "Goldsmith",
    "Granville",
    "Gray",
    "Green",
    "Gilberts",
    "Gitson",
    "Gitdatter",
    "Glitter",
    "Harakiri",
    "Hardman",
    "Hertz",
    "Hopper",
    "Hobbs",
    "Hobbins",
    "Iron",
    "Irons",
    "Jennings",
    "Joule",
    "Joulesmith",
    "Jouleson",
    "Jouleton",
    "Jool",
    "Kato",
    "Kelvin",
    "Kernel",
    "Key",
    "Kiri",
    "Kowasaki",
    "Kobayashi",
    "Kilby",
    "Kingston",
    "Kuwata",
    "Ladlad",
    "Lamarr",
    "Laser",
    "Laserface",
    "Lasersmith",
    "Lasermason",
    "Lasermancer",
    "Le",
    "Lee",
    "Letterhead",
    "Li",
    "Link",
    "Linksen",
    "Linkinson",
    "Linkmason",
    "Legacy",
    "Lichtermann",
    "Loader",
    "Loadbolt",
    "Logic",
    "Logicson",
    "Login",
    "Loop",
    "Lovelace",
    "Master",
    "Macarena",
    "McNulty",
    "Mech",
    "Mechsmith",
    "Mechanick",
    "Meier",
    "Metal",
    "Metall",
    "Metalic",
    "Metalik",
    "Metalmann",
    "Metalson",
    "Metalski",
    "Mezzanine",
    "Minimak",
    "Monad",
    "Monadi",
    "Mosfet",
    "Morpheus",
    "Morton",
    "Molyneux",
    "Munge",
    "Munger",
    "Munt",
    "Munter",
    "Mux",
    "Nagle",
    "Nakamura",
    "Nett",
    "Nettson",
    "Netwall",
    "Netzen",
    "Netizen",
    "Neo",
    "Neon",
    "Newton",
    "Nine",
    "Niven",
    "Northbridge",
    "Null",
    "One",
    "Optekar",
    "Onishi",
    "Optic",
    "Parse",
    "Parser",
    "Perlman",
    "Phillips",
    "Phasers",
    "Phaserface",
    "Phaserson",
    "Phaserbekker",
    "Phiser",
    "Pieface",
    "Pim",
    "Pin",
    "Pinface",
    "Pisano",
    "Plug",
    "Pocket",
    "Port",
    "Portal",
    "Portalla",
    "Portlet",
    "Power",
    "Powerbekker",
    "Powermason",
    "Powell",
    "Prime",
    "Primetime",
    "Process",
    "Proto",
    "Protosmith",
    "Protoface",
    "Proxy",
    "Pulse",
    "Pulseface",
    "Quadrano",
    "Quadro",
    "Quartz",
    "Quanta",
    "Quantic",
    "Rambus",
    "Rand",
    "Render",
    "Rendersmith",
    "Renderman",
    "Resistor",
    "Rivest",
    "Rhodes",
    "Rhineheart",
    "Robertson",
    "Rocker",
    "Robot",
    "Robotson",
    "Robotis",
    "Robotka",
    "Robosmith",
    "Robomancer",
    "Root",
    "Router",
    "Routerman",
    "Rowe",
    "Rowrow",
    "Romero",
    "Sadeghpour",
    "Salome",
    "Sato",
    "Sammet",
    "Schema",
    "Schottky",
    "Screw",
    "Screws",
    "Screwsmith",
    "Scrum",
    "Scruescrue",
    "Serial",
    "Server",
    "Seven",
    "Shamir",
    "Shannon",
    "Shocks",
    "Shocksmith",
    "Shocksen",
    "Shima",
    "Shocker",
    "Shell",
    "Silicon",
    "Siliconman",
    "Siliconsmith",
    "Signal",
    "Signalsmith",
    "Signalton",
    "Signalface",
    "Silver",
    "Silverface",
    "Silverlock",
    "Silverman",
    "Silvers",
    "Silversmith",
    "Sim",
    "Sine",
    "Sinewaves",
    "Sink",
    "Six",
    "Sixdigits",
    "Slag",
    "Smart",
    "Socket",
    "Socketson",
    "Southbridge",
    "Song",
    "Sparks",
    "Sparkles",
    "Sparx",
    "Spiz",
    "Spizza",
    "Spizzo",
    "Standard",
    "Stanford",
    "Stattom",
    "Statohm",
    "Statvolt",
    "Statwatt",
    "Steel",
    "Steele",
    "Steelman",
    "Steelton",
    "Steely",
    "Stoll",
    "Suzuki",
    "Swan",
    "Swift",
    "Switch",
    "Sweeney",
    "Takeyama",
    "Ten",
    "Tesla",
    "Teslaface",
    "Teslasmith",
    "Teslamancer",
    "Tesla Warrior",
    "Thermos",
    "Three",
    "Torrent",
    "Torrentface",
    "Torrentson",
    "Transistor",
    "Trimpot",
    "Tron",
    "Tronton",
    "Tronman",
    "Tronek",
    "Turing",
    "Turingsen",
    "Turner",
    "Twelve",
    "Two",
    "Units",
    "Volt",
    "Voight",
    "Watt",
    "Wattface",
    "Wattsmith",
    "Wave",
    "Wescoff",
    "Williams",
    "Wilson",
    "Wire",
    "Wiresen",
    "Wiresson",
    "Wire Warrior",
    "Wireback",
    "Wireman",
    "Wiresmith",
    "Wiremancer",
    "Wires",
    "Yamamoto",
    "Yamaha",
    "Zener",
    "Zero",
    "Zip",
    "Zipface",
    "Zipper"
];
exports.consonants = [
    "B",
    "Br",
    "C",
    "Cr",
    "D",
    "F",
    "G",
    "H",
    "J",
    "Jad",
    "K",
    "Kr",
    "L",
    "M",
    "N",
    "P",
    "Pr",
    "Qu",
    "R",
    "S",
    "Sr",
    "St",
    "Sp",
    "T",
    "Tr",
    "V",
    "W",
    "Wr",
    "Y",
    "Z",
];
exports.lastAfterConsonant = [
    "anson",
    "urton",
    "onic",
    "all",
    "acker",
    "aban",
    "aden",
    "ark",
    "brough",
    "eyoun",
    "ell",
    "ellis",
    "edex",
    "etmer",
    "ates",
    "ideman",
    "yler",
    "illy",
    "illiumson",
    "oan",
    "ostov",
    "olotov",
    "ozhenko",
    "oss",
    "omm",
    "iker",
    "ik",
    "allister",
    "onson",
    "ogawa",
    "ulan",
    "ursor",
];
exports.lastPart1 = [
    "Bur",
    "But",
    "Dav",
    "Dod",
    "C",
    "Com",
    "Crush",
    "Ir",
    "Ember",
    "Emb",
    "War",
    "Wool",
    "Kel",
    "Sand",
    "Spin",
    "Spoke",
    "M",
    "Mc",
    "Mc'",
    "Mac",
    "Mar",
    "White",
    "Black",
    "Purple",
    "Sander",
    "Becker",
    "Baker",
    "Smith",
    "Grey",
    "O'",
    "High",
    "Hi",
    "V",
    "W",
    "Walk",
    "Land",
    "Mount",
    "Scan",
    "Sol",
];
exports.lastPart2 = [
    "aite",
    "aticus",
    "artell",
    "allister",
    "atus",
    "ave",
    "ason",
    "aton",
    "burn",
    "clinton",
    "worth",
    "sonian",
    "caster",
    "house",
    "ton",
    "caster",
    "iggins",
    "son",
    "iazzo",
    "isomb",
    "ton",
    "torn",
    "burton",
    "ich",
    "ilsworth",
    "worth",
    "worthington",
    "er",
    "eby",
    "ellen",
    "emon",
    "emonia",
    "orn",
    "os",
    "et",
    "er",
    "onian",
    "ett",
    "enter",
    "fadden",
    "adder",
    "tell",
    "tos",
    "tus",
    "cher",
    "worm",
    "win",
    "chair",
    "ler",
    "ly",
    "ley",
    "lyle",
    "over",
    "ox",
    "aney",
    "smith",
    "watcher",
    "scraper",
    "sailer",
    "coller",
    "coiler",
    "seeker",
    "sock"
];
//# sourceMappingURL=lastname.js.map