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

