let myVariable= 30 ;
let myVariableA= 20 ;
let comprVar= myVariable <=myVariableA;
console.log(comprVar);


// une structure conditionnelle simple , le premier parametre passe , et js lis le code inscrit dans ce parametre suelement si sa conditione st accomplie , 
// sinon, js fait quoi ? js lis la condition qui est introduite dans le parametre et s'adapet , 
// par exemple dans cette exercice , notre premier parametre est FAUX , car comprVar est FAUX comme valeur de verite , voir la ligne en haut 
// dans ce cas , js affiche le secodn parametre !!! .. inverson un peu pour voir ce que js vas faire 
if (comprVar==true){
    console.log("30 est <= 20")
}else{
    console.log("30 est >= 20")
}

// voyon en inversant la valeurs de venrité placée comme premier parametre de cette structure conditionnelle 

if (comprVar==false){
    console.log("30 est <= 20")
}else{
    console.log("30 est >= 20")
}

//  qu'est ce qui arive , si , au lieux de l'egalive de valeurs seulement "=="  dans les parametre de notres conditions on les remplacais par l'egalité strict , 
//  interpretation, qaund on utilise l'egalité stricte "===" on fait l'agalité des valeurs intresiques des variables , et meme les noms sens et le nom des variables , 

if (comprVar===false){
    console.log("30 est <= 20")
}else{
    console.log("30 est >= 20")
}

// constat , c'est la deuxieme valeur qui passe 
//  alors , si on inverse de meme 

if (comprVar===true){
    console.log("30 est <= 20")
}else{
    console.log("30 est >= 20")
}


// comparateur logiques && === et 

let a= 5;
let b= 10;
let c= 30;

let comparVar= a>=b && c<a ;
console.log(comparVar);

let cen= a && b > c;
console.log(cen);

let cenB= a && c > c && c;

console.log(cenB);

// but check out this one , the answer given here !! wowo !! how come , how does && work , asan addition or as what ? 

let cenC= a && a + c && c;
console.log(cenC);

let cenV= a && a;
console.log(cenV);

let cenS=a && b;
console.log(cenS);

let cenT= a||a;
console.log(cenT);


let cenY= a||b;
console.log(cenY);



let cenU= b||a;
console.log(cenU);

let cenI= b && a;
console.log(cenI);



let cenO= a && b;
console.log(cenO);
