/*
  OPERADOR TERNARIO OU CONDICIONAL

*/


let rain = true;

const umbrela = rain ? 'levar guarda chuva': 'não levar guarda chuva'
                        //se for verdadeiro   se for falso

console.log(umbrela);


// REALIZAR TRANSFERENCIA

const saldo_em_conta = true;
const conta_nao_bloqueada = true;
const conta_existe = true;


const tranferencia_Ok = saldo_em_conta && conta_nao_bloqueada && conta_existe ? 'Fazer transferencia' : 'Não fazer tranferencia'

console.log(tranferencia_Ok)