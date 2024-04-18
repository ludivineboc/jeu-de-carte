/*
Créez un tableau de cartes (par exemple, des cartes de jeu comme le poker ou le jeu des 7 familles). 
Utilisez forEach pour distribuer les cartes aux joueurs de manière aléatoire et afficher les mains de chaque joueur.
*/


let arrayCartes = ["As","Roi","Dame","Valet","2 de coeur","3 de coeur","4 de coeur","5 de coeur","6 de coeur","7 de coeur","8 de coeur","9 de coeur", "10 de coeur"]
const joueurs = [];


/* -- demander le nombre de joueurs -- */
const nbJoueurs = prompt("combien de joueurs ?");
// on calcule la taille d'une main en fonction du nombre de joueurs
const tailleDeLaMain = Math.floor(arrayCartes.length / nbJoueurs);
// si chaque joueur n'a pas au moins une carte, alors on fait une alerte
if(tailleDeLaMain < 1) alert("il y a trop de joueurs et pas assez de cartes !")


/* -- ajouter les joueurs -- */
// une fonction qui ajoute un tableau (la future main du joueur)
const ajouterDesJoueurs = (nbJoueurs) => {
  for(let i = 0; i < nbJoueurs; i++){
    joueurs.push([]);
  };
};
ajouterDesJoueurs(nbJoueurs);


/*  -- préparer les mains des joueurs -- */ 
// une fonction qui enlève une carte du paquet, puis la retourne
const prendreUneCarteDuPaquet = (paquet) => { 
  return paquet.splice(Math.floor((Math.random() * paquet.length)), 1) [0];
/*       |         |   |_________________________________________|      |
         ↳ notre   |    ↳ random (0 - 0.99) * la taille du paquet       |
         array     |      |____________________________|                |
                   |          ↳ arrondi à l'entier du dessous           |
                   |                                       _____________|
                   |                                       ↳ ".splice()" 
                   |                                       renvoie un tableau 
                   ↳la méthode ".splice()" enlève          avec 1 élément, on 
                   une carte de notre paquet               le sélectionne pour renvoyer 
                   par son index                           uniquement la première valeur
                                                           de ce tableau 
*/};

const donnerUneMain = (joueur, nbDeCartesADonner) => {
  // pour chaque carte à donner au joueur
  for(let i = 1; i <= nbDeCartesADonner; i++){    
    // pioche une carte dans le paquet 
    const carteADonner = prendreUneCarteDuPaquet(arrayCartes);
    // ajoute la carte à la main du joueur
    joueur.push(carteADonner);
  }
};


joueurs.forEach((joueur) => {
  donnerUneMain(joueur, tailleDeLaMain);
});

// on affiche toutes les mains distribuées
console.table(joueurs);
