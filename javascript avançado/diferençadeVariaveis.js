var myVar = "hello"   //  NÃO USAR MAIS VAR( porque var é escopo global e dar para acessar de qualquer lugar do codigo e isso pode ser perigoso )
 



/*
 Var //  NÃO USAR MAIS VAR( porque var é escopo global e dar para acessar de qualquer lugar do codigo e isso pode ser perigoso )
 let = pode ser usado em escopo global e escopo local, se minha let esta detro de um if e eu tentar acessar fora do if eu não consigo
 const = pode ser usado em escopo global e local e não pode ser alterada, exeto em alguns casos
*/

if(true){
    
 let myLet = "Olá"
 const myConst = "hei"
}

console.log(myLet)