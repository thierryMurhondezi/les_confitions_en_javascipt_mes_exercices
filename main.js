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

// Il y a cet operateur logique qu'on appel NON , 
// N O N  s'ecrit en Javascript en mettant seulement un "!" 

let nonA= !(a>b) && (b<c);
let nonB= (a>b);
let nonC= (b<c);
let nonB2= !a>b;
let nonB3= a>!b;
let nonB4= !a>!b;
let nonB5= a;
let nonB6= !a;


console.log("this here check ")

console.log(nonA);
console.log("let nonA= !(a>b) && (b<c); ")

console.log(nonB);
console.log("let nonB= (a>b);")

console.log(nonC);
console.log("let nonC= (b<c);")

console.log(nonB2);
console.log("let nonB2= !a>b;")

console.log(nonB3);
console.log("let nonB3= a>!b;")

console.log(nonB4);
console.log(" let nonB4= !a>!b  ")

console.log(nonB5);
console.log("let nonB5= a;")

console.log(nonB6);
console.log("let nonB6= !a;")

console.log(a)
console.log("console.log(a)")



console.log(!a)
console.log("console.log(!a)")


console.log(false);
console.log("false")


console.log(!false);
console.log("console.log(!false);");


console.log("CNAHGE ...ALMOST OTHER THING ")

let bum1= false>false;
console.log(bum1);
console.log("let bum1= false>false;");

let buum= true>false;
console.log(buum);
console.log("let buum= true>false;");

let bum= false>false;
console.log(bum);
console.log("let bum= false>false;");

let buuum= true>true ;
console.log(buuum);
console.log("let buuum= true>true ;");

let bu4m = true <true ;
console.log(bu4m);
console.log("let bu4m = true <true ;");

let bu5m= true>=false ;
console.log(bu5m);
console.log("let bu5m= true>=false ;");

let bu12m = false <true ;
console.log(bu12m);
console.log("let bu12m = false <true ;");

let bu13m = false <= true ;
console.log(bu13m)
console.log("let bu13m = false <= true ;")

let bu14m = true < true ;
console.log(bu14m);
console.log("let bu14m = true < true ;");

let bu6m= false == false ;
console.log(bu6m);
console.log("let bu6m= false == false ;");

let bu7m= false !== false ;
console.log(bu7m);
console.log("let bu7m= false !== false ;");

let bu8m= true == true ;
console.log(bu8m);
console.log("let bu8m= true == true ;");

let bu9m = true <=true ;
console.log(bu9m);
console.log("let bu9m = true <=true ;");

let bu10m = !true < true ;
console.log(bu10m);
console.log("let bu10m = !true < true ;")

let bu11m = true < !true ;
console.log(bu11m);
console.log("let bu11m = true < !true ;")

// NOTE: from these exercices up HERE, I've learned one thing ... and that makes me laugh today ,
// THAT .. TRUE > FALSE 
// that ..FALSE < TRUE 
// True is superieur to FALSE 
// FALSE IS INFERIOR TO TRUE 















