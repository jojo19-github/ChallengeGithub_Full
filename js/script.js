var poeme = document.getElementById('poeme').textContent;
var compteur = document.getElementById('compteur');
compteur.innerHTML = poeme.length;

var legumes = [];
legumes[0]= "choux";
legumes[1]="gombo";
legumes[2]="aubergine";
legumes[3]="patate douce";
legumes[4]="pomme de terre";
legumes[5]="carotte";
legumes[6]="brocoli";
legumes[7]="haricot vert";
legumes[8]="tomate";
legumes[9]="chou fleur";
legumes[10]="tubercule";

console.log(legumes[0]);
console.log(legumes[10]);
console.log(document.querySelector("compteur")>3000);
