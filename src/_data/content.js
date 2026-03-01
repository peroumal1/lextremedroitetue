const header = 'Attaques terroristes d\'extrême droite en France';
const footer = 'Source principale : Wikipédia — <a href="https://fr.wikipedia.org/wiki/Liste_d%27attaques_terroristes_d%27extr%C3%AAme_droite" target="_blank">Liste d\'attaques terroristes d\'extrême droite</a>.';
// Entries in retro-chronological order (most recent first).
const entries = [
  {
    id: "2023-05-23-tours-bombe-lgbtq",
    color: "black",
    date: "2023-05-23",
    title: "Attentat à la bombe incendiaire contre un centre LGBT+ à Tours",
    body: "Le 23 mai 2023 à Tours un adolescent intégriste catholique de 17 ans dépose un engin explosif artisanal à l'acide chlorhydrique contre un centre LGBT+. L'engin ne provoque aucune victime ; le suspect est arrêté le 1er juin 2023.",
    links: [
      { href: "https://en.wikipedia.org/wiki/2023_Tours_bombing", linkText: "Wikipedia" },
    ],
  },
  {
    id: "2022-12-23-fusillade-kurdes-paris",
    categories: ["morts", "blessés"],
    morts: 3,
    blesses: 4,
    color: "black",
    faicon: "skull",
    date: "2022-12-23",
    title: "Fusillade raciste de la rue d'Enghien à Paris (William Malet)",
    body: "Le 23 décembre 2022 William Malet 69 ans ouvre le feu rue d'Enghien à Paris sur le centre culturel kurde Ahmet-Kaya et deux établissements voisins par haine raciste tuant 3 personnes et en blessant 4. Il est arrêté sur place.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Fusillade_du_23_d%C3%A9cembre_2022_%C3%A0_Paris", linkText: "Wikipedia" },
    ],
  },
  {
    id: "2022-03-19-assassinat-aramburu",
    categories: ["morts"],
    morts: 1,
    color: "black",
    faicon: "skull",
    date: "2022-03-19",
    title: "Assassinat de Federico Martin Aramburu à Paris (GUD)",
    body: "Le 19 mars 2022 l'ex-rugbyman argentin Federico Martin Aramburu est abattu boulevard Saint-Germain à Paris par Loïk Le Priol et Romain Bouvier deux militants de l'ultradroite membres du Groupe union défense (GUD) après une altercation dans un bar.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Liste_d%27attaques_terroristes_d%27extr%C3%AAme_droite", linkText: "Wikipedia" },
    ],
  },
  {
    id: "2019-10-28-mosquee-bayonne",
    categories: ["blessés"],
    blesses: 2,
    color: "black",
    faicon: "knife",
    date: "2019-10-28",
    title: "Attaque de la mosquée de Bayonne (Claude Sinké)",
    body: "Le 28 octobre 2019 à Bayonne Claude Sinké octogénaire anciennement investi par le Front National tente d'incendier la mosquée puis tire sur deux fidèles Maati Baggar et Amar Kariouch qui sont grièvement blessés et hospitalisés pendant plusieurs mois.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Attaque_de_la_mosqu%C3%A9e_de_Bayonne", linkText: "Wikipedia" },
    ],
  },
  {
    id: "2000-11-24-attentat-la-baule",
    categories: ["morts", "blessés"],
    morts: 1,
    blesses: 3,
    color: "black",
    faicon: "skull",
    date: "2000-11-24",
    title: "Attentat de La Baule (Philippe Rivet)",
    body: "Le 24 novembre 2000 à La Baule un colis piégé déposé dans les locaux d'un syndicat explose tuant Jacques Leparoux qui venait de le brancher. L'engin visait le député-maire du Croisic ; son auteur Philippe Rivet ancien membre du GUD et du FNJ est condamné à 28 ans de réclusion.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Liste_d%27attaques_terroristes_d%27extr%C3%AAme_droite", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1995-02-21-assassinat-ibrahim-ali",
    categories: ["morts"],
    morts: 1,
    color: "black",
    faicon: "skull",
    date: "1995-02-21",
    title: "Assassinat d'Ibrahim Ali à Marseille (militants Front National)",
    body: "Le 21 février 1995 Ibrahim Ali lycéen comorien de 17 ans est abattu d'une balle dans le dos avenue des Aygalades à Marseille par Robert Lagier militant du Front National en train de coller des affiches. Lagier est condamné en 1998 à 15 ans de réclusion criminelle.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Affaire_Ibrahim_Ali", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1988-12-19-sonacotra-cagnes-sur-mer",
    categories: ["morts", "blessés"],
    morts: 1,
    blesses: 12,
    color: "black",
    faicon: "skull",
    date: "1988-12-19",
    title: "Attentat du foyer Sonacotra de Cagnes-sur-Mer (PNFE)",
    body: "Le 19 décembre 1988 trois bombes explosent dans le foyer-hôtel Sonacotra de Cagnes-sur-Mer hébergeant des travailleurs immigrés tunisiens tuant un résident et blessant grièvement 12 personnes. L'attentat est l'œuvre de membres du Parti nationaliste français et européen (PNFE).",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Parti_nationaliste_fran%C3%A7ais_et_europ%C3%A9en", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1988-10-23-cinema-saint-michel",
    categories: ["blessés"],
    blesses: 14,
    color: "black",
    faicon: "knife",
    date: "1988-10-23",
    title: "Attentat du cinéma Saint-Michel à Paris (intégristes catholiques)",
    body: "Dans la nuit du 22 au 23 octobre 1988 des intégristes catholiques déposent un engin incendiaire dans le cinéma Espace Saint-Michel à Paris protestant contre la projection de La Dernière Tentation du Christ de Martin Scorsese. L'incendie fait 14 blessés dont 4 graves.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Attentat_du_cin%C3%A9ma_Saint-Michel", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1984-11-11-chateaubriant-fusillade",
    categories: ["morts", "blessés"],
    morts: 2,
    blesses: 5,
    color: "black",
    faicon: "skull",
    date: "1984-11-11",
    title: "Fusillade de Châteaubriant — ouvriers turcs tués par un militant néonazi",
    body: "Le 11 novembre 1984 à Châteaubriant le militant d'extrême droite Frédéric Boulay ouvre le feu au fusil sur des ouvriers turcs réunis dans un salon de thé en criant Heil Hitler. Deux ouvriers sont tués et cinq autres blessés ; Boulay est condamné à la réclusion criminelle à perpétuité.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Fusillade_du_11_novembre_1984_%C3%A0_Ch%C3%A2teaubriant", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1983-09-30-foire-marseille-commandos-delta",
    categories: ["morts", "blessés"],
    morts: 1,
    blesses: 26,
    color: "black",
    faicon: "skull",
    date: "1983-09-30",
    title: "Attentat à la Foire internationale de Marseille (Commandos Delta)",
    body: "Le 30 septembre 1983 une bombe explose au Palais des congrès de Marseille lors de la Foire internationale à proximité des pavillons américain soviétique et algérien. L'attentat revendiqué par les Commandos Delta fait 1 mort et 26 blessés.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Commando_Delta", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1980-04-19-foyer-protestants-paris",
    categories: ["blessés"],
    blesses: 4,
    color: "black",
    faicon: "knife",
    date: "1980-04-19",
    title: "Attentat contre le foyer des étudiants protestants à Paris (Groupe Charles-Martel)",
    body: "Le 19 avril 1980 à Paris le Groupe Charles-Martel pose une bombe au foyer des étudiants protestants. L'attentat blesse 4 personnes.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Liste_d%27attaques_terroristes_d%27extr%C3%AAme_droite", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1979-09-20-assassinat-pierre-goldman",
    categories: ["morts"],
    morts: 1,
    color: "black",
    faicon: "skull",
    date: "1979-09-20",
    title: "Assassinat de Pierre Goldman à Paris (Honneur de la Police)",
    body: "Le 20 septembre 1979 Pierre Goldman militant d'extrême gauche est abattu place des Peupliers à Paris. L'attentat est revendiqué par le groupe d'extrême droite Honneur de la Police ; les auteurs ne seront jamais retrouvés.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Pierre_Goldman", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1978-05-04-assassinat-henri-curiel",
    categories: ["morts"],
    morts: 1,
    color: "black",
    faicon: "skull",
    date: "1978-05-04",
    title: "Assassinat d'Henri Curiel à Paris (Commandos Delta)",
    body: "Le 4 mai 1978 à Paris le militant anticolonialiste Henri Curiel est abattu de quatre balles au pied de son immeuble du 4 rue Rollin. L'attentat est revendiqué par les Commandos Delta groupe néofasciste lié à l'OAS mais les auteurs ne seront jamais formellement identifiés.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Henri_Curiel", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1973-12-14-consulat-algerien-marseille",
    categories: ["morts", "blessés"],
    morts: 4,
    blesses: 28,
    color: "black",
    faicon: "skull",
    date: "1973-12-14",
    title: "Attentat contre le consulat d'Algérie à Marseille (Groupe Charles-Martel)",
    body: "Le 14 décembre 1973 une bombe explose dans le hall du consulat général d'Algérie à Marseille tuant 4 personnes et en blessant 28. L'attentat est revendiqué par le Groupe Charles-Martel composé d'anciens pieds-noirs proches de l'OAS.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Attentat_contre_le_consulat_d%27Alg%C3%A9rie_%C3%A0_Marseille", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1968-10-28-rue-git-le-coeur",
    color: "black",
    date: "1968-10-28",
    title: "Attentat rue Gît-le-Cœur à Paris (Occident)",
    body: "Le 28 octobre 1968 le groupe d'extrême droite Occident pose une bombe rue Gît-le-Cœur à Paris. L'attentat ne fait pas de victimes.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Liste_d%27attaques_terroristes_d%27extr%C3%AAme_droite", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1962-08-22-petit-clamart",
    color: "black",
    date: "1962-08-22",
    title: "Attentat du Petit-Clamart contre de Gaulle (OAS)",
    body: "Le 22 août 1962 un commando de l'OAS tend une embuscade au convoi présidentiel au Petit-Clamart et ouvre le feu sur la voiture du général de Gaulle. Bien que criblée de balles la DS présidentielle prend la fuite et de Gaulle en réchappa indemne.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Attentat_du_Petit-Clamart", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1961-09-08-pont-sur-seine",
    color: "black",
    date: "1961-09-08",
    title: "Attentat de Pont-sur-Seine contre de Gaulle (OAS)",
    body: "Le 8 septembre 1961 l'OAS pose un engin explosif sur la route empruntée par le convoi présidentiel à Pont-sur-Seine. L'humidité réduit la puissance de l'explosion et le général de Gaulle et son épouse sortent indemnes.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Attentat_de_Pont-sur-Seine", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1961-06-18-train-strasbourg-paris",
    categories: ["morts", "blessés"],
    morts: 28,
    blesses: 170,
    color: "black",
    faicon: "skull",
    date: "1961-06-18",
    title: "Attentat du train Strasbourg-Paris (OAS)",
    body: "Le 18 juin 1961 une bombe posée sur la voie ferrée fait dérailler le train express no 12 Strasbourg-Paris près de Vitry-le-François. L'attentat attribué à l'OAS dans le contexte de la guerre d'Algérie cause 28 morts et 170 blessés.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Attentat_du_train_Strasbourg-Paris", linkText: "Wikipedia" },
    ],
  },
  {
    id: "1914-07-31-assassinat-jaures",
    categories: ["morts"],
    morts: 1,
    color: "black",
    faicon: "skull",
    date: "1914-07-31",
    title: "Assassinat de Jean Jaurès",
    body: "Le 31 juillet 1914 à Paris Raoul Villain membre du mouvement ultranationaliste Ligue des jeunes amis de l'Alsace-Lorraine abat le leader socialiste Jean Jaurès d'une balle dans la tête au café du Croissant. Villain sera acquitté en 1919.",
    links: [
      { href: "https://fr.wikipedia.org/wiki/Assassinat_de_Jean_Jaur%C3%A8s", linkText: "Wikipedia" },
    ],
  },
];

// Page details
const pageTitle = 'Attaques terroristes d\'extrême droite en France';
const pageDescription = 'Chronologie des attaques terroristes d\'extrême droite en France, avec bilan humain (morts et blessés).';
const pageAuthor = 'eperoumalnaik';
const showMirrorLinks = true;

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  showMirrorLinks,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
