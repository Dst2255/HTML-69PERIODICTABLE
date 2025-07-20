document.addEventListener('DOMContentLoaded', () => {

    // --- COMPLETE AND CORRECTED DATA (All 118 Elements) ---
    const elementsData = [
        { number: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', row: 1, col: 1, mass: '1.008', summary: 'The lightest and most abundant chemical element, constituting roughly 75% of the universe\'s chemical elemental mass.' },
        { number: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', row: 1, col: 18, mass: '4.003', summary: 'A colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas group in the periodic table.' },
        { number: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal', row: 2, col: 1, mass: '6.94', summary: 'A soft, silvery-white alkali metal. Under standard conditions, it is the lightest metal and the least dense solid element.' },
        { number: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth-metal', row: 2, col: 2, mass: '9.012', summary: 'A relatively rare element in the universe, usually occurring as a product of the spallation of larger atomic nuclei that have collided with cosmic rays.' },
        { number: 5, symbol: 'B', name: 'Boron', category: 'metalloid', row: 2, col: 13, mass: '10.81', summary: 'A low-abundance element in the Solar System and in the Earth\'s crust, produced entirely by cosmic ray spallation and supernovae.' },
        { number: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', row: 2, col: 14, mass: '12.011', summary: 'The chemical basis of all known life. It is the 15th most abundant element in the Earth\'s crust, and the fourth most abundant element in the universe by mass.' },
        { number: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', row: 2, col: 15, mass: '14.007', summary: 'The most common element in the Earth\'s atmosphere, making up about 78% by volume.' },
        { number: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', row: 2, col: 16, mass: '15.999', summary: 'A highly reactive nonmetal and an oxidizing agent that readily forms oxides with most elements as well as with other compounds.' },
        { number: 9, symbol: 'F', name: 'Fluorine', category: 'nonmetal', row: 2, col: 17, mass: '18.998', summary: 'The lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions.' },
        { number: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', row: 2, col: 18, mass: '20.180', summary: 'A noble gas that gives a distinct reddish-orange glow when used in low-voltage neon glow lamps, high-voltage discharge tubes and neon advertising signs.' },
        { number: 11, symbol: 'Na', name: 'Sodium', category: 'alkali-metal', row: 3, col: 1, mass: '22.990', summary: 'A soft, silvery-white, highly reactive metal. It is an alkali metal, being in group 1 of the periodic table.' },
        { number: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth-metal', row: 3, col: 2, mass: '24.305', summary: 'An alkaline earth metal and the eighth-most-abundant element in the Earth\'s crust and ninth in the known universe as a whole.' },
        { number: 13, symbol: 'Al', name: 'Aluminum', category: 'post-transition-metal', row: 3, col: 13, mass: '26.982', summary: 'A silvery-white, soft, non-magnetic and ductile metal in the boron group. It is the third most abundant element in the Earth\'s crust.' },
        { number: 14, symbol: 'Si', name: 'Silicon', category: 'metalloid', row: 3, col: 14, mass: '28.085', summary: 'A hard and brittle crystalline solid with a blue-grey metallic lustre, and it is a tetravalent metalloid and semiconductor.' },
        { number: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetal', row: 3, col: 15, mass: '30.974', summary: 'A highly reactive element that is never found as a free element on Earth. It has several allotropes, including white, red, and black phosphorus.' },
        { number: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', row: 3, col: 16, mass: '32.06', summary: 'An abundant, multivalent and non-metallic element. Under normal conditions, sulfur atoms form cyclic octatomic molecules with a chemical formula S8.' },
        { number: 17, symbol: 'Cl', name: 'Chlorine', category: 'nonmetal', row: 3, col: 17, mass: '35.45', summary: 'The second-lightest of the halogens, it appears between fluorine and bromine in the periodic table and its properties are mostly intermediate between them.' },
        { number: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', row: 3, col: 18, mass: '39.948', summary: 'The third-most abundant gas in the Earth\'s atmosphere, at 0.934%. It is more than twice as abundant as water vapor.' },
        { number: 19, symbol: 'K', name: 'Potassium', category: 'alkali-metal', row: 4, col: 1, mass: '39.098', summary: 'A silvery-white metal that is soft enough to be cut with a knife with little force. It reacts rapidly with atmospheric oxygen.' },
        { number: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline-earth-metal', row: 4, col: 2, mass: '40.078', summary: 'An alkaline earth metal, it is a reactive metal that forms a dark oxide-nitride layer when exposed to air.' },
        { number: 21, symbol: 'Sc', name: 'Scandium', category: 'transition-metal', row: 4, col: 3, mass: '44.956', summary: 'A silvery-white metallic d-block element, it has historically been classified as a rare-earth element.' },
        { number: 22, symbol: 'Ti', name: 'Titanium', category: 'transition-metal', row: 4, col: 4, mass: '47.867', summary: 'A lustrous transition metal with a silver color, low density, and high strength. It is highly resistant to corrosion in sea water, aqua regia, and chlorine.' },
        { number: 23, symbol: 'V', name: 'Vanadium', category: 'transition-metal', row: 4, col: 5, mass: '50.942', summary: 'A hard, silvery grey, ductile, and malleable transition metal. The elemental metal is rarely found in nature.' },
        { number: 24, symbol: 'Cr', name: 'Chromium', category: 'transition-metal', row: 4, col: 6, mass: '51.996', summary: 'A steely-grey, lustrous, hard and brittle transition metal. It is the main additive in stainless steel, to which it adds anti-corrosive properties.' },
        { number: 25, symbol: 'Mn', name: 'Manganese', category: 'transition-metal', row: 4, col: 7, mass: '54.938', summary: 'A silvery-grey metal resembling iron. It is hard and very brittle, difficult to fuse, but easy to oxidize.' },
        { number: 26, symbol: 'Fe', name: 'Iron', category: 'transition-metal', row: 4, col: 8, mass: '55.845', summary: 'A metal that belongs to the first transition series and group 8 of the periodic table. It is the most common element on Earth by mass.' },
        { number: 27, symbol: 'Co', name: 'Cobalt', category: 'transition-metal', row: 4, col: 9, mass: '58.933', summary: 'A hard, lustrous, silver-grey metal. Like nickel, cobalt is found in the Earth\'s crust only in chemically combined form.' },
        { number: 28, symbol: 'Ni', name: 'Nickel', category: 'transition-metal', row: 4, col: 10, mass: '58.693', summary: 'A silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile.' },
        { number: 29, symbol: 'Cu', name: 'Copper', category: 'transition-metal', row: 4, col: 11, mass: '63.546', summary: 'A soft, malleable, and ductile metal with very high thermal and electrical conductivity.' },
        { number: 30, symbol: 'Zn', name: 'Zinc', category: 'transition-metal', row: 4, col: 12, mass: '65.38', summary: 'A slightly brittle metal at room temperature and has a blue-silvery appearance when oxidation is removed.' },
        { number: 31, symbol: 'Ga', name: 'Gallium', category: 'post-transition-metal', row: 4, col: 13, mass: '69.723', summary: 'A soft, silvery metal at standard temperature and pressure. A liquid at temperatures greater than 29.76 °C (85.57 °F).' },
        { number: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloid', row: 4, col: 14, mass: '72.630', summary: 'A lustrous, hard, grayish-white metalloid in the carbon group, chemically similar to its group neighbours silicon and tin.' },
        { number: 33, symbol: 'As', name: 'Arsenic', category: 'metalloid', row: 4, col: 15, mass: '74.922', summary: 'A metalloid which has various allotropes, but only the gray form is important to industry.' },
        { number: 34, symbol: 'Se', name: 'Selenium', category: 'nonmetal', row: 4, col: 16, mass: '78.971', summary: 'A nonmetal with properties that are intermediate between the elements above and below in the periodic table, sulfur and tellurium.' },
        { number: 35, symbol: 'Br', name: 'Bromine', category: 'nonmetal', row: 4, col: 17, mass: '79.904', summary: 'The third-lightest halogen, and is a fuming red-brown liquid at room temperature that evaporates readily to form a similarly coloured gas.' },
        { number: 36, symbol: 'Kr', name: 'Krypton', category: 'noble-gas', row: 4, col: 18, mass: '83.798', summary: 'A colorless, odorless, tasteless noble gas that occurs in trace amounts in the atmosphere and is often used with other rare gases in fluorescent lamps.' },
        { number: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali-metal', row: 5, col: 1, mass: '85.468', summary: 'A very soft, silvery-white metal in the alkali metal group. It is one of the most electropositive and alkaline elements.' },
        { number: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline-earth-metal', row: 5, col: 2, mass: '87.62', summary: 'An alkaline earth metal, a soft silver-white yellowish metallic element that is highly reactive chemically.' },
        { number: 39, symbol: 'Y', name: 'Yttrium', category: 'transition-metal', row: 5, col: 3, mass: '88.906', summary: 'A silvery-metallic transition metal chemically similar to the lanthanides and has often been classified as a "rare-earth element".' },
        { number: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition-metal', row: 5, col: 4, mass: '91.224', summary: 'A lustrous, greyish-white, soft, ductile, malleable metal that is solid at room temperature, though it is hard and brittle at lesser purities.' },
        { number: 41, symbol: 'Nb', name: 'Niobium', category: 'transition-metal', row: 5, col: 5, mass: '92.906', summary: 'A light grey, crystalline, and ductile transition metal. Pure niobium is quite soft and ductile, but impurities make it harder.' },
        { number: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition-metal', row: 5, col: 6, mass: '95.96', summary: 'A silvery-grey metal with a Mohs hardness of 5.5. It has the sixth-highest melting point of any element.' },
        { number: 43, symbol: 'Tc', name: 'Technetium', category: 'transition-metal', row: 5, col: 7, mass: '(98)', summary: 'A silvery-grey radioactive metal with a chemical symbol Tc and atomic number 43. It is the lightest element whose isotopes are all radioactive.' },
        { number: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition-metal', row: 5, col: 8, mass: '101.07', summary: 'A rare transition metal belonging to the platinum group of the periodic table. Like the other metals of the platinum group, it is inert to most other chemicals.' },
        { number: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition-metal', row: 5, col: 9, mass: '102.91', summary: 'A rare, silvery-white, hard, corrosion-resistant transition metal. It is a noble metal and a member of the platinum group.' },
        { number: 46, symbol: 'Pd', name: 'Palladium', category: 'transition-metal', row: 5, col: 10, mass: '106.42', summary: 'A rare and lustrous silvery-white metal discovered in 1803 by William Hyde Wollaston. He named it after the asteroid Pallas.' },
        { number: 47, symbol: 'Ag', name: 'Silver', category: 'transition-metal', row: 5, col: 11, mass: '107.87', summary: 'A precious metal, it has long been valued as a precious metal. It is used in currency, ornaments, jewelry, and tableware.' },
        { number: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition-metal', row: 5, col: 12, mass: '112.41', summary: 'A soft, bluish-white metal which is chemically similar to the two other stable metals in group 12, zinc and mercury.' },
        { number: 49, symbol: 'In', name: 'Indium', category: 'post-transition-metal', row: 5, col: 13, mass: '114.82', summary: 'The softest metal that is not an alkali metal. It is a silvery-white post-transition metal that looks like tin.' },
        { number: 50, symbol: 'Sn', name: 'Tin', category: 'post-transition-metal', row: 5, col: 14, mass: '118.71', summary: 'A silvery-colored metal. It is not easily oxidized in air and is used to coat other metals to prevent corrosion.' },
        { number: 51, symbol: 'Sb', name: 'Antimony', category: 'metalloid', row: 5, col: 15, mass: '121.76', summary: 'A lustrous gray metalloid, it is found in nature mainly as the sulfide mineral stibnite (Sb2S3).' },
        { number: 52, symbol: 'Te', name: 'Tellurium', category: 'metalloid', row: 5, col: 16, mass: '127.60', summary: 'A brittle, mildly toxic, rare, silver-white metalloid. Tellurium is chemically related to selenium and sulfur.' },
        { number: 53, symbol: 'I', name: 'Iodine', category: 'nonmetal', row: 5, col: 17, mass: '126.90', summary: 'A non-metallic, dark-gray/purple-black, lustrous, solid element. Iodine is the least reactive of the halogens.' },
        { number: 54, symbol: 'Xe', name: 'Xenon', category: 'noble-gas', row: 5, col: 18, mass: '131.29', summary: 'A heavy, colorless, odorless, and relatively unreactive noble gas. In a gas-filled tube, xenon emits a blue or lavenderish glow when excited by an electrical discharge.' },
        { number: 55, symbol: 'Cs', name: 'Cesium', category: 'alkali-metal', row: 6, col: 1, mass: '132.91', summary: 'A soft, silvery-gold alkali metal with a melting point of 28.5 °C (83.3 °F), which makes it one of only five elemental metals that are liquid at or near room temperature.' },
        { number: 56, symbol: 'Ba', name: 'Barium', category: 'alkaline-earth-metal', row: 6, col: 2, mass: '137.33', summary: 'The fifth element in group 2 and is a soft, silvery alkaline earth metal. Because of its high chemical reactivity, barium is never found in nature as a free element.' },
        { number: 57, symbol: 'La', name: 'Lanthanum', category: 'lanthanide', row: 9, col: 3, mass: '138.91', summary: 'A soft, ductile, silvery-white metal that tarnishes rapidly when exposed to air and is soft enough to be cut with a knife.' },
        { number: 58, symbol: 'Ce', name: 'Cerium', category: 'lanthanide', row: 9, col: 4, mass: '140.12', summary: 'A soft, ductile, and silvery-white metal that tarnishes when exposed to air, and it is soft enough to be cut with a knife.' },
        { number: 59, symbol: 'Pr', name: 'Praseodymium', category: 'lanthanide', row: 9, col: 5, mass: '140.91', summary: 'The third member of the lanthanide series. It is a soft, silvery, malleable and ductile metal.' },
        { number: 60, symbol: 'Nd', name: 'Neodymium', category: 'lanthanide', row: 9, col: 6, mass: '144.24', summary: 'A soft silvery metal that tarnishes in air. Neodymium magnets are the strongest type of permanent magnet commercially available.' },
        { number: 61, symbol: 'Pm', name: 'Promethium', category: 'lanthanide', row: 9, col: 7, mass: '(145)', summary: 'A chemical element with the symbol Pm and atomic number 61. All of its isotopes are radioactive.' },
        { number: 62, symbol: 'Sm', name: 'Samarium', category: 'lanthanide', row: 9, col: 8, mass: '150.36', summary: 'A moderately hard silvery metal that slowly oxidizes in air. Being a typical member of the lanthanide series, it usually assumes the oxidation state +3.' },
        { number: 63, symbol: 'Eu', name: 'Europium', category: 'lanthanide', row: 9, col: 9, mass: '151.96', summary: 'The most reactive of the rare-earth elements. It rapidly oxidizes in air, and is the softest of the lanthanides.' },
        { number: 64, symbol: 'Gd', name: 'Gadolinium', category: 'lanthanide', row: 9, col: 10, mass: '157.25', summary: 'A silvery-white, malleable, and ductile rare-earth element. It is found in nature only in oxidized form.' },
        { number: 65, symbol: 'Tb', name: 'Terbium', category: 'lanthanide', row: 9, col: 11, mass: '158.93', summary: 'A silvery-white, rare earth metal that is malleable, ductile, and soft enough to be cut with a knife.' },
        { number: 66, symbol: 'Dy', name: 'Dysprosium', category: 'lanthanide', row: 9, col: 12, mass: '162.50', summary: 'A rare earth element that has a metallic, bright silver luster. It is never found in nature as a free element.' },
        { number: 67, symbol: 'Ho', name: 'Holmium', category: 'lanthanide', row: 9, col: 13, mass: '164.93', summary: 'A relatively soft and malleable silvery-white rare-earth metal. It is too reactive to be found uncombined in nature.' },
        { number: 68, symbol: 'Er', name: 'Erbium', category: 'lanthanide', row: 9, col: 14, mass: '167.26', summary: 'A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements.' },
        { number: 69, symbol: 'Tm', name: 'Thulium', category: 'lanthanide', row: 9, col: 15, mass: '168.93', summary: 'The least abundant of the rare earths. It is an easily workable metal with a bright, silvery-gray luster.' },
        { number: 70, symbol: 'Yb', name: 'Ytterbium', category: 'lanthanide', row: 9, col: 16, mass: '173.05', summary: 'A soft, malleable and ductile chemical element, which displays a bright silvery lustre when pure.' },
        { number: 71, symbol: 'Lu', name: 'Lutetium', category: 'lanthanide', row: 9, col: 17, mass: '174.97', summary: 'A silvery white metal, which resists corrosion in dry air, but not in moist air. It is the last element in the lanthanide series.' },
        { number: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition-metal', row: 6, col: 4, mass: '178.49', summary: 'A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in many zirconium minerals.' },
        { number: 73, symbol: 'Ta', name: 'Tantalum', category: 'transition-metal', row: 6, col: 5, mass: '180.95', summary: 'A rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant. It is part of the refractory metals group.' },
        { number: 74, symbol: 'W', name: 'Tungsten', category: 'transition-metal', row: 6, col: 6, mass: '183.84', summary: 'A rare metal found naturally on Earth almost exclusively in chemical compounds. It has the highest melting point of all the elements discovered.' },
        { number: 75, symbol: 'Re', name: 'Rhenium', category: 'transition-metal', row: 6, col: 7, mass: '186.21', summary: 'A silvery-white, heavy, third-row transition metal in group 7 of the periodic table. It is one of the rarest elements in the Earth\'s crust.' },
        { number: 76, symbol: 'Os', name: 'Osmium', category: 'transition-metal', row: 6, col: 8, mass: '190.23', summary: 'A hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores.' },
        { number: 77, symbol: 'Ir', name: 'Iridium', category: 'transition-metal', row: 6, col: 9, mass: '192.22', summary: 'A very hard, brittle, silvery-white transition metal of the platinum group, it is the second-densest element and is the most corrosion-resistant metal.' },
        { number: 78, symbol: 'Pt', name: 'Platinum', category: 'transition-metal', row: 6, col: 10, mass: '195.08', summary: 'A dense, malleable, ductile, highly unreactive, precious, silverish-white transition metal.' },
        { number: 79, symbol: 'Au', name: 'Gold', category: 'transition-metal', row: 6, col: 11, mass: '196.97', summary: 'A bright, slightly reddish yellow, dense, soft, malleable, and ductile metal in a pure form.' },
        { number: 80, symbol: 'Hg', name: 'Mercury', category: 'transition-metal', row: 6, col: 12, mass: '200.59', summary: 'A heavy, silvery-white liquid metal. It is the only metallic element that is liquid at standard conditions for temperature and pressure.' },
        { number: 81, symbol: 'Tl', name: 'Thallium', category: 'post-transition-metal', row: 6, col: 13, mass: '204.38', summary: 'A soft gray post-transition metal that is not found free in nature. When isolated, it resembles tin, but discolors when exposed to air.' },
        { number: 82, symbol: 'Pb', name: 'Lead', category: 'post-transition-metal', row: 6, col: 14, mass: '207.2', summary: 'A heavy metal that is denser than most common materials. It is soft and malleable, and has a relatively low melting point.' },
        { number: 83, symbol: 'Bi', name: 'Bismuth', category: 'post-transition-metal', row: 6, col: 15, mass: '208.98', summary: 'A brittle metal with a silvery white color when freshly produced, but is often seen in air with a pinkish tinge owing to surface oxidation.' },
        { number: 84, symbol: 'Po', name: 'Polonium', category: 'post-transition-metal', row: 6, col: 16, mass: '(209)', summary: 'A rare and highly radioactive metal with no stable isotopes. Chemically, polonium is similar to tellurium and bismuth.' },
        { number: 85, symbol: 'At', name: 'Astatine', category: 'nonmetal', row: 6, col: 17, mass: '(210)', summary: 'A very rare radioactive chemical element with the chemical symbol At and atomic number 85. It is the heaviest of the halogens.' },
        { number: 86, symbol: 'Rn', name: 'Radon', category: 'noble-gas', row: 6, col: 18, mass: '(222)', summary: 'A radioactive, colorless, odorless, tasteless noble gas. It is one of the densest substances that remains a gas under normal conditions.' },
        { number: 87, symbol: 'Fr', name: 'Francium', category: 'alkali-metal', row: 7, col: 1, mass: '(223)', summary: 'An extremely radioactive metal that decays into astatine, radium, and radon. As an alkali metal, it has one valence electron.' },
        { number: 88, symbol: 'Ra', name: 'Radium', category: 'alkaline-earth-metal', row: 7, col: 2, mass: '(226)', summary: 'An almost pure-white alkaline earth metal, but it readily oxidizes on exposure to air, becoming black in color.' },
        { number: 89, symbol: 'Ac', name: 'Actinium', category: 'actinide', row: 10, col: 3, mass: '(227)', summary: 'A soft, silvery-white radioactive metal. It reacts rapidly with oxygen and moisture in the air forming a white coating of actinium oxide that prevents further oxidation.' },
        { number: 90, symbol: 'Th', name: 'Thorium', category: 'actinide', row: 10, col: 4, mass: '232.04', summary: 'A weakly radioactive metallic chemical element with symbol Th and atomic number 90. It is a silvery and tarnishes black when it is exposed to air.' },
        { number: 91, symbol: 'Pa', name: 'Protactinium', category: 'actinide', row: 10, col: 5, mass: '231.04', summary: 'A dense, silvery-gray actinide metal which is chemically similar to uranium and thorium.' },
        { number: 92, symbol: 'U', name: 'Uranium', category: 'actinide', row: 10, col: 6, mass: '238.03', summary: 'A silvery-white metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons.' },
        { number: 93, symbol: 'Np', name: 'Neptunium', category: 'actinide', row: 10, col: 7, mass: '(237)', summary: 'A radioactive actinide metal. Neptunium is the first transuranic element.' },
        { number: 94, symbol: 'Pu', name: 'Plutonium', category: 'actinide', row: 10, col: 8, mass: '(244)', summary: 'An actinide metal of silvery-gray appearance that tarnishes when exposed to air, and forms a dull coating when oxidized.' },
        { number: 95, symbol: 'Am', name: 'Americium', category: 'actinide', row: 10, col: 9, mass: '(243)', summary: 'A radioactive transuranic chemical element with the symbol Am and atomic number 95. It is a member of the actinide series.' },
        { number: 96, symbol: 'Cm', name: 'Curium', category: 'actinide', row: 10, col: 10, mass: '(247)', summary: 'A transuranic radioactive chemical element with symbol Cm and atomic number 96. This element of the actinide series was named after Marie and Pierre Curie.' },
        { number: 97, symbol: 'Bk', name: 'Berkelium', category: 'actinide', row: 10, col: 11, mass: '(247)', summary: 'A transuranic radioactive chemical element with the symbol Bk and atomic number 97. It is a member of the actinide and transuranium element series.' },
        { number: 98, symbol: 'Cf', name: 'Californium', category: 'actinide', row: 10, col: 12, mass: '(251)', summary: 'A radioactive metallic chemical element with symbol Cf and atomic number 98. The element was first made in 1950 at the University of California Radiation Laboratory in Berkeley.' },
        { number: 99, symbol: 'Es', name: 'Einsteinium', category: 'actinide', row: 10, col: 13, mass: '(252)', summary: 'A synthetic element with the symbol Es and atomic number 99. It is the seventh transuranic element, and an actinide.' },
        { number: 100, symbol: 'Fm', name: 'Fermium', category: 'actinide', row: 10, col: 14, mass: '(257)', summary: 'A synthetic element with the symbol Fm and atomic number 100. It is the eighth transuranic element, and the last element that can be formed by neutron bombardment.' },
        { number: 101, symbol: 'Md', name: 'Mendelevium', category: 'actinide', row: 10, col: 15, mass: '(258)', summary: 'A synthetic element with the symbol Md and atomic number 101. A metallic radioactive transuranic element in the actinide series.' },
        { number: 102, symbol: 'No', name: 'Nobelium', category: 'actinide', row: 10, col: 16, mass: '(259)', summary: 'A synthetic chemical element with the symbol No and atomic number 102. It is named in honor of Alfred Nobel.' },
        { number: 103, symbol: 'Lr', name: 'Lawrencium', category: 'actinide', row: 10, col: 17, mass: '(262)', summary: 'A synthetic chemical element with chemical symbol Lr and atomic number 103. It is named in honor of Ernest Lawrence.' },
        { number: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition-metal', row: 7, col: 4, mass: '(267)', summary: 'A synthetic chemical element with symbol Rf and atomic number 104, named after physicist Ernest Rutherford.' },
        { number: 105, symbol: 'Db', name: 'Dubnium', category: 'transition-metal', row: 7, col: 5, mass: '(268)', summary: 'A synthetic chemical element with the symbol Db and atomic number 105. Dubnium is highly radioactive.' },
        { number: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition-metal', row: 7, col: 6, mass: '(271)', summary: 'A synthetic chemical element with the symbol Sg and atomic number 106. It is named after the American nuclear chemist Glenn T. Seaborg.' },
        { number: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition-metal', row: 7, col: 7, mass: '(272)', summary: 'A synthetic chemical element with the symbol Bh and atomic number 107. It is named after Danish physicist Niels Bohr.' },
        { number: 108, symbol: 'Hs', name: 'Hassium', category: 'transition-metal', row: 7, col: 8, mass: '(277)', summary: 'A synthetic chemical element with the symbol Hs and atomic number 108. It is named after the German state of Hesse.' },
        { number: 109, symbol: 'Mt', name: 'Meitnerium', category: 'transition-metal', row: 7, col: 9, mass: '(278)', summary: 'A synthetic chemical element with the symbol Mt and atomic number 109. It is named after Lise Meitner.' },
        { number: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'transition-metal', row: 7, col: 10, mass: '(281)', summary: 'A synthetic chemical element with the symbol Ds and atomic number 110. It is an extremely radioactive synthetic element.' },
        { number: 111, symbol: 'Rg', name: 'Roentgenium', category: 'transition-metal', row: 7, col: 11, mass: '(282)', summary: 'A synthetic chemical element with the symbol Rg and atomic number 111. It is an extremely radioactive synthetic element.' },
        { number: 112, symbol: 'Cn', name: 'Copernicium', category: 'transition-metal', row: 7, col: 12, mass: '(285)', summary: 'A synthetic chemical element with the symbol Cn and atomic number 112. It is an extremely radioactive synthetic element.' },
        { number: 113, symbol: 'Nh', name: 'Nihonium', category: 'post-transition-metal', row: 7, col: 13, mass: '(286)', summary: 'A synthetic chemical element with the symbol Nh and atomic number 113. It is an extremely radioactive synthetic element.' },
        { number: 114, symbol: 'Fl', name: 'Flerovium', category: 'post-transition-metal', row: 7, col: 14, mass: '(289)', summary: 'A superheavy artificial chemical element with the symbol Fl and atomic number 114. It is an extremely radioactive synthetic element.' },
        { number: 115, symbol: 'Mc', name: 'Moscovium', category: 'post-transition-metal', row: 7, col: 15, mass: '(293)', summary: 'A synthetic chemical element with the symbol Mc and atomic number 115. It is an extremely radioactive synthetic element.' },
        { number: 116, symbol: 'Lv', name: 'Livermorium', category: 'post-transition-metal', row: 7, col: 16, mass: '(293)', summary: 'A synthetic chemical element with the symbol Lv and atomic number 116. It is an extremely radioactive synthetic element.' },
        { number: 117, symbol: 'Ts', name: 'Tennessine', category: 'nonmetal', row: 7, col: 17, mass: '(294)', summary: 'A synthetic chemical element with the symbol Ts and atomic number 117. It is an extremely radioactive synthetic element.' },
        { number: 118, symbol: 'Og', name: 'Oganesson', category: 'noble-gas', row: 7, col: 18, mass: '(294)', summary: 'A synthetic chemical element with the symbol Og and atomic number 118. It has the highest atomic number and highest atomic mass of all known elements.' }
    ];

    const periodicTable = document.getElementById('periodic-table');
    const modalContainer = document.getElementById('modal-container');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // Create a document fragment for performance
    const fragment = document.createDocumentFragment();

    elementsData.forEach(el => {
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${el.category}`;
        elementDiv.style.setProperty('--col', el.col);
        elementDiv.style.setProperty('--row', el.row);
        
        elementDiv.innerHTML = `
            <div class="element-number">${el.number}</div>
            <div class="element-symbol">${el.symbol}</div>
            <div class="element-name">${el.name}</div>
        `;
        
        elementDiv.addEventListener('click', () => openModal(el));
        fragment.appendChild(elementDiv);
    });

    periodicTable.appendChild(fragment);

    function openModal(el) {
        document.getElementById('modal-symbol').textContent = el.symbol;
        document.getElementById('modal-name').textContent = el.name;
        document.getElementById('modal-number-category').textContent = `Element #${el.number} • ${el.category.replace(/-/g, ' ')}`;
        document.getElementById('modal-summary').textContent = el.summary;
        
        const detailsContainer = document.getElementById('modal-details');
        detailsContainer.innerHTML = `
            <div><span>Atomic Mass</span>${el.mass} u</div>
            <div><span>Category</span>${el.category.replace(/-/g, ' ')}</div>
        `;
        
        modalContainer.classList.add('visible');
    }

    function closeModal() {
        modalContainer.classList.remove('visible');
    }

    modalCloseBtn.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            closeModal();
        }
    });

});
