/*
 - variaveis servem para guardar dados
 - regras: 
        PERMITIDO
      - pode iniciar com $
      - colocar acentos
      - Iniciar com letras
      - Letras maiusculas e minusculas

      NÃO PERMITIDO

      não pode iniciar com numero
      não pode colocar espaço no nome da variavel


      IDEIAL:

      - camel case ex: numeroDaConta
      - snake case  ex: numero_da_conta
      - sempre em ingles ex: account_number
      - nomes que fazem sentido



      diferença de VAR, LET E CONST


      VAR : pode ser alterado durante do codigo e tem escopo global ou seja, pode ser usada em qualquer parte do codigo (NÃO RECOMENDADO)

      LET: pode ser alterado e é recomendado usar no escopo local

      CONST: O const não pode ser alterado

*/

let conta_banco = 1000;

console.log(`Seu saldo em conta é de R$ ${conta_banco} Reais`)