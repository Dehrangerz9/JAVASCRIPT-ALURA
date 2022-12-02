import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    //o static significa que o atributo é compartilhado entre as classes. Ou seja, um atributo da classe em si.
    static numerodeContas

    //O get e o set são acessores de propriedades, eles servem para proteger os meus dados. O set, segue uma estrutura semelhante a uma função, e ele é utilizado para definir um novo meio de acessamos algo. O get possui uma função semelhante, mas ele é utilizado para quando queremos puxar uma informação.

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia,cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numerodeContas += 1;
        //estamos acessando o atributo da classe utilizando o nome dela, ao invés do this, pois o this refere-se ao objeto.
    }
 
   /*
   Atributos privados -> São atributos que somente a classe pode acessar e modificar, por exemplo, eu não deveria mecher no saldo de uma conta mudando o valor daquele atributo com uma simples declaração.

   Porém o JS não tem nenhuma ferramente pra barrar isso, então a convenção é, se tem _ atras de um atributo significa que ele não pode ser chamado de fora da classe.
   
   Funções, ou métodos em orientação a objetos é um bloco de código designado para realizar uma tarefa.
   */
   sacar(valor){
       if(this._saldo >= valor){
           this._saldo -= valor;
           return valor;
       }
       //Utilizamos this.saldo ao invés de ContaCorrente.saldo, pq, o this é utilizado para se referir a istancia. o conta corrente refere-se ao molde.
       //O return serve para uma função definir um valor a quem a chamou. Além disso, quando o return é executado a função para de executar.
   }

   depositar(valor){
       if (valor <= 0){
           return
       }
       this._saldo += valor;
   }
   //Early return é uma técnica utilizada para fazer verificações. Fazemos if com as condições negativas, e colocamos o return dentro.


   //composição de classe, é o ato de usar um objeto dentro de uma função. Mas atente-se uma coisa, pelo fato dela ser um OBJ se ela é alterada em qualquer lugar do código, ela sera alterada, pois o que tem dentro da função é uma referencia e não uma cópia. Diferente de colocar uma variavel fora e utilizar ela na função. Ao fz isso o valor da variavel não sera alterado e sim copiado.
   
   transferir(valor, conta){
    const valorSacado = this.sacar(valor)
    conta.depositar(valorSacado)
   }
   
}