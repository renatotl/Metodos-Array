

// nos podemos adicionar itens no array ou remover itens do array.

//exemplo 1 adicionando itens no array

//-----SPILCE()---

let frutas = ["Banana","Uva","Manga","Laranja"];// array
//posição        0       1      2        3    ou indices


console.log(frutas);// imprime na tela nosso array
console.log("////////////////////////")
// PARA RODA O CÓDIGO NO TERMINAL DIGITE: node {node do arquivo}. Exemplo: node splace.js


/* Ométodo splice()

     -adicionar novos itens no array
     - remover itens do array

     O PRIMEIRO parâmetro específica em que POSIÇÃO adicionar / remover iten.

     O SEGUNDO parâmetro define o número de itens a serem removidos.

     o restante dos parâmetros os novos itens a serem adicionados.

     */

//adicionando 
// passamos o primeiro parâmetro especificando a posição o novo elemnto.
// segundo parâmetro que defino o número de itens a serem removidos.
// o 0 é porque não quero remover e sim adicionar
// o terceiro parâmetro adiciona.

frutas.splice(0,0,"Limão")
console.log(frutas);// imprime na tela nosso array

/* 0       1       2      3        4
["Limão","Banana","Uva","Manga","Laranja"]

agora o item adicionado está na posição 0 já que o primeiro parâmetro do splice se refere a posição do meu array. Como a gente não quis remover, o segundo parâmetro também foi 0 e o terceiro parâmetro foi a string Limão que adicionamos  */


console.log("///////////////////");// imprime na tela nosso array


frutas.splice(2,0,"Abacate")
console.log(frutas);// imprime na tela nosso array

/* neste caso abacate foi adicionado no indice 2 que pertencia a Uva no meu array*/

console.log("/////////////////////");// imprime na tela nosso array

/* 0       1          2       3      4        5
["Limão","Banana","abacate","Uva","Manga","Laranja"]


note que para adicionar um item ao final do meu array no primeiro parâmetro vamos colocar o indice 6 e repare que ate o momento ele não existe  */


frutas.splice(6,0,"Melão")
console.log(frutas);// imprime na tela nosso array
/* 0       1          2       3      4        5        6
["Limão","Banana","abacate","Uva","Manga","Laranja","Melão"]
é assim que nosso array vai ficar */
console.log("/////////////////////");// imprime na tela nosso array


// -----------------REMOVENDO------------


// array atual: ["Limão","Banana","abacate","Uva","Manga","Laranja","Melão"]
//  indice:         0        1        2       3      4        5        6


// a gora vamos remover então o primeiro parâmetro é o indice a ser removido
// o segundo é o número de intens a ser removidos
// como não vamos add então não vamos colocar terceiro parâmetro

/* vamos remover a Uva que está no indice 3 
o 1 significa quantos itens vamos remover que no caso é só 1*/

frutas.splice(3,1)
console.log(frutas);// imprime na tela nosso array

console.log("///////////////////");// imprime na tela nosso array

// depois da primeira remoção é assim que nosso array ficou:
/*
[ 'Limão', 'Banana', 'Abacate', 'Manga', 'Laranja', 'Melão' ]
     0        1          2         3         4         5    posições. */


     /* agora no posição 3 em abacate vamos remover 2 itens que no caso é MANGA e LARANJA. Por isso vamos colocar o número 2 no segundo parâmetro   */
     
frutas.splice(3,2)
console.log(frutas);// imprime na tela nosso array


/* por fim nosso array fica assim:
[ 'Limão', 'Banana', 'Abacate', 'Melão' ]   */
console.log("///////////////////");// imprime na tela nosso array